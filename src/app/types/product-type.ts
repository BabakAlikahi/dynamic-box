interface gallery {
  id: number;
  name: string;
  src: string;
}
interface size {
  id: number;
  name: string;
  
}

export type ProductType = {
  title: string;
  price: number;
  featureImage: string;
  gallery: gallery[];
  size:size[]
};
