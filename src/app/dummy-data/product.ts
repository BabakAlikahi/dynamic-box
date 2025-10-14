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
      name: "40",
    },
    {
      id: 2,
      name: "42",
    },
    {
      id: 3,
      name: "43",
    },
  ],
  description:
    "رویه این کتانی از بافت اسپیسر 5 لایه و TPU و چرم تهیه شده است که ترکیب این 3 جذابیت خاص و در عین حال مقاومت بی نظیری به آن می بخشد. گردش هوا به داخل کفش از تمامی نقاط انجام می شود تا به هبچ عنوان پا در داخل کفش دچار تعریق یا بو گرفتگی نشود. لوگوی نیوبالانس با طراحی بسیار خاص بر روی کتانی و طراحی نام 1906 جذابیت بی حد و اندازه به این کفش می دهد. رویه این کتانی توسط نخ ماهیگیری به زیره کفش متصل شده است تا به مقاومت این کفش بیافزاید.",
};

export default DUMMY_PRODUCT;
