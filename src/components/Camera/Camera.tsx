import React, { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ViewStyle,
  StyleProp,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Camera, PermissionResponse } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import colors from "theme/colors";
import Toast from "react-native-toast-message";

type Props = {
  style?: StyleProp<ViewStyle>;
  onChangePicture: (uri: string) => void;
};

const CameraScreen = ({ onChangePicture: handleSavePicture, style }: Props) => {
  const [cameraPermission, setCameraPermission] =
    useState<PermissionResponse>();
  const [mediaLibraryPermission, setmMediaLibraryPermission] =
    useState<PermissionResponse>();
  const cameraRef = useRef<Camera>(null);

  const handlePermissions = async () => {
    if (!cameraPermission?.granted) {
      const cameraAllowed = await Camera.requestCameraPermissionsAsync();
      setCameraPermission(cameraAllowed);
    }
    if (!mediaLibraryPermission?.granted) {
      const mediaLibraryAllowed = await MediaLibrary.requestPermissionsAsync();
      setmMediaLibraryPermission(mediaLibraryAllowed);
    }
  };

  useEffect(() => {
    handlePermissions();
  }, []);

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
      <Camera style={styles.camera} ref={cameraRef}></Camera>
      <TouchableOpacity style={styles.buttonsContainer} onPress={takePicture}>
        <Entypo name="camera" size={28} color={colors.black} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CameraScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  camera: {
    flex: 1,
  },
  buttonsContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
    backgroundColor: "transparent",
    flexDirection: "row",
  },
});
