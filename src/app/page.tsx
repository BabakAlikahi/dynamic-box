"use client";

import { useRef } from "react";
import { useFitCount } from "./hooks/useFitCount";

import DUMMY_PRODUCT from "./dummy-data/product";
import GalleryItem from "./components/product/gallery-item";
import FeatureImage from "./components/product/feature-image";
import ProductDetail from "./components/product/product-detail";

export default function Home() {
  const products = DUMMY_PRODUCT;
  const containerRef = useRef<HTMLDivElement>(null);
  const count = useFitCount(containerRef, 80);

  return (
    <div className="flex gap-8 px-10 py-4">
      <div className="w-2/5 shrink-0 pb-2 shadow-2xl rounded overflow-hidden">
        <FeatureImage
          imgSrc={products.featureImage}
          imgAlt={products.title}
        />
        <div
          ref={containerRef}
          className="mt-4 flex gap-8"
        >
          {products.gallery.slice(0, count).map((item) => (
            <GalleryItem
              key={item.id}
              imgSrc={item.src}
              imgAlt={item.name}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <ProductDetail products={products} />
      </div>
    </div>
  );
}
