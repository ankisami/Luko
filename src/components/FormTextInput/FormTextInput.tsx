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
  placeholder?: string;
  value?: string;
  containerStyle?: StyleProp<ViewStyle>;
  onChangeText?: (value: string) => void;
} & TextInputProps;

const FormTextInput = ({
  label,
  type = "text",
  placeholder,
  value,
  onChangeText: handleChangeText,
  containerStyle,
  ...props
}: Props) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={[styles.textInputContainer, containerStyle]}>
        <TextInput
          value={value}
          style={styles.input}
          keyboardType={type === "price" ? "numeric" : "default"}
          placeholder={placeholder}
          numberOfLines={1}
          {...props}
        />
        {type === "price" && <Text style={styles.currency}>€</Text>}
      </View>
    </View>
  );
};

export default FormTextInput;
