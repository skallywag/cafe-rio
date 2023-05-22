import { nanoid } from "nanoid";
import { Item } from "../../models";

export type Beans =
  | "BLACK BEANS"
  | "PINTO BEANS"
  | "HALF & HALF BEANS"
  | "NO BEANS"
  | "DOUBLE BLACK BEANS, NO RICE"
  | "DOUBLE PINTO BEANS, NO RICE";

export type BeansItem = Item<Beans>;

export const beansItems: Array<BeansItem> = [
  {
    id: nanoid(),
    category: "beans",
    imageUrl: "https://cdn.caferio.com/251001.jpg",
    saleItem: "BLACK BEANS",
  },
  {
    id: nanoid(),
    category: "beans",
    imageUrl: "https://cdn.caferio.com/251006.jpg",
    saleItem: "PINTO BEANS",
  },
  {
    id: nanoid(),
    category: "beans",
    imageUrl: "https://cdn.caferio.com/200220.jpg",
    saleItem: "HALF & HALF BEANS",
  },
  {
    id: nanoid(),
    category: "beans",
    imageUrl: "https://cdn.caferio.com/200055.jpg",
    saleItem: "NO BEANS",
  },
  {
    id: nanoid(),
    category: "beans",
    imageUrl: "https://cdn.caferio.com/251027.jpg",
    saleItem: "DOUBLE BLACK BEANS, NO RICE",
  },
  {
    id: nanoid(),
    category: "beans",
    imageUrl: "https://cdn.caferio.com/251028.jpg",
    saleItem: "DOUBLE PINTO BEANS, NO RICE",
  },
];
