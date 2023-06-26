import { InventoryItem } from "models/Inventory";

export const sortItemsByName = (
  itemsToSort: InventoryItem[]
): InventoryItem[] => {
  return itemsToSort.sort((a, b) => a.name.localeCompare(b.name));
};
