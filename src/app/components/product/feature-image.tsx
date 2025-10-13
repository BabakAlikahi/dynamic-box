import Image from "next/image";

type Props = {
  imgSrc: string;
  imgAlt: string;
};

function FeatureImage({ imgSrc, imgAlt }: Props) {
  return (
    <div className="relative aspect-square">
      <Image
        src={`/${imgSrc}`}
        fill
        alt={imgAlt}
      />
    </div>
  );
}

export default FeatureImage;
