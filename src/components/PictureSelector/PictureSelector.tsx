import React, { useState } from "react";
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
// import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import * as ImagePicker from "expo-image-picker";

type Props = {
  picture?: string;
  errorMessage?: string;
  onChangePicture: (img: string) => void;
};
const PictureSelector = ({
  picture,
  errorMessage,
  onChangePicture: handleChangePicture,
}: Props) => {
  const pickImageFromGallery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      handleChangePicture(result.assets[0].uri);
    }
  };

  return (
    <View style={[styles.pictureContainer, !picture && styles.containerBorder]}>
      {picture ? (
        <>
          <Image source={{ uri: picture }} style={styles.pictureContent} />
          <TouchableOpacity onPress={() => handleChangePicture("")}>
            <TrashSVG width={34} height={34} style={styles.deleteIcon} />
          </TouchableOpacity>
          {errorMessage && (
            <Text style={styles.errorMessage}>{errorMessage}</Text>
          )}
        </>
      ) : (
        <TouchableOpacity
          style={styles.pictureContent}
          onPress={pickImageFromGallery}
        >
          <>
            <Entypo name="camera" size={48} color={colors.mainBlue} />
            <Text style={styles.subTitle}>Add photo</Text>
          </>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default PictureSelector;
