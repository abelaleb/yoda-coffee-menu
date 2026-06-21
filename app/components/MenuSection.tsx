import PillHeader from "./PillHeader";
import MenuItem from "./MenuItem";
import MenuImage from "./MenuImage";
import SectionCard from "./SectionCard";

type Item = { name: string; price: string; desc?: string };

type MenuSectionProps = {
  title: string;
  items: Item[];
  id?: string;
  headerImages?: { src: string; alt: string }[];
  footerImage?: { src: string; alt: string; className?: string };
  card?: boolean;
  className?: string;
};

export default function MenuSection({ title, items, id, headerImages, footerImage, card, className = "" }: MenuSectionProps) {
  const content = (
    <section className={`relative ${className}`} id={id}>
      <div className="text-center md:text-left mb-8">
        <PillHeader>{title}</PillHeader>
        {headerImages && headerImages.length > 0 && (
          <div className="grid grid-cols-2 gap-4 mb-8">
            {headerImages.map((img, i) => (
              <div key={i} className="h-48 overflow-hidden rounded-xl">
                <MenuImage src={img.src} alt={img.alt} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-col gap-4">
        {items.map((it) => (
          <MenuItem key={it.name} name={it.name} price={it.price} desc={it.desc} />
        ))}
      </div>
      {footerImage && (
        <div className={footerImage.className || "mt-8"}>
          <MenuImage src={footerImage.src} alt={footerImage.alt} className="w-full h-full object-cover" />
        </div>
      )}
    </section>
  );

  if (card) {
    return <SectionCard>{content}</SectionCard>;
  }
  return content;
}
