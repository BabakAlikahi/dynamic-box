"use client";

import { useRef } from "react";
import { useFitCount } from "./hooks/useFitCount";

import Image from "next/image";

import DUMMY_PRODUCT from "./dummy-data/product";
import { FaRegStar } from "react-icons/fa6";
export default function Home() {
  const products = DUMMY_PRODUCT;
  const containerRef = useRef<HTMLDivElement>(null);
  const count = useFitCount(containerRef, 80);

  return (
    <div className="flex gap-2">
      <div className="w-2/5 bg-green-800">
        <div className="relative aspect-square">
          <Image
            src={`/${products.featureImage}`}
            fill
            alt={products.title}
          />
        </div>
        <div
          ref={containerRef}
          className="mt-4 flex gap-8"
        >
          {products.gallery.slice(0, count).map((item) => (
            <div
              key={item.id}
              className="relative h-30 w-30"
            >
              <Image
                src={`/${item.src}`}
                fill
                alt={item.name}
              />
            </div>
          ))}
        </div>
      </div>
      <div>
        <h1>{products.title}</h1>
        <div className="flex gap-2">
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
        </div>
        <div>
          <h3>{products.price}</h3>
        </div>
        <div>
          <p>سایز</p>
          <div className="flex flex-wrap gap-2">
            {products.size.map((item) => (
              <h3
                className="min-w-40 rounded-2xl bg-gray-600 bg-gradient-to-l p-2 text-center"
                key={item.id}
              >
                {item.name}
              </h3>
            ))}
          </div>
        </div>
        <div>
          <p>توضیحات</p>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut cum, harum reiciendis possimus quod soluta maxime, veniam ipsum temporibus
            eaque commodi earum neque. Doloremque quibusdam aut cupiditate, deserunt ad libero!{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
