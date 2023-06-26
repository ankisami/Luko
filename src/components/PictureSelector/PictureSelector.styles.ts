import { StyleSheet } from "react-native";
import { colors } from "theme/colors";

export const styles = StyleSheet.create({
  pictureContainer: {
    marginVertical: 15,
    height: 150,
    width: 150,
    overflow: "hidden",
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
    fontWeight: "bold",
    lineHeight: 24,
  },
});

export default styles;
