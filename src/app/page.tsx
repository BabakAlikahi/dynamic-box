import Image from "next/image";
import DUMMY_PRODUCT from "./dummy-data/product";

export default function Home() {
  const products = DUMMY_PRODUCT;

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
        <div className="mt-4 flex gap-8">
          {products.gallery.map((item) => (
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
      </div>
    </div>
  );
}
