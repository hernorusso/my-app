import { v4 } from 'node-uuid';

export const addTodo = (text, desc) => ({
  type: 'ADD_TODO',
  id: v4(),
  text,
  desc
});

export const updateTodo = (text, desc, id) => ({
  type: 'UPDATE_TODO',
  id,
  text,
  desc
});
