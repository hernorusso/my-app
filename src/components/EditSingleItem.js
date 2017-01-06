import React from 'react';

const EditSingleItem = ({item}) => (
  <div>
    <h1>
      {item.text}
    </h1>
    <p>
      Description: {item.desc}
    </p>
  </div>
);

export default EditSingleItem;
