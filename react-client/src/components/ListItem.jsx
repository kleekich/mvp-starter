import React from 'react';
import HeaderStars from './HeaderStars.jsx';
import style from './styles/ListItem.css';

const ListItem = (props) => (
  
  <div className='listItem'>
    {props.item.name}({props.item.rating})
    <HeaderStars avgRating={ props.item.rating }/>
    - {props.item.review_count} reviews
  </div>

)

export default ListItem;