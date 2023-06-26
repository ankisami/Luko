import { useCallback, useEffect, useState } from "react";
import {
  Alert,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { InventoryPreviewCard, Title } from "components";
import Colors from "theme/colors";
import { RootTabScreenProps } from "navigation/types";
import { InventoryItem } from "models/Inventory.d";
import { InventoryItemsMocked } from "mocks/InventoryItems.mocks";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function InventoryScreen({
  navigation,
  route,
}: RootTabScreenProps<"Inventory">) {
  const [items, setItems] = useState<InventoryItem[]>([]);

  const handleAddButtonPress = () => navigation.navigate("AddItem");

  const initMockedData = async () => {
    try {
      const sortedItems = InventoryItemsMocked.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      await AsyncStorage.setItem(
        "@inventoryItemStorage",
        JSON.stringify(sortedItems)
      );
      setItems(sortedItems);
    } catch (e) {
      console.error(e);
    }
  };

  const getData = useCallback(async () => {
    try {
      const inventoryItemStorage = await AsyncStorage.getItem(
        "@inventoryItemStorage"
      );
      inventoryItemStorage === null
        ? initMockedData()
        : setItems(
            JSON.parse(inventoryItemStorage).sort(
              (a: InventoryItem, b: InventoryItem) =>
                a.name.localeCompare(b.name)
            )
          );
    } catch (e) {
      console.error(e);
    }
  }, [route, navigation]);

  useEffect(() => {
    console.log("useEffect");
    // Simulate fetching data from server
    // Replace a API call by a AsyncStorage call for this case study
    const focusHandler = navigation.addListener("focus", () => {
      getData();
    });
    return focusHandler;
  }, [navigation, getData]);

  console.log("Iventory screen items", items);
  return (
    <View style={styles.container}>
      <Title onButtonPress={handleAddButtonPress}>{route.name}</Title>
      <FlatList
        contentContainerStyle={styles.InventoryPreviewCardList}
        numColumns={2}
        data={items}
        renderItem={({ item }) => (
          <TouchableOpacity
            key={item.id}
            onPress={() =>
              navigation.navigate({
                name: "AddItem",
                params: { item: item },
              } as any)
            }
          >
            <InventoryPreviewCard item={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: Colors.background,
  },
  InventoryPreviewCardList: {
    justifyContent: "space-evenly",
  },
});
