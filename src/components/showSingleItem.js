import React from 'react';

const ShowSingleItem = ({item}) => (
  <div>
    <h1>
      {item.text}
    </h1>
    <p>
      id: {item.id}
    </p>
  </div>
);

export default ShowSingleItem;
