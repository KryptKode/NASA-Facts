import React, {Component} from 'react';
import Title from './Title/Title';
import Background from './Background/Background';
import Grid from './Grid/Grid';
import Rocket from './Rocket/Rocket';
import Smoke from './Rocket/Smoke';

import styles from './App.module.css';

import facts from './data/NASA_facts.json';

class App extends Component {

  constructor(){
    super()
    this.state = {
      facts,
    }
  }

  render() {
    return (
      <div className={styles.app}>
        <Title />
        <Background />
        <Grid facts={this.state.facts}/>
        <Rocket />
        <Smoke />
      </div>
    )
  }
}

export default App;
