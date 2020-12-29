import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {

  componentDidMount() {
    axios.get('https://be-scheuster.herokuapp.com/api/shoes')
    .then(({data}) => {
      console.log(data.shoes)
    })
  }

  render() {
    return(
      <h1>Scheuster</h1>
    )
  }
}

export default App;
