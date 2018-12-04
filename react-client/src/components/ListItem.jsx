import React from 'react';
import StarRatings from 'react-star-ratings';
import style from './styles/ListItem.css';

const ListItem = (props) => (
  
  <div className='listItem'>
    {props.item.name}({props.item.rating})
    <StarRatings
          rating={props.item.rating}
          starRatedColor='#e94225'
          numberOfStars={5}
          name='rating'
        />
    - {props.item.review_count} reviews
  </div>

)

export default ListItem;