import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions';

let AddTodo = ({ dispatch }) => {
  let input, desc;

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        dispatch(addTodo(input.value, desc.value));
        input.value = '';
        desc.value = '';
      }}>
        <input ref={node => {
          input = node;
        }} />
        <input ref={node => {
          desc = node;
        }} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
};

AddTodo = connect()(AddTodo);

export default AddTodo;
