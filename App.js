import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const updateTask = (task) => {
    setTasks((prevTasks) =>
      prevTasks.map((t) => (t.id === task.id ? task : t))
    );
    setIsEditing(false);
    setEditingTask(null);
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const startEditTask = (task) => {
    setEditingTask(task);
    setIsEditing(true);
  };

  return (
    <View style={styles.container}>
      <TaskForm
        onSubmit={isEditing ? updateTask : addTask}
        editingTask={editingTask}
      />
      <TaskList
        tasks={tasks}
        onDelete={deleteTask}
        onEdit={startEditTask}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default App;
