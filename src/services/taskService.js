import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api';

export const getTasks = () => axios.get(`${BASE_URL}/tasks`);
export const createTask = (task) => axios.post(`${BASE_URL}/task`, task);
export const updateTask = (id, task) => axios.put(`${BASE_URL}/task/${id}`, task);
export const deleteTask = (id) => axios.delete(`${BASE_URL}/task/${id}`);
