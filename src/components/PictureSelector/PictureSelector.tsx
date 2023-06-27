import React, { useRef, useState } from "react";
import { TouchableOpacity, View, Text, Image, Modal } from "react-native";
import styles from "./PictureSelector.styles";
import { Entypo } from "@expo/vector-icons";
import { colors } from "theme/colors";
import TrashSVG from "assets/svg/trash.svg";
import * as ImagePicker from "expo-image-picker";
import { Button, Camera } from "components";

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
  const [showModalOptions, setShowModalOptions] = useState(false);
  const [cameraIsOpen, setCameraIsOpen] = useState(false);
  const modalRef = useRef();

  const pickImageFromGallery = async () => {
    setShowModalOptions(false);
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

  const handleTakePicture = async (uri: string) => {
    handleChangePicture(uri);
    setCameraIsOpen(false);
  };

  const openCamera = async () => {
    setShowModalOptions(false);
    setCameraIsOpen(true);
  };

  return (
    <>
      {cameraIsOpen ? (
        <Camera
          onChangePicture={handleTakePicture}
          style={styles.cameraContainer}
        />
      ) : (
        <View
          style={[styles.pictureContainer, !picture && styles.containerBorder]}
        >
          {picture && (
            <>
              <Image source={{ uri: picture }} style={styles.pictureContent} />
              <TouchableOpacity onPress={() => handleChangePicture("")}>
                <TrashSVG width={34} height={34} style={styles.deleteIcon} />
              </TouchableOpacity>
              {errorMessage && (
                <Text style={styles.errorMessage}>{errorMessage}</Text>
              )}
            </>
          )}

          {!picture && (
            <TouchableOpacity
              style={styles.pictureContent}
              onPress={() => setShowModalOptions(true)}
            >
              <>
                <Entypo name="camera" size={48} color={colors.mainBlue} />
                <Text style={styles.subTitle}>Add photo</Text>
              </>
            </TouchableOpacity>
          )}
        </View>
      )}

      <Modal
        visible={showModalOptions}
        transparent
        animationType="slide"
        onRequestClose={() => setShowModalOptions(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Button
              title="From Gallery..."
              onPress={pickImageFromGallery}
              style={styles.modalButton}
            />
            <Button
              title="Take Picture"
              onPress={openCamera}
              style={styles.modalButton}
            />
            <Button
              title="Close"
              onPress={() => setShowModalOptions(false)}
              style={styles.modalButton}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

export default PictureSelector;
