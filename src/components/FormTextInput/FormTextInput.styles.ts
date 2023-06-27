import { StyleSheet } from "react-native";
import colors from "theme/colors";
import fonts from "theme/fonts";

export const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    width: "100%",
  },
  label: {
    fontSize: 13,
    fontWeight: "400",
    lineHeight: 17,
    fontFamily: fonts.bold,
  },
  textInputContainer: {
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    backgroundColor: colors.white,
    minHeight: 48,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.lightGrey,
  },
  input: {
    flex: 1,
    height: "100%",
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  currency: {
    marginRight: 15,
    fontSize: 17,
    fontWeight: "400",
    lineHeight: 24,
    color: colors.grey,
  },
  errorMessage: {
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 17,
    color: colors.error,
  },
});

export default styles;
