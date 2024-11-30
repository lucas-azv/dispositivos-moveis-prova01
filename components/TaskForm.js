import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { RadioButton } from 'react-native-paper'; // Certifique-se de ter instalado a biblioteca react-native-paper

const TaskForm = ({ onSubmit, editingTask }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Baixa');

  useEffect(() => {
    if (editingTask) {
      setName(editingTask.name);
      setDescription(editingTask.description);
      setPriority(editingTask.priority);
    }
  }, [editingTask]);

  const handleSubmit = () => {
    if (!name || !description) return;
    const task = {
      id: editingTask ? editingTask.id : Date.now().toString(),
      name,
      description,
      priority,
    };
    onSubmit(task);
    setName('');
    setDescription('');
    setPriority('Baixa');
  };

  return (
    <View style={styles.form}>
      <TextInput
        placeholder="Nome da tarefa"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Descrição da tarefa"
        value={description}
        onChangeText={setDescription}
        style={styles.input}
      />
      <View style={styles.radioGroup}>
        {['Alta', 'Média', 'Baixa'].map((level) => (
          <View key={level} style={styles.radioContainer}>
            <RadioButton
              value={level}
              status={priority === level ? 'checked' : 'unchecked'}
              onPress={() => setPriority(level)}
            />
            <Text>{level}</Text>
          </View>
        ))}
      </View>
      <Button title={editingTask ? "Atualizar Tarefa" : "Adicionar Tarefa"} onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 5,
  },
  radioGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default TaskForm;
