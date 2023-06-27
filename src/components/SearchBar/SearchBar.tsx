import React from "react";
import { View, Text, TextInput, TextInputProps } from "react-native";
import styles from "./SearchBar.styles";
import colors from "theme/colors";

type Props = {
  value: string;
  onChangeText: (text: string) => void;
} & TextInputProps;

const SearchBar = ({
  onChangeText: handleChangeText,
  value,
  ...props
}: Props) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        style={styles.input}
        placeholder="Search..."
        placeholderTextColor={colors.grey}
        onChangeText={handleChangeText}
        {...props}
      />
    </View>
  );
};

export default SearchBar;
