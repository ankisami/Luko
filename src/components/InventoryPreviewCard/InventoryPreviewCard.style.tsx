import { Dimensions, StyleSheet } from "react-native";
import { colors } from "theme/colors";
import { fonts } from "theme/fonts";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    width: Dimensions.get("window").width / 2 - 40,
    height: 265,
    borderRadius: 10,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
    overflow: "hidden",
  },
  image: {
    height: 158,
  },
  textInfos: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    height: 77,
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  title: {
    fontFamily: fonts.bold,
    fontSize: 19,
    lineHeight: 26,
  },
});
