import { useTheme } from "../utils/ThemeContext";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";


export default function TabsLayout() {
    const { theme } = useTheme();

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: { backgroundColor: theme.background },
                tabBarActiveTintColor: theme.text,
            }}>

            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ size, color }) => (
                        <Ionicons name="home" size={size} color={color} />
                    ),
                }}
            />

            <Tabs.Screen
                name="tasks"
                options={{
                    title: "Tasks",
                    tabBarIcon: ({ size, color }) => (
                        <Ionicons name="list" size={size} color={color} />
                    ),
                }}
            />

            <Tabs.Screen
                name="Settings"
                options={{
                    title: "Settings",
                    tabBarIcon: ({ size, color }) => (
                        <Ionicons name="settings" size={size} color={color} />
                    ),
                }}
            />

        </Tabs>
    )
}