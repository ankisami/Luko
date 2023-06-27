import { useCallback, useEffect, useState } from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import { InventoryPreviewCard, SearchBar, Title } from "components";
import Colors from "theme/colors";
import { RootTabScreenProps } from "navigation/types";
import { InventoryItem } from "models/Inventory.d";
import { getInventoryItems } from "api/InventoryApi";
import { sortItemsByName, filteredItemsByName } from "utils/sortFunction";

export default function InventoryScreen({
  navigation,
  route,
}: RootTabScreenProps<"Inventory">) {
  const [items, setItems] = useState<InventoryItem[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const getData = useCallback(async () => {
    try {
      const inventoryItemStorage = await getInventoryItems();
      const itemsSorted = sortItemsByName(inventoryItemStorage);
      setItems(itemsSorted);
    } catch (e) {
      console.error(e);
    }
  }, [route, navigation]);

  const handleAddButtonPress = () => navigation.navigate("AddItem");

  useEffect(() => {
    // Simulate fetching data from server
    // Replace a API call by a AsyncStorage call for this case study
    const focusHandler = navigation.addListener("focus", () => {
      getData();
    });
    return focusHandler;
  }, [navigation, getData]);

  return (
    <View style={styles.container}>
      <Title onButtonPress={handleAddButtonPress}>{route.name}</Title>

      <FlatList
        contentContainerStyle={styles.InventoryPreviewCardList}
        numColumns={2}
        data={filteredItemsByName(items, searchValue)}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <SearchBar
            value={searchValue}
            onChangeText={(value) => setSearchValue(value)}
          />
        }
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
