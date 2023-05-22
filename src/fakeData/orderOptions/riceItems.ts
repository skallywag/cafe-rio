import { nanoid } from "nanoid";
import { Item } from "../../models";

export type Rice = "CILANTRO LIME RICE" | "DOUBLE RICE, NO BEANS" | "NO RICE";

export type RiceItem = Item<Rice>;

export const riceItems: Array<RiceItem> = [
  {
    id: nanoid(),
    category: "rice",
    saleItem: "CILANTRO LIME RICE",
    imageUrl: "https://cdn.caferio.com/200072.jpg",
  },
  {
    id: nanoid(),
    category: "rice",
    saleItem: "DOUBLE RICE, NO BEANS",
    imageUrl: "https://cdn.caferio.com/251030.jpg",
  },
  {
    id: nanoid(),
    saleItem: "NO RICE",
    category: "rice",
    imageUrl: "https://cdn.caferio.com/200073.jpg",
  },
];
