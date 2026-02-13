import axios from "axios";

const BASE_URL = process.env.EXPO_PUBLIC_API_URL;

export type Task = {
  id: number;
  title: string;
  createdAt: string;
};

export const api = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

export const updateTask = async (id: number, title: string) => {
  await api.put(`/tasks/${id}`, { title });
};

export const getTasks = async () => {
  const res = await api.get<Task[]>("/tasks");
  return res.data;
};

export const addTask = async (title: string) => {
  await api.post("/tasks", { title });
};

export const deleteTask = async (id: number) => {
  await api.delete(`/tasks/${id}`);
};