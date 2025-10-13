import Image from "next/image";

type Props = {
  imgSrc: string;
  imgAlt: string;
};

export default function GalleryItem({ imgSrc, imgAlt }: Props) {
  return (
    <div className="relative h-20 w-20">
      <Image
        src={`/${imgSrc}`}
        fill
        alt={imgAlt}
      />
    </div>
  );
}
