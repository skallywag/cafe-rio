import { nanoid } from "nanoid";
import { Item } from "../../models";

export type Sauce =
  | "MILD - ROASTED TOMATILLO"
  | "MEDIUM - HATCH GREEN CHILE"
  | "HOT - ROASTED RED CHILE"
  | "HOTTER - HABANERO SAUCE"
  | "ADD MORE SAUCE"
  | "NO SAUCE"
  | "SAUCE ON THE SIDE";

export type SauceItem = Item<Sauce>;

export const sauceItems: Array<SauceItem> = [
  {
    id: nanoid(),
    saleItem: "MILD - ROASTED TOMATILLO",
    category: "sauce",
    imageUrl: "https://cdn.caferio.com/200150.jpg",
  },
  {
    id: nanoid(),
    category: "sauce",
    saleItem: "MEDIUM - HATCH GREEN CHILE",
    imageUrl: "https://cdn.caferio.com/200155.jpg",
  },
  {
    id: nanoid(),
    category: "sauce",
    saleItem: "HOT - ROASTED RED CHILE",
    imageUrl: "https://cdn.caferio.com/200160.jpg",
  },
  {
    id: nanoid(),
    category: "sauce",
    saleItem: "HOTTER - HABANERO SAUCE",
    imageUrl: "https://cdn.caferio.com/200163.jpg",
  },
  {
    id: nanoid(),
    category: "sauce",
    saleItem: "NO SAUCE",
    imageUrl: "https://cdn.caferio.com/200165.jpg",
  },
  {
    id: nanoid(),
    category: "sauce",
    saleItem: "ADD MORE SAUCE",
    imageUrl: "https://cdn.caferio.com/customize/4751.jpg",
  },
  {
    id: nanoid(),
    category: "sauce",
    saleItem: "SAUCE ON THE SIDE",
    imageUrl: "https://cdn.caferio.com/100586.jpg",
  },
];
