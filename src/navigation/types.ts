/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { InventoryItem } from "models/Inventory";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | { title: string };
  AddItem: undefined;
  Camera: undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  Inventory: undefined;
  Home: undefined;
  Insurance: undefined;
  Realty: undefined;
  Menu: undefined;
  AddItemScreen: { item: InventoryItem } | undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;

/* 
    I created my own type to adhere to the requested structure outlined in 
    the technical test sent via email.
    My types are in the file src/models/Inventory.d.ts
*/

// export type InventoryItem = {
//   id?: string;
//   name: string;
//   value: string | number;
//   type?: string;
//   description?: string;
//   photo?: string;
// };

// export type Items = InventoryItem[];
