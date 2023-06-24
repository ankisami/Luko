import { useEffect, useState } from "react";
import { Dimensions, FlatList, StyleSheet, View } from "react-native";
import { InventoryPreviewCard, Title } from "components";
import { RootTabScreenProps } from "navigation/types";
import Colors from "theme/colors";
import { InventoryItem } from "models/Inventory.d";
import { InventoryItemsMocked } from "mocks/InventoryItems.mocks";
export default function InventoryScreen({
  navigation,
  route,
}: RootTabScreenProps<"Inventory">) {
  const [items, setItems] = useState<InventoryItem[]>([]);

  const handleAddButtonPress = () => navigation.navigate("AddItem");

  useEffect(() => {
    const data = InventoryItemsMocked;
    setItems(data);
  }, []);

  return (
    <View style={styles.container}>
      <Title onButtonPress={handleAddButtonPress}>{route.name}</Title>
      <FlatList
        contentContainerStyle={styles.InventoryPreviewCardList}
        numColumns={2}
        data={items}
        renderItem={({ item }) => (
          <InventoryPreviewCard
            key={item.id}
            title={item.name}
            photo={item.photo}
            price={item.purchasePrice}
          />
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
