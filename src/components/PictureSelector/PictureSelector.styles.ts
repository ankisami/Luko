import { StyleSheet } from "react-native";
import { colors } from "theme/colors";

export const styles = StyleSheet.create({
  pictureContainer: {
    marginVertical: 30,
    height: 150,
    width: 150,
    borderRadius: 75,
    borderStyle: "dashed",
    borderWidth: 2,
    borderColor: colors.mainGrey,
  },
  pictureContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  subTitle: {
    marginTop: 10,
    fontSize: 17,
    fontWeight: "bold",
    lineHeight: 24,
  },
});

export default styles;
