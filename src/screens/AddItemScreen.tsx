import { ScrollView, StyleSheet, View } from "react-native";
import { Button, FormTextInput, PictureSelector } from "components";
import { RootTabScreenProps } from "navigation/types";
import { colors } from "theme/colors";
import { useForm, Controller, SubmitErrorHandler } from "react-hook-form";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { getStatusBarHeight } from "../../node_modules/react-native-iphone-x-helper/index";

type FormValues = {
  picture: string;
  name: string;
  value: string;
  description?: string;
};

export default function AddItemScreen({
  navigation,
}: RootTabScreenProps<"AddItemScreen">) {
  const {
    register,
    setValue,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const onError: SubmitErrorHandler<FormValues> = (errors, e) => {
    return console.log(errors);
  };
  const onSubmit = handleSubmit((data) => console.log(data));

  const handleChangePicture = () => {
    console.log("Press picture");
  };
  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Button title="Cancel" onPress={() => navigation.goBack()} />
        <Button title="Add" disabled onPress={() => undefined} />
      </View>

      <KeyboardAwareScrollView
        contentContainerStyle={styles.formContainer}
        extraScrollHeight={100}
        extraHeight={50}
      >
        <PictureSelector onChangePicture={handleChangePicture} />
        <Controller
          name="name"
          rules={{ required: true }}
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <FormTextInput
              label="Name"
              placeholder="Bracelet"
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              numberOfLines={1}
            />
          )}
        />

        <Controller
          name="value"
          rules={{ required: true }}
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <FormTextInput
              label="Value"
              type="price"
              placeholder="700"
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          )}
        />

        <Controller
          name="description"
          rules={{ required: true }}
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <FormTextInput
              label="Description"
              placeholder="Optional"
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              multiline
              textAlignVertical="top"
              containerStyle={{
                height: 128,
                alignItems: "flex-start",
              }}
            />
          )}
        />
      </KeyboardAwareScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.background,
    paddingTop: 10,
  },
  buttonsContainer: {
    width: "100%",
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "transparent",
  },
  formContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 40,
  },
  keyboardAvoidingContainer: {
    flex: 1,
  },
});
