import { FaStar } from "react-icons/fa6";
import { ProductType } from "@/app/types/product-type";

import React from "react";

type Props = {
  products: ProductType;
};

function ProductDetail({ products }: Props) {
  return (
    <>
      <Section>
        <h1 className="text-4xl font-semibold">{products.title}</h1>
        <div className="flex gap-1">
          <FaStar className="text-yellow-300" />
          <FaStar className="text-yellow-300" />
          <FaStar className="text-yellow-300" />
          <FaStar className="text-yellow-300" />
          <FaStar className="text-yellow-300" />
        </div>
      </Section>

      <h3 className="text-2xl font-semibold text-blue-500">{products.price} تومان</h3>

      <Section>
        <p className="font-semibold">سایز</p>
        <div className="flex flex-wrap gap-2">
          {products.size.map((item) => (
            <h3
              className="min-w-40 rounded-2xl bg-gray-100 bg-gradient-to-l p-2 text-center"
              key={item.id}
            >
              {item.name}
            </h3>
          ))}
        </div>
      </Section>
      <Section>
        <p className="font-semibold">توضیحات</p>
        <div>{products.description}</div>
      </Section>
    </>
  );
}

export default ProductDetail;

const Section = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col gap-2">{children}</div>;
};
