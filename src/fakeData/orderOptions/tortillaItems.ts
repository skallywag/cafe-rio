import { nanoid } from "nanoid";
import { Item } from "../../models";

export type Tortilla = "Flour" | "Wheat";

export type TortillaItem = Item<Tortilla>;

export const tortillaItems: Array<TortillaItem> = [
  {
    id: nanoid(),
    saleItem: "Flour",
    category: "tortilla",
    imageUrl: "https://cdn.caferio.com/200045.jpg",
  },
  {
    id: nanoid(),
    saleItem: "Wheat",
    category: "tortilla",
    imageUrl: "https://cdn.caferio.com/200050.jpg",
  },
];
