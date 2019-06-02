import React, {Component} from 'react';
import Title from './Title/Title';
import Background from './Background/Background';
import Grid from './Grid/Grid';
import Rocket from './Rocket/Rocket';
import Smoke from './Rocket/Smoke';

//styles
import styles from './App.module.css';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Title />
        <Background />
        <Grid />
        <Rocket />
        <Smoke />
      </div>
    )
  }
}

export default App;
