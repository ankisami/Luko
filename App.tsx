import { StatusBar } from "expo-status-bar";
import Navigation from "./src/navigation";
import { useFonts } from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { fonts } from "./src/theme/fonts";
import { ActivityIndicator, LogBox } from "react-native";
import Toast from "react-native-toast-message";

export default function App() {
  LogBox.ignoreAllLogs();
  const [fontsLoaded] = useFonts({
    [fonts.regular]:
      "https://fonts.cdnfonts.com/s/15011/CircularStd-Medium.woff",
    [fonts.bold]: "https://fonts.cdnfonts.com/s/15011/CircularStd-Bold.woff",
  });
  if (!fontsLoaded)
    return (
      <ActivityIndicator
        size="large"
        style={{ justifyContent: "center", flex: 1 }}
      />
    );
  return (
    <SafeAreaProvider>
      <Navigation />
      <StatusBar />
      <Toast position="top" topOffset={100} />
    </SafeAreaProvider>
  );
}
