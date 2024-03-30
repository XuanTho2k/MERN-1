export interface ICategory {
  _id: string | number;
  name: string;
  slug: string;
  description: string;
  isHidden: boolean;
  products: [string];
}
