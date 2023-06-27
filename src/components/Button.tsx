import { Pressable, PressableProps, Text, TextStyle } from "react-native";
import { colors } from "../theme/colors";

type ButtonProps = {
  title: string;
  onPress?: () => void;
  disabled?: boolean;
  style?: TextStyle;
};

export default function Button({
  title,
  onPress,
  disabled,
  style,
}: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
      pressRetentionOffset={20}
      hitSlop={20}
    >
      <Text
        style={[
          { fontSize: 17, color: disabled ? colors.mainGrey : colors.mainBlue },
          style,
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
}
