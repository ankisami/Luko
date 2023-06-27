import { InventoryItem } from "models/Inventory";

export const sortItemsByName = (
  itemsToSort: InventoryItem[]
): InventoryItem[] => {
  return itemsToSort.sort((a, b) => a.name.localeCompare(b.name));
};

export const filteredItemsByName = (list: InventoryItem[], value: string) =>
  list.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()));
