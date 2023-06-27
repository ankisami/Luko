import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  ViewStyle,
  StyleProp,
  Alert,
} from "react-native";
import styles from "./Camera.styles";
import { Entypo } from "@expo/vector-icons";
import { Camera as ExpoCamera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import colors from "theme/colors";
import Toast from "react-native-toast-message";

type Props = {
  style?: StyleProp<ViewStyle>;
  onChangePicture: (uri: string) => void;
};

const Camera = ({ onChangePicture: handleSavePicture, style }: Props) => {
  const cameraRef = useRef<ExpoCamera>(null);

  const saveImage = async (img: string) => {
    try {
      const saved = await MediaLibrary.createAssetAsync(img);
      handleSavePicture(saved.uri);
    } catch (error) {
      console.error(error);
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Impossible to save the picture. Try again",
      });
    }
  };

  const takePicture = async () => {
    if (cameraRef) {
      try {
        const data = await cameraRef.current?.takePictureAsync();
        if (data?.uri) saveImage(data?.uri);
      } catch (error) {
        console.error(error);
      }
    }
  };
  return (
    <SafeAreaView style={[styles.container, style]}>
      <ExpoCamera style={styles.camera} ref={cameraRef} />
      <TouchableOpacity style={styles.buttonsContainer} onPress={takePicture}>
        <Entypo name="camera" size={28} color={colors.black} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Camera;
