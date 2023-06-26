import React from "react";
import styles from "./PictureSelector.styles";
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { colors } from "theme/colors";
import TrashSVG from "assets/svg/trash.svg";

type Props = {
  picture?: string;
  onChangePicture?: () => void;
  onDeletePicture?: () => void;
};
const PictureSelector = ({
  picture,
  onDeletePicture: handleDeletePicture,
  onChangePicture: handleChangePicture,
}: Props) => (
  <View style={[styles.pictureContainer, !picture && styles.containerBorder]}>
    {picture ? (
      <>
        <TouchableWithoutFeedback
          onPress={handleChangePicture}
          style={{ flex: 1 }}
        >
          <Image source={{ uri: picture }} style={styles.pictureContent} />
        </TouchableWithoutFeedback>
        <TouchableOpacity onPress={handleDeletePicture}>
          <TrashSVG width={34} height={34} style={styles.deleteIcon} />
        </TouchableOpacity>
      </>
    ) : (
      <TouchableOpacity
        style={styles.pictureContent}
        onPress={handleChangePicture}
      >
        <>
          <Entypo name="camera" size={48} color={colors.mainBlue} />
          <Text style={styles.subTitle}>Add photo</Text>
        </>
      </TouchableOpacity>
    )}
  </View>
);

export default PictureSelector;
