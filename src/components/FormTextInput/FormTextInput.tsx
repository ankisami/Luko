import React from "react";
import {
  View,
  Text,
  TextInput,
  TextInputProps,
  StyleProp,
  ViewStyle,
} from "react-native";
import styles from "./FormTextInput.styles";

type Props = {
  label?: string;
  type?: "text" | "price";
  containerStyle?: StyleProp<ViewStyle>;
  errorMessage?: string;
} & TextInputProps;

const FormTextInput = ({
  label,
  type = "text",
  containerStyle,
  errorMessage,
  ...props
}: Props) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={[styles.textInputContainer, containerStyle]}>
        <TextInput
          style={styles.input}
          keyboardType={type === "price" ? "numeric" : "default"}
          numberOfLines={1}
          {...props}
        />
        {type === "price" && <Text style={styles.currency}>€</Text>}
      </View>
      {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
    </View>
  );
};

export default FormTextInput;
