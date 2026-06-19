import QRCode from "qrcode";
import { jsPDF } from "jspdf";
import { writeFileSync, readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const url = process.argv[2] || "https://yoda-coffee-menu.vercel.app";
const pngPath = resolve(__dirname, "../public/images/qr-code.png");
const pdfPath = resolve(__dirname, "../public/images/qr-code.pdf");

// Generate QR code PNG
const pngBuffer = await QRCode.toBuffer(url, {
  width: 500,
  margin: 2,
  color: {
    dark: "#2C1810",
    light: "#F5E6D3",
  },
});

writeFileSync(pngPath, pngBuffer);
console.log(`QR PNG saved to ${pngPath}`);

// Generate PDF with QR code centered on A4
const doc = new jsPDF({
  orientation: "portrait",
  unit: "mm",
  format: "a4",
});

const pageWidth = doc.internal.pageSize.getWidth();
const pageHeight = doc.internal.pageSize.getHeight();
const qrSize = 80; // mm
const qrX = (pageWidth - qrSize) / 2;
const qrY = 60;

// Coffee background
doc.setFillColor(44, 24, 16);
doc.rect(0, 0, pageWidth, pageHeight, "F");

// White card behind QR
doc.setFillColor(245, 230, 211);
doc.roundedRect(qrX - 10, qrY - 10, qrSize + 20, qrSize + 20, 5, 5, "F");

// QR code image
const pngBase64 = pngBuffer.toString("base64");
doc.addImage(`data:image/png;base64,${pngBase64}`, "PNG", qrX, qrY, qrSize, qrSize);

// Title
doc.setTextColor(245, 230, 211);
doc.setFontSize(28);
doc.text("Yoda Coffee", pageWidth / 2, 35, { align: "center" });

// Subtitle
doc.setFontSize(14);
doc.setTextColor(212, 165, 116);
doc.text("Scan for Menu", pageWidth / 2, qrY + qrSize + 25, { align: "center" });

// URL
doc.setFontSize(10);
doc.setTextColor(245, 230, 211);
doc.text(url, pageWidth / 2, qrY + qrSize + 35, { align: "center" });

// Footer
doc.setFontSize(8);
doc.setTextColor(150, 130, 120);
doc.text("Open Daily · 7:00 AM – 9:00 PM", pageWidth / 2, pageHeight - 20, { align: "center" });

doc.save(pdfPath);
console.log(`QR PDF saved to ${pdfPath}`);
