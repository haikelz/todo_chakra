import {Heading} from '@chakra-ui/react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import { Spacer, VStack, IconButton } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";

function App() {

  // local storage
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem('todos')) || []
  );

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
}, [todos]);

  // function hapus Todo
  function deleteTodo(id) {
    const newTodos = todos.filter(todo => {
      return todo.id !== id
    })
    setTodos(newTodos);
  }

  function addTodo(todo) {
    setTodos([...todos, todo])
  }

  // Set warna light mode dan dark mode
  const bg = useColorModeValue('light', 'dark');
  const color = useColorModeValue('black', 'white');

  // Toggle colormode
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <VStack bg={bg} color={color} p={4}>
      <IconButton
        icon={isDark ? <FaSun /> : <FaMoon />}
        isRound="true"
        size="lg"
        alignSelf="flex-end"
        onClick={toggleColorMode}
      />
      <img src="https://i.ibb.co/f2PLBwV/Banner-modified.png" width="200px" alt="banner"/>
      <Heading
        mb='8'
        fontWeight="extrabold"
        size="2xl"
        bgGradient="linear(to-r, pink.300, pink.300, blue.500)"
        bgClip="text">
      Todo List
      </Heading>
      <Spacer />
      <Spacer />
      <TodoList todos={ todos } deleteTodo = {deleteTodo} />
      <AddTodo addTodo={addTodo}/>
    </VStack>
  )
}

export default App;
