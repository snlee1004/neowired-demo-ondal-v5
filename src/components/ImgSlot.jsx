export default function ImgSlot({ src, alt, className = "" }) {
  return (
    <img
      src={src}
      alt={alt}
      className={`h-full w-full object-cover ${className}`}
      onError={(e) => {
        e.currentTarget.style.background = "#e8e4e6";
        e.currentTarget.alt = "이미지 슬롯";
      }}
    />
  );
}
