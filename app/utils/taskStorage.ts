import AsyncStorage from '@react-native-async-storage/async-storage';

const TASK_KEY = "TASKS";

//SAVE TASKS
export const saveTasks = async (tasks: any[]) => {
    try {
        const jsonValue = JSON.stringify(tasks);
        await AsyncStorage.setItem(TASK_KEY, jsonValue);
    } catch (error) {
        console.error("Error while saving tasks" + error)
    }
}

//LOAD TASKS
export const loadTasks = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem(TASK_KEY);
        return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch (error) {
        console.error("Error loading tasks" + error);
        return [];
    }
}