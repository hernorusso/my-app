const removeTodoFromState = (state, action) =>
  state.filter(t => t.id !== action.id);

const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        desc: action.desc
      };
    case 'UPDATE_TODO':
      return {
        id: action.id,
        text: action.text,
        desc: action.desc
      };
    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ];
    case 'UPDATE_TODO':
      return [
        ...removeTodoFromState(state, action),
        todo(undefined, action)
      ];
    default:
      return state;
  }
};

export default todos;
