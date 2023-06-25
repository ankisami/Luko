import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./InventoryPreviewCard.styles";

type Props = {
  title: string;
  photo: string;
  price: number;
};

const InventoryPreviewCard = ({ title, photo, price }: Props) => {
  const formattedPrice = new Intl.NumberFormat().format(price);

  return (
    <View style={styles.container}>
      <Image source={{ uri: photo }} style={styles.image} />

      <View style={styles.textInfos}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
        <Text style={styles.price}>€ {formattedPrice ?? "0"}</Text>
      </View>
    </View>
  );
};

export default InventoryPreviewCard;
