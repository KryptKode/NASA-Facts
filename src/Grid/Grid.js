import React from 'react';
import GridItem from './GridItem';
import styles from './Grid.module.css';

export default class Grid extends React.Component {

    renderFacts() {
        return this.props.facts.map((fact) => {
            return <GridItem
                key={fact.id}
                fact={fact}
                updateClicked={this.props.updateClicked} />
        })
    }
    render() {
        return (
            <section 
            className={styles.grid}>
                {
                    this.renderFacts()
                }
            </section>
        );
    }
}
