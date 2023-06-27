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
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    height: 158,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  textInfos: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    height: 77,
    paddingVertical: 15,
    paddingHorizontal: 16,
  },
  title: {
    fontFamily: fonts.bold,
    fontSize: 19,
    lineHeight: 26,
  },
  price: {
    color: colors.grey,
  },
});

export default styles;
