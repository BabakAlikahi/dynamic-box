interface gallery {
  id: number;
  name: string;
  src: string;
}

export type ProductType = {
  title: string;
  price: number;
  featureImage: string;
  gallery: gallery[];
};
