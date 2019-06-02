import React from 'react';
import PropTypes from 'prop-types';
import Badge from './Badge';
import Explorer from './Explorer';

import styles from './GridItem.module.css';

const GridItem = ({fact, updateClicked})=>{
    return (
        <div className={styles.card} onClick={()=> updateClicked(fact.id)}>
          {fact.clicked ? <Explorer /> : <Badge />}
          <h2 className={styles.title}>{fact.title}</h2>
          <article className={styles.fact}>{fact.fact}</article>
        </div>
      );
};

GridItem.propTypes = {
    fact: PropTypes.object,
    updateClicked:PropTypes.func.isRequired,
}

GridItem.defaultProps={
    fact:  {
        "id": 0,
        "title": "NASA Acronym",
        "fact": "The acronym 'NASA' stands for National Aeronautics and Space Administration.",
        "clicked": false 
        }
}

export default GridItem;
