export default function Footer() {
  return (
    <footer className="bg-surface full-width p-8 border-t border-outline-variant/20 mt-12">
      <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-10 max-w-[1200px] mx-auto text-on-surface-variant font-body text-sm">
        <div className="mb-4 md:mb-0 text-center md:text-left text-sm italic font-medium">
          All Prices include 15% VAT &amp; 5% service charge | +251 909223333 | @yodacoffee.addis
        </div>
        <div className="flex gap-6 items-center">
          <a className="text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">
            <span className="font-semibold text-sm">Facebook</span>
          </a>
          <a className="text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">
            <span className="font-semibold text-sm">Instagram</span>
          </a>
          <a className="text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">
            <span className="font-semibold text-sm">Twitter</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
