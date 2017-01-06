import React from 'react';
import { Link } from 'react-router';

const Todo = ({
text,
id
}) => (
  <li>
    {text}
    &nbsp;
    <Link to={id}>
      Show
    </Link>
    &nbsp;
    <Link to={id + '/edit'}>
      Edit
    </Link>
  </li>
);

export default Todo;
