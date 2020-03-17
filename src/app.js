/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../src/modal/header/header.js';
import Footer from './modal/footer/Footer.js';
import Categories from './components/catagore-counter.js';
import Products from './components/products.js';
import './style.scss';

class App extends React.Component {

  render() {
    console.log('sohaddddd');
    return (
      <>
        <Header />
        <Categories />
        <Products />
        <Footer />
      </>
    );
  }
}

export default App;