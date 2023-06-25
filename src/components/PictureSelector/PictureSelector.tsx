import { Entypo } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { colors } from "theme/colors";
import styles from "./PictureSelector.styles";

type Props = {
  onChangePicture?: () => void;
};
const PictureSelector = ({ onChangePicture: handleChangePicture }: Props) => (
  <View style={styles.pictureContainer}>
    <TouchableOpacity
      style={styles.pictureContent}
      onPress={handleChangePicture}
    >
      <>
        <Entypo name="camera" size={48} color={colors.mainBlue} />
        <Text style={styles.subTitle}>Add photo</Text>
      </>
    </TouchableOpacity>
  </View>
);

export default PictureSelector;
