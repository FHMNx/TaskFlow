import { Label } from "@react-navigation/elements";
import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../utils/ThemeContext";

export default function Home() {
  const { theme } = useTheme();
  const router = useRouter();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <Image source={require('../../assets/images/Logo2.png')} style={styles.img} />

      <Text style={[styles.title, { color: theme.text }]}>TaskFlow</Text>
      <Text style={[styles.subTitle, { color: theme.text }]}>
        Manage your daily tasks easily
      </Text>

      <TouchableOpacity
        style={styles.taskBtn}
        onPress={() => router.push("/(tabs)/tasks" as any)}>
        <Text style={styles.buttonText}>View Tasks</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.settingsBtn}
       onPress={() => router.push("/Settings")}>
        <Text style={styles.buttonText}>Settings</Text>
      </TouchableOpacity>

      <Text style={[styles.name, { color: theme.text }]}>
        - Designed By <Label style={styles.label}>Fahman -</Label>
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2"
  },

  title: {
    fontSize: 50,
    fontWeight: "bold",
    bottom: 40
  },

  subTitle: {
    fontSize: 16,
    marginBottom: 50,
    bottom: 40
  },

  taskBtn: {
    backgroundColor: "#54436a",
    paddingHorizontal: 25,
    paddingVertical: 13,
    borderRadius: 8,
    bottom: 40
  },

  settingsBtn: {
    backgroundColor: '#3b844c',
    paddingHorizontal: 34,
    paddingVertical: 13,
    borderRadius: 8,
    marginTop: 15,
    bottom: 40
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },

  img: {
    width: 350,
    height: 350,
    bottom: 40,
    resizeMode: "contain",
  },

  label: {
    color: "#6e1e1e",
    fontWeight: "bold"
  },

  name: {
    color: "black"
  }

})
