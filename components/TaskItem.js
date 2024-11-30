import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const TaskItem = ({ task, onDelete, onEdit }) => {
  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 'Alta':
        return 'alert-circle';
      case 'Média':
        return 'help-circle';
      case 'Baixa':
        return 'checkmark-circle';
      default:
        return 'help-circle';
    }
  };

  return (
    <View style={styles.container}>
      <Icon name={getPriorityIcon(task.priority)} size={20} color="black" />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{task.name}</Text>
        <Text>{task.description}</Text>
      </View>
      <Pressable onPress={() => onEdit(task)}>
        <Text style={styles.edit}>Editar</Text>
      </Pressable>
      <Pressable onPress={() => onDelete(task.id)}>
        <Text style={styles.delete}>Excluir</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontWeight: 'bold',
  },
  edit: {
    color: 'blue',
    marginRight: 10,
  },
  delete: {
    color: 'red',
  },
});

export default TaskItem;
