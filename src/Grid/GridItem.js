import React from 'react';

import styles from './GridItem.module.css';

const GridItem = ({fact})=>{
    return (
        <div className={styles.card}>
          <h2 className={styles.title}>{fact.title}</h2>
          <article className={styles.fact}>{fact.fact}</article>
        </div>
      );
}

export default GridItem;
