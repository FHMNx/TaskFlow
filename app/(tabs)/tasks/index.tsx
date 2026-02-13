import { useFocusEffect, useRouter } from "expo-router";
import React, { useCallback, useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "../../utils/ThemeContext";
import { deleteTask, getTasks, Task } from "../../services/api";

const TaskList = () => {
  const { theme } = useTheme();
  const router = useRouter();
  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchTasks = useCallback(async () => {
    try {
      const data = await getTasks();
      setTasks(data);
    } catch (err) {
      console.log("Fetch tasks error:", err);
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      fetchTasks();
    }, [fetchTasks])
  );

  const handleDelete = async (id: number) => {
    await deleteTask(id);
    fetchTasks();
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.header, { color: theme.text }]}>My Tasks</Text>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            
            <Text style={styles.dateText}>
              {new Date(item.createdAt).toLocaleDateString()}
            </Text>
            <Text style={styles.taskText}>{item.title}</Text>

            <View style={styles.buttonRow}>
              <TouchableOpacity
                style={styles.editButton}
                onPress={() =>
                  router.push({
                    pathname: "/(tabs)/tasks/TaskForm",
                    params: { id: item.id.toString(), title: item.title },
                  })
                }
              >
                <Text style={styles.editText}>Edit</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => handleDelete(item.id)}
              >
                <Text style={styles.deleteText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <TouchableOpacity style={styles.addButton} onPress={() => router.push("/(tabs)/tasks/TaskForm")}>
        <Text style={styles.addButtonText}>+ Add a New Task</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center" },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    margin: 10,
    marginTop: 50
  },

  taskItem: {
    backgroundColor: "#b5aebd",
    padding: 15,
    width: 300,
    margin: 10,
    borderRadius: 10,
  },

  taskText: { fontSize: 16, textAlign: "center", marginBottom: 10 },

  buttonRow: { flexDirection: "row", justifyContent: "center" },

  deleteButton: {
    backgroundColor: "#74261e",
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 6,
  },
  deleteText: { color: "#fff", fontWeight: "bold" },

  addButton: {
    backgroundColor: "#54436a",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 40,
    marginBottom: 60,
  },
  addButtonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },

  editButton: {
    backgroundColor: "#1d4763",
    paddingHorizontal: 25,
    paddingVertical: 6,
    borderRadius: 6,
    marginRight: 10,
  },
  editText: {
    color: "#fff",
    fontWeight: "bold"
  },

  dateText: {
    fontSize: 12,
    textAlign: "center",
    opacity: 0.7
  }
});

export default TaskList;