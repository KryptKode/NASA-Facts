import React from 'react';
import cx from 'classnames'
import GridItem from './GridItem';
import styles from './Grid.module.css';
import mediaStyles from './Media.module.css';

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
            className={cx(styles.grid, mediaStyles.grid)}>
                {
                    this.renderFacts()
                }
            </section>
        );
    }
}
