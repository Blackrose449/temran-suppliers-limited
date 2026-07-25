import { useState } from "react";

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  aspect?: string;
  eager?: boolean;
  fetchPriority?: "high" | "low" | "auto";
}

export function ImageWithSkeleton({
  src,
  alt,
  aspect = "aspect-square",
  className = "",
  eager = false,
  fetchPriority,
  ...rest
}: Props) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={`relative overflow-hidden ${aspect} bg-muted ${className}`}>
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-muted to-muted/60" aria-hidden />
      )}
      <img
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        {...(fetchPriority ? { fetchpriority: fetchPriority } : {})}
        onLoad={() => setLoaded(true)}
        className={`h-full w-full object-cover transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
        {...rest}
      />
    </div>
  );
}
