import React from 'react';
import StarRatings from 'react-star-ratings';
import styles from './styles/ListItem.css';

const ListItem = (props) => (
  <li>
    <div className={styles.listItem}>
      <div className={styles.leftColumn}>
        <span className={styles.name}>{props.item.name}</span>
        <span className={styles.rating}> ({props.item.rating.toFixed(1)}) </span>
      </div>
      <StarRatings
            rating={props.item.rating}
            starRatedColor='#e94225'
            numberOfStars={5}
            name='rating'
          />
      - <span className={styles.reviews}> {props.item.review_count} reviews </span>
    </div>
  </li>

)

export default ListItem;