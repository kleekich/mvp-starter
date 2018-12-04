import React from 'react';
import ListItem from './ListItem.jsx';
import styles from './styles/List.css';

const List = (props) => (
  <div>
    <ul className={styles.list}>
      { props.items.map(item => <ListItem item={item}/>)}
    </ul>
  </div>
)

export default List;