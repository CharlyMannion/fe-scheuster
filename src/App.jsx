import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';
import { Router } from '@reach/router';
import Header from './components/Header';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import OptionsBar from './components/OptionsBar';
import ShoeList from './pages/ShoeList';
import SingleShoe from './pages/SingleShoe'
// import ErrorDisplay from './components/ErrorDisplay';

class App extends Component {

  render() {
    return (
      <div className="App">
         <Header />
         <NavBar />
         <OptionsBar />
         <Router>
             <ShoeList path="/" />
             <SingleShoe path="/shoes/:shoe_id" />
             {/* <ErrorDisplay default status={404} message="This page does not exist"/> */}
         </Router>
         <Footer />
      </div>
  );
  }
}

export default App;
