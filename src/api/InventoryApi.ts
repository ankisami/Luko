import AsyncStorage from "@react-native-async-storage/async-storage";
import { InventoryItemsMocked } from "mocks/InventoryItems.mocks";
import { InventoryItem } from "models/Inventory";

// Simulate fetching data from server
// Replace a API call by a AsyncStorage call for this case study

export const getInventoryItems = async (): Promise<InventoryItem[]> => {
  const inventoryItemStorage = await AsyncStorage.getItem(
    "@inventoryItemStorage"
  );
  return inventoryItemStorage
    ? JSON.parse(inventoryItemStorage)
    : initMockedData();
};

export const setInventoryItems = async (inventoryItems: InventoryItem[]) => {
  await AsyncStorage.setItem(
    "@inventoryItemStorage",
    JSON.stringify(inventoryItems)
  );
};

const initMockedData = async () => {
  await AsyncStorage.setItem(
    "@inventoryItemStorage",
    JSON.stringify(InventoryItemsMocked)
  );
  return InventoryItemsMocked;
};
