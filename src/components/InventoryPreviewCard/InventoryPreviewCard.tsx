import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./InventoryPreviewCard.style";

type Props = {
  title: string;
  photo: string;
  price: number;
};

const InventoryPreviewCard = ({ title, photo, price }: Props) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: photo }} style={styles.image} />

      <View style={styles.textInfos}>
        <Text style={styles.title}>{title}</Text>
        <Text>€{price}</Text>
      </View>
    </View>
  );
};

export default InventoryPreviewCard;
