export default function MenuGrid({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`menu-grid ${className}`}>{children}</div>;
}
