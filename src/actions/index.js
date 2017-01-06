import { v4 } from 'node-uuid';

export const addTodo = (text, desc) => ({
  type: 'ADD_TODO',
  id: v4(),
  text,
  desc
});
