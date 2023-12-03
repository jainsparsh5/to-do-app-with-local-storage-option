import { createContext, useContext } from "react";

export const ToDoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Learn React",
      completed: false,
    },
  ],
  addTodo : (todo) => {},
  updateTodo : (id,todo) => {},
  deleteTodo: (id) => {},
  toggleCompleted: (id) => {},
});

export const useToDo = () => {
  return useContext(ToDoContext);
};

export const ToDoProvider = ToDoContext.Provider;
