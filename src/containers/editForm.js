import React from 'react';
import { connect } from 'react-redux';
import { updateTodo } from '../actions';
import { withRouter } from 'react-router';

let EditForm = ({ dispatch, item, params }) => {
  let input = item.text, desc = item.desc;

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        dispatch(updateTodo(input.value, desc.value, params.id));
        window.alert('Item Updated!')
      }}>
        <input
          ref={node => {
            input = node;
          }}
          defaultValue={item.text || ''}
        />
        <input
          ref={node => {
            desc = node;
          }}
          defaultValue={item.desc || ''}
        />
        <button type="submit">
          Update
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state, { params }) => {
  const item = state.todos.filter(element => element.id === params.id)[0];
  return {
    item
  }
};

EditForm = withRouter(connect(mapStateToProps)(EditForm));

export default EditForm;
