export enum EBrandTags {
  Iphone = 'Iphone',
  Samsung = 'Samsung',
  Xiaomi = 'Xiaomi',
  Huawei = 'Huawei',
}

export enum EStorageTags {
  GB128 = '128GB',
  GB256 = '256GB',
  GB512 = '512GB',
  TB1 = '1TB',
}

export enum EColorTags {
  Black = 'Black',
  White = 'White',
  Blue = 'Blue',
  Red = 'Red',
  Green = 'Green',
  Purple = 'Purple',
  Yellow = 'Yellow',
  Pink = 'Pink',
  Orange = 'Orange',
  Gray = 'Gray',
  Cyan = 'Cyan',
  Brown = 'Brown',

}

export interface IProduct {
  id: number;
  name: string;
  price: number;
  discountPrice: number;
  description: string;
  showcaseImage: string;
  catalogImages: string[];
  brand: EBrandTags;
  storage: EStorageTags;
  color: EColorTags;
}

export interface IReview {
  id: number;
  productId: number;
  name: string;
  content: string;
  rating: number;
}