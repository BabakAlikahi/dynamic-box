import { ProductType } from "../types/product-type";

const DUMMY_PRODUCT: ProductType = {
  title: "کفش ورزشی",
  price: 500000,
  featureImage: "images/product/feature-image.webp",
  gallery: [
    {
      id: 1,
      name: "image-1",
      src: "images/product/image-1.webp",
    },
    {
      id: 2,
      name: "image-2",
      src: "images/product/image-2.webp",
    },
    {
      id: 3,
      name: "image-3",
      src: "images/product/image-3.webp",
    },
    {
      id: 4,
      name: "image-4",
      src: "images/product/image-4.webp",
    },
    {
      id: 5,
      name: "image-5",
      src: "images/product/image-5.webp",
    },
  ],
  size: [
    {
      id: 1,
      name: "m",
    },
    {
      id: 2,
      name: "l",
    },
    {
      id: 3,
      name: "xl",
    },
  ],
};

export default DUMMY_PRODUCT;
