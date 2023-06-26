import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./InventoryPreviewCard.styles";
import { InventoryItem } from "models/Inventory.d";

type Props = {
  item: InventoryItem;
};

const InventoryPreviewCard = ({ item }: Props) => {
  const formattedPrice = new Intl.NumberFormat().format(item.purchasePrice);

  return (
    <View style={styles.container}>
      <Image source={{ uri: item.photo }} style={styles.image} />

      <View style={styles.textInfos}>
        <Text style={styles.title} numberOfLines={2}>
          {item.name}
        </Text>
        <Text style={styles.price}>€ {formattedPrice ?? "0"}</Text>
      </View>
    </View>
  );
};

export default InventoryPreviewCard;
