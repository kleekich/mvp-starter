import React from 'react';

const ListItem = (props) => (
  
  <div className='listItem'>
    {props.item.name}({props.item.rating})
  </div>
)

export default ListItem;