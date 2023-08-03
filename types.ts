export interface IBanner {
  id: string;
  label: string;
  imageUrl: string;
}

export interface ICategory {
  id: string;
  name: string;
  banner: IBanner;
}

export interface IProduct {
  id: string;
  name: string;
  description: string;
  category: ICategory;
  price: string;
  size: ISize;
  color: IColor;
  images: IImage[];
  isFeatured: boolean;
}

export interface ISize {
  id: string;
  name: string;
  value: string;
}

export interface IColor {
  id: string;
  name: string;
  value: string;
}

export interface IImage {
  id: string;
  url: string;
}
