import React, { Component } from 'react';
// import FadeIn from 'react-fade-in';
import './App.css';
import { Router } from '@reach/router';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import OptionsBar from './components/OptionsBar';
import ShoeList from './pages/ShoeList';
import SingleShoe from './pages/SingleShoe'
import ErrorDisplay from './components/ErrorDisplay';
import Returns from './components/Returns';
import Delivery from './components/Delivery';
import FAQ from './components/FAQ';
import ContactPage from './components/ContactPage';
import Basket from './components/Basket';
import IconBar from './components/IconBar';

class App extends Component {

  render() {
    return (
      <div className="App">
         <TopBar />
         <Header />
         <NavBar />
         <OptionsBar />
         <Router>
             <ShoeList path="/" />
             <ShoeList path="/shoes/:slug" />
             <SingleShoe path="/shoe/:shoe_id" />
             <ErrorDisplay default status={404} message="This page does not exist"/>
             <ContactPage path="/contact" />
             <FAQ path="/faq" />
             <Returns path="/returns" />
             <Delivery path="/delivery" />
             <Basket path="basket"/>
         </Router>
         <IconBar />
         <Footer />
      </div>
  );
  }
}

export default App;
