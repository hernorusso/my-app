import React from 'react';
import './ShowItem.css';
import ShowItemContainer from '../../containers/showItemContainer.js'

const ShowItem = ({ params }) => (
  <div className='show-item'>
   <ShowItemContainer id={params.id}/>
  </div>
);

export default ShowItem;
