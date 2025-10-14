"use client";

import { useRef, useState } from "react";
import { useFitCount } from "./hooks/useFitCount";

import DUMMY_PRODUCT from "./dummy-data/product";
import Lightbox from "yet-another-react-lightbox";
import GalleryItem from "./components/product/gallery-item";
import FeatureImage from "./components/product/feature-image";
import ProductDetail from "./components/product/product-detail";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

export default function Home() {
  const [open, setOpen] = useState(false);

  const products = DUMMY_PRODUCT;
  const containerRef = useRef<HTMLDivElement>(null);
  const count = useFitCount(containerRef, 80);
  const handleOpenLightBox = () => {
    setOpen(true);
  };

  return (
    <div className="flex flex-col gap-8 px-10 py-4 md:flex-row">
      <div className="h-fit shrink-0 overflow-hidden rounded shadow-2xl md:w-2/5">
        <FeatureImage
          imgSrc={products.featureImage}
          imgAlt={products.title}
        />

        <div
          ref={containerRef}
          className="flex justify-center gap-4 p-4"
        >
          {products.gallery.slice(0, count).map((item, index) => (
            <GalleryItem
              key={item.id}
              imgSrc={item.src}
              imgAlt={item.name}
              isLast={index === count - 1}
              remainingCount={index === count - 1 ? products.gallery.length - count : undefined}
              onClick={handleOpenLightBox}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <ProductDetail products={products} />
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        plugins={[Thumbnails]}
        slides={products.gallery}
      />
    </div>
  );
}
