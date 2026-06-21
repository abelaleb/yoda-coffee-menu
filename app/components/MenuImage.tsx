type MenuImageProps = {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
};

export default function MenuImage({ src, alt, className, width = 800, height = 800 }: MenuImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
}
