import { Text, View, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Hello World!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
// This is the main entry point for the app. It imports the necessary modules and defines a functional component that renders a view with a text message. The styles are defined using StyleSheet.create for better performance and organization.
// The component is exported as the default export of the module. The view is centered both vertically and horizontally using flexbox properties. The text message instructs the user to edit the app/index.tsx file to modify the screen content.
// The styles are defined using StyleSheet.create for better performance and organization. The component is exported as the default export of the module. The view is centered both vertically and horizontally using flexbox properties. The text message instructs the user to edit the app/index.tsx file to modify the screen content.
