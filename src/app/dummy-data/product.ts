import { ProductType } from "../types/product-type";

const DUMMY_PRODUCT: ProductType = {
  title: "کفش ورزشی",
  price: 500000,
  featureImage: "images/product/feature-image.jpg",
  gallery: [
    {
      id: 1,
      name: "image-1",
      src: "images/product/image-1.jpg",
    },
    {
      id: 2,
      name: "image-1",
      src: "images/product/image-2.jpg",
    },
    {
      id: 3,
      name: "image-1",
      src: "images/product/image-3.jpg",
    },
    {
      id: 4,
      name: "image-1",
      src: "images/product/image-4.jpg",
    },
  ],
};

export default DUMMY_PRODUCT;
