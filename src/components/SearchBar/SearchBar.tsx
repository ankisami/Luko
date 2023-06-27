import React from "react";
import { View, Text, TextInput } from "react-native";
import styles from "./SearchBar.styles";

type Props = {
  value: string;
  onChangeText: (text: string) => void;
};

const SearchBar = ({ onChangeText: handleChangeText, value }: Props) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        style={styles.input}
        placeholder="Search..."
        onChangeText={handleChangeText}
      />
    </View>
  );
};

export default SearchBar;
