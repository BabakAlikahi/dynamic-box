import Image from "next/image";

type Props = {
  imgSrc: string;
  imgAlt: string;
};

function FeatureImage({ imgSrc, imgAlt }: Props) {
  return (
    <div className="relative aspect-square overflow-hidden rounded">
      <Image
        src={`/${imgSrc}`}
        fill
        alt={imgAlt}
      />
    </div>
  );
}

export default FeatureImage;
