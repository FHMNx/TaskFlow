import React from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';
import { useTheme } from '../utils/ThemeContext';

const Settings = () => {
    const { theme, isDark, toggleTheme } = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <Text style={[styles.header, { color: theme.text }]}>Settings</Text>

            <View style={styles.row}>
                <Text style={[styles.label, { color: theme.text }]}>{isDark ? "Dark Mode" : "Light Mode"}</Text>
                <Switch
                    value={isDark}
                    onValueChange={toggleTheme}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 50,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 15,
    },
    label: {
        fontSize: 18,
    },
});

export default Settings;