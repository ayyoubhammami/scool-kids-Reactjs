import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home.js';

import './App.css';
import Question2 from './component/Question2';
import Body from './component/body';
// import * as firebase from 'firebase';
// import config from './config';


class App extends Component {

  /* constructor() {
    super();
    firebase.initializeApp(config);
  }

  componentWillMount() {
    const Ref = firebase.database().ref('personne');

    Ref.on('value', snapshot => {
      this.setState({
        personne: snapshot.val()
      });
    })
  }
*/

    render() {
        return (
            <Router>
                <div >

                    <Route exact path="/" component={Home} />
                    <Route exact path="/question2" component={Question2} />

                </div>
            </Router>
        );
    }
}

export default App;
