import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import PostItImage from "@/assets/images/images/post-it.png";
import { router, useRouter } from "expo-router";

export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image source={PostItImage} style={styles.image} />
      <Text style={styles.title}>Welcome To Notes App</Text>
      <Text style={styles.subtitle}>Capture your thoughts anytime, anywhere</Text>
      <TouchableOpacity
        style ={styles.button}
        onPress={() => router.push('/notes')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  }
});
// This is the main entry point for the app. It imports the necessary modules and defines a functional component that renders a view with a text message. The styles are defined using StyleSheet.create for better performance and organization.
// The component is exported as the default export of the module. The view is centered both vertically and horizontally using flexbox properties. The text message instructs the user to edit the app/index.tsx file to modify the screen content.
// The styles are defined using StyleSheet.create for better performance and organization. The component is exported as the default export of the module. The view is centered both vertically and horizontally using flexbox properties. The text message instructs the user to edit the app/index.tsx file to modify the screen content.
