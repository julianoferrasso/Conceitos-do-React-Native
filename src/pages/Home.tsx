import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { ItemWrapper } from '../components/ItemWrapper';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  
  function handleAddTask(newTaskTitle: string) {
    const data = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false
    }
    setTasks([...tasks, data])
    //TODO - add new task - ok
  }

  function handleToggleTaskDone(id: number) {
    const updateTasks = tasks.map(task => ({...task}))
    
    const taskWillChange = updateTasks.find( item => item.id === id)

    if (taskWillChange != undefined){
      taskWillChange.done = !taskWillChange.done
    } 

    setTasks([...updateTasks])
    //TODO - toggle task done if exists - ok 
  }

  function handleRemoveTask(id: number) {
    const updatedTasks = tasks.filter(task => task.id != id)

    setTasks(updatedTasks)
    //TODO - remove task from state - ok
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList 
        tasks={tasks} 
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})