import React from 'react';

const ShowSingleItem = ({item}) => (
  <div>
    <h1>
      {item.text}
    </h1>
    <p>
      Description: {item.desc}
    </p>
  </div>
);

export default ShowSingleItem;
