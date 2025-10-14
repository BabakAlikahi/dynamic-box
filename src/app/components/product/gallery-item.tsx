import Image from "next/image";

type Props = {
  imgSrc: string;
  imgAlt: string;
  isLast?: boolean;
  remainingCount?: number;
};

export default function GalleryItem({ imgSrc, imgAlt, isLast, remainingCount }: Props) {
  return (
    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded">
      <Image
        src={`/${imgSrc}`}
        fill
        alt={imgAlt}
      />
      {isLast && remainingCount && remainingCount > 0 && (
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded bg-black/5 text-white backdrop-blur-xs">
          +{remainingCount}
        </div>
      )}
    </div>
  );
}
