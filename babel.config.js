module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "react-native-reanimated/plugin",
      [
        "module-resolver",
        {
          root: ["."],
          extensions: [
            ".js",
            ".jsx",
            ".ts",
            ".tsx",
            ".json",
            "android.js",
            "android.tsx",
            "ios.js",
            "ios.tsx",
          ],
          alias: {
            api: "./src/api",
            theme: "./src/theme",
            components: "./src/components",
            screens: "./src/screens",
            navigation: "./src/navigation",
            models: "./src/models",
            mocks: "./src/__mocks__",
            assets: "./src/assets",
            utils: "./src/utils",
          },
        },
      ],
    ],
  };
};
