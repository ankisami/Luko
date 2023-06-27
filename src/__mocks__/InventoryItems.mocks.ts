import { InventoryItem } from "../models/Inventory";

export const InventoryItemsMocked: InventoryItem[] = [
  {
    id: 1,
    name: "Cartier ring",
    purchasePrice: 5780,
    type: "JEWELRY",
    description: "Gift from my grandfather",
    photo: "https://i.ibb.co/znXC7LQ/marcus-lewis-U63z-XX2f7ho-unsplash.jpg",
  },
  {
    id: 2,
    name: "Guitar",
    purchasePrice: 850,
    type: "MUSIC_INSTRUMENT",
    photo: "https://i.ibb.co/4dfndL2/louis-hansel-M-d-J-Scwa-LE-unsplash.jpg",
  },
  {
    id: 3,
    name: "Lou.Yetu necklace",
    purchasePrice: 60,
    type: "OTHER",
    photo: "https://i.ibb.co/znXC7LQ/marcus-lewis-U63z-XX2f7ho-unsplash.jpg",
  },
  {
    id: 4,
    name: "Item 4",
    purchasePrice: 200,
    type: "OTHER",
    photo: "https://i.ibb.co/znXC7LQ/marcus-lewis-U63z-XX2f7ho-unsplash.jpg",
  },
  {
    id: 5,
    name: "Item 5",
    purchasePrice: 300,
    type: "OTHER",
    photo: "https://i.ibb.co/znXC7LQ/marcus-lewis-U63z-XX2f7ho-unsplash.jpg",
  },
];

// Add 10 more items
// for (let i = 6; i <= 15; i++) {
//   InventoryItemsMocked.push({
//     id: i,
//     name: `Item ${i}`,
//     purchasePrice: Math.floor(Math.random() * 1000) + 1,
//     type: "OTHER",
//     photo: `https://example.com/item${i}.jpg`,
//   });
// }
