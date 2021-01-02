import React, { Component } from 'react';
// import FadeIn from 'react-fade-in';
import './App.css';
import { Router } from '@reach/router';
import Header from './components/Header';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import OptionsBar from './components/OptionsBar';
import ShoeList from './pages/ShoeList';
import SingleShoe from './pages/SingleShoe'
import ErrorDisplay from './components/ErrorDisplay';
import Info from './components/Info';
import ContactForm from './components/ContactForm';

class App extends Component {

  render() {
    return (
      <div className="App">
         <Header />
         <NavBar />
         <OptionsBar />
         <Router>
             <ShoeList path="/" />
             <ShoeList path="/shoes/:slug" />
             <SingleShoe path="/shoe/:shoe_id" />
             <ErrorDisplay default status={404} message="This page does not exist"/>
             <ContactForm path="/contact" />
             <Info path="/faq" />
             <Info path="/returns" />
             <Info path="/delivery" />
         </Router>
         <Footer />
      </div>
  );
  }
}

export default App;
