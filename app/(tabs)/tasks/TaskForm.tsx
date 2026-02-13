import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useMemo, useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useTheme } from "../../utils/ThemeContext";
import { addTask, updateTask } from "../../services/api";

const TaskForm = () => {
  const { theme } = useTheme();
  const router = useRouter();
  const params = useLocalSearchParams();

  const taskId = useMemo(() => {
    const raw = params.id;
    if (!raw) return null;
    const n = Number(raw);
    return Number.isFinite(n) ? n : null;
  }, [params.id]);

  const initialTitle = useMemo(() => (
    params.title ? String(params.title) : ""), [params.title]
  );

  const [taskTitle, setTaskTitle] = useState("");

  useEffect(() => {
    setTaskTitle(initialTitle);
  }, [initialTitle]);

  const handleSave = async () => {
    const title = taskTitle.trim();
    if (!title) {
      alert("Please enter a task");
      return;
    }

    if (taskId) {
      await updateTask(taskId, title);
    } else {
      await addTask(title);
    }

    router.back();
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.header, { color: theme.text }]}>
        {taskId ? "Edit Task" : "Add New Task"}
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Enter task title"
        value={taskTitle}
        onChangeText={setTaskTitle}
      />

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>{taskId ? "Update Task" : "Save Task"}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 50,
    textAlign: "center"
  },
  input: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    fontSize: 16,
    marginTop: 40,
    marginBottom: 20,
  },
  saveButton: {
    backgroundColor: "#3b844c",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  saveButtonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
});

export default TaskForm;