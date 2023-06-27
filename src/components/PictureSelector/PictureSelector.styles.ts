import { StyleSheet } from "react-native";
import { colors } from "theme/colors";
import fonts from "theme/fonts";

export const styles = StyleSheet.create({
  pictureContainer: {
    marginVertical: 15,
    height: 150,
    width: 150,
  },
  containerBorder: {
    borderRadius: 75,
    borderStyle: "dashed",
    borderWidth: 2,
    borderColor: colors.mainGrey,
  },
  pictureContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 75,
  },
  deleteIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  subTitle: {
    marginTop: 10,
    fontSize: 17,
    fontFamily: fonts.bold,
    lineHeight: 24,
  },
  errorMessage: {
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 17,
    color: colors.error,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: colors.white,
    padding: 16,
    borderRadius: 10,
    height: 200,
    width: 200,
    justifyContent: "space-around",
    alignItems: "center",
  },

  modalButton: {
    height: 50,
  },
  cameraContainer: {
    flex: 1,
    minHeight: 400,
  },
});

export default styles;
