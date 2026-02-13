import AsyncStorage from "@react-native-async-storage/async-storage"

const THEME_KEY = "APP_THEME";

//SAVE THEME
export const saveTheme = async (theme: string) => {
    try {
        await AsyncStorage.setItem(THEME_KEY, theme);
    } catch (error) {
        console.log("Error Save theme" + error)
    }
}

//LOAD THEME
export const loadTheme = async () => {
    try {
        const theme = await AsyncStorage.getItem(THEME_KEY);
        return theme || "light";
    } catch (error) {
        console.log("Error loading Theme" + error);
        return "light";
    }
}