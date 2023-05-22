import { nanoid } from "nanoid";
import { Item } from "../../models";

export type Enchilada =
  | "SAUCE & CHEESE ON TOP + $1.29"
  | "SAUCE ONLY, NO CHEESE+ $1.00"
  | "CHEESE ON TOP+ $1.00"
  | "QUESO STYLE+ $2.19"
  | "NO ENCHILADA STYLE";

export type EnchiladaItem = Item<Enchilada>;

export const enchiladaItems: Array<EnchiladaItem> = [
  {
    id: nanoid(),
    category: "enchilada",
    saleItem: "SAUCE & CHEESE ON TOP + $1.29",
    imageUrl: "https://cdn.caferio.com/200170.jpg",
  },
  {
    id: nanoid(),
    category: "enchilada",
    saleItem: "SAUCE ONLY, NO CHEESE+ $1.00",
    imageUrl: "https://cdn.caferio.com/200206.jpg",
  },
  {
    id: nanoid(),
    category: "enchilada",
    saleItem: "CHEESE ON TOP+ $1.00",
    imageUrl: "https://cdn.caferio.com/200216.jpg",
  },
  {
    id: nanoid(),
    category: "enchilada",
    saleItem: "QUESO STYLE+ $2.19",
    imageUrl: "https://cdn.caferio.com/251090.jpg",
  },
  {
    id: nanoid(),
    category: "enchilada",
    saleItem: "NO ENCHILADA STYLE",
    imageUrl: "https://cdn.caferio.com/200175.jpg",
  },
];
