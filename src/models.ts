export type Category =
  | "tortilla"
  | "protein"
  | "rice"
  | "beans"
  | "sauce"
  | "enchilada";

export type Item<T> = {
  id: string;
  saleItem: T;
  category: Category;
  imageUrl: string;
  additionalPrice?: number;
};
