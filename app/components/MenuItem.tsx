type MenuItemProps = {
  name: string;
  price: string;
  desc?: string;
};

export default function MenuItem({ name, price, desc }: MenuItemProps) {
  return (
    <div className="menu-item group">
      <div className="item-row">
        <span className="item-name group-hover:text-surface-tint transition-colors">{name}</span>
        <div className="flex-grow border-b border-dashed border-outline-variant mx-2 opacity-50" />
        <span className="item-price">{price}</span>
      </div>
      {desc && <p className="item-desc">{desc}</p>}
    </div>
  );
}
