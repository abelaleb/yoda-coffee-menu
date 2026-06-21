export default function PillHeader({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <h2 className={`pill-header ${className}`}>{children}</h2>;
}
