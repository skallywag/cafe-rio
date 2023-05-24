import { nanoid } from "nanoid";
import { Item } from "../../models";

export type Protein =
  | "Carne Asada"
  | "SWEET PORK BARBACOA"
  | "SHREDDED CHICKEN BREAST"
  | "CHILE ROAST BEEF"
  | "VEGETARIAN"
  | "FIRE-GRILLED STEAK"
  | "FIRE-GRILLED CHICKEN"
  | "ADD ANOTHER PROTEIN"
  | "EXTRA PROTEIN + 3.29";

export type ProteinItem = Item<Protein>;

export const proteinItems: Array<ProteinItem> = [
  {
    id: nanoid(),
    category: "protein",
    saleItem: "Carne Asada",
    imageUrl: "https://cdn.caferio.com/50255.jpg",
  },
  {
    id: nanoid(),
    category: "protein",
    saleItem: "SWEET PORK BARBACOA",
    imageUrl: "https://cdn.caferio.com/50230.jpg",
  },
  {
    id: nanoid(),
    category: "protein",
    saleItem: "SHREDDED CHICKEN BREAST",
    imageUrl: "https://cdn.caferio.com/50210.jpg",
  },
  {
    id: nanoid(),
    category: "protein",
    saleItem: "CHILE ROAST BEEF",
    imageUrl: "https://cdn.caferio.com/50220.jpg",
  },
  {
    id: nanoid(),
    category: "protein",
    saleItem: "VEGETARIAN",
    imageUrl: "https://cdn.caferio.com/50270.jpg",
  },
  {
    id: nanoid(),
    category: "protein",
    saleItem: "FIRE-GRILLED STEAK",
    imageUrl: "https://cdn.caferio.com/50250.jpg",
    additionalPrice: 1.29,
  },
  {
    id: nanoid(),
    category: "protein",
    saleItem: "FIRE-GRILLED CHICKEN",
    imageUrl: "https://cdn.caferio.com/50240.jpg",
    additionalPrice: 1.29,
  },
  {
    id: nanoid(),
    category: "protein",
    saleItem: "EXTRA PROTEIN + 3.29",
    imageUrl: "https://www.caferio.com/images/brick-button-2x.jpg",
    additionalPrice: 3.29,
  },
];
