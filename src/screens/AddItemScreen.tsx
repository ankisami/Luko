import { useCallback, useEffect, useState } from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { Button, FormTextInput, PictureSelector } from "components";
import { RootTabScreenProps } from "navigation/types";
import { colors } from "theme/colors";
import { useForm, Controller } from "react-hook-form";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { InventoryItem } from "models/Inventory.d";
import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from "react-native-uuid";
import { putInventoryItems } from "api/InventoryApi";
import Toast from "react-native-toast-message";

export default function AddItemScreen({
  navigation,
  route,
}: RootTabScreenProps<"AddItemScreen">) {
  const [inventoryItems, setInventoryItems] = useState<InventoryItem[]>();

  const {
    handleSubmit,
    control,
    watch,
    setError,
    getValues,
    formState: { errors, isValid },
  } = useForm<InventoryItem>({
    defaultValues: {
      id: route.params?.item?.id ?? (uuid.v4() as string),
      name: route.params?.item?.name,
      purchasePrice: route.params?.item?.purchasePrice,
      type: route.params?.item?.type,
      description: route.params?.item?.description,
      photo: route.params?.item?.photo,
    },
  });

  const getData = async () => {
    try {
      const storage = await AsyncStorage.getItem("@inventoryItemStorage");
      storage === null
        ? setInventoryItems([])
        : setInventoryItems(JSON.parse(storage));
    } catch (e) {
      console.error(e);
    }
  };

  const isTotalPurchasePriceValid = (): boolean => {
    const inventoryItemList = inventoryItems || [];
    const updatedInventory = inventoryItemList.filter(
      (item) => item.id !== watch("id")
    );
    const totalPurchasePrice =
      updatedInventory.reduce((sum, item) => sum + item.purchasePrice, 0) +
      watch("purchasePrice");
    if (totalPurchasePrice > 40000) {
      setError(
        "purchasePrice",
        {
          type: "focus",
          message: `The total value of your items may not exceed 40,000 euros. You may add a further ${
            totalPurchasePrice - watch("purchasePrice")
          } euros maximum`,
        },
        { shouldFocus: true }
      );
    }
    return totalPurchasePrice <= 40000;
  };

  const isValidForm = useCallback((): boolean => {
    if (JSON.stringify(watch()) === JSON.stringify(route.params?.item))
      return false;
    if (!watch("name")) return false;
    if (!watch("purchasePrice")) return false;
    if (!watch("photo")) return false;
    if (!isTotalPurchasePriceValid()) return false;

    return true;
  }, [getValues, route.params?.item, isTotalPurchasePriceValid]);

  const onSubmit = async (data: InventoryItem) => {
    try {
      const inventoryItemList = inventoryItems || [];
      const updatedInventory = inventoryItemList.filter(
        (item) => item.id !== watch("id")
      );
      updatedInventory.push(data);
      await putInventoryItems(updatedInventory);
      navigation.navigate("Inventory");

      Toast.show({
        type: "success",
        text1: "Success",
        text2: "Items updated",
      });
    } catch (error) {
      console.error(error);
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Something wrong happened. Try again",
      });
    }
  };

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Button title="Cancel" onPress={() => navigation.goBack()} />
        <Button
          title="Add"
          disabled={!isValid || !isValidForm()}
          onPress={handleSubmit(onSubmit)}
        />
      </View>

      <KeyboardAwareScrollView
        enableOnAndroid={true}
        enableAutomaticScroll={Platform.OS === "ios"}
        contentContainerStyle={styles.formContainer}
        extraScrollHeight={100}
        extraHeight={50}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <Controller
          name="photo"
          control={control}
          render={({ field: { value, onChange } }) => (
            <PictureSelector
              picture={value}
              onChangePicture={(value) => onChange(value)}
            />
          )}
        />

        <Controller
          name="name"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <FormTextInput
              label="Name"
              placeholder="Bracelet"
              placeholderTextColor={colors.lightGrey}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              numberOfLines={1}
            />
          )}
        />

        <Controller
          name="purchasePrice"
          rules={{ required: true }}
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <FormTextInput
              label="Value"
              type="price"
              placeholder="700"
              placeholderTextColor={colors.lightGrey}
              onBlur={onBlur}
              onChangeText={(value) => onChange(Number(value))}
              value={value?.toString()}
              errorMessage={errors.purchasePrice?.message}
            />
          )}
        />

        <Controller
          name="description"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <FormTextInput
              label="Description"
              placeholder="Optional"
              placeholderTextColor={colors.lightGrey}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              multiline
              textAlignVertical="top"
              containerStyle={{
                height: 128,
                paddingTop: 6,
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
    paddingTop: Platform.OS === "android" ? 40 : 10,
    backgroundColor: colors.background,
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
    alignItems: "center",
    marginVertical: 40,
  },
  keyboardAvoidingContainer: {
    flex: 1,
  },
});
