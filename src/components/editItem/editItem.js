import React from 'react';
// import './ShowItem.css';
  import EditItemContainer from '../../containers/editItemContainer.js'

const EditItem = ({ params }) => (
  <div className='show-item'>
   <EditItemContainer id={params.id}/>
  </div>
);

export default EditItem;
