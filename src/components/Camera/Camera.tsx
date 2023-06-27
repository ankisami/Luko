import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ViewStyle,
  StyleProp,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Camera, PermissionResponse } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { RootTabScreenProps } from "navigation/types";
import colors from "theme/colors";

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
    }
  };

  const takePicture = async () => {
    if (cameraRef) {
      try {
        const data = await cameraRef.current?.takePictureAsync();
        console.log("Picture taken", data?.uri);
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
    // position: "absolute",
    // zIndex: 99999,
    // top: 0,
    // left: 0,
    // right: 0,
    // bottom: 0,
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
