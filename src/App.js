import React, { Component } from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import Main from './component/Main';
import './App.css';

class App extends Component {
  render = () => (
    <div className="App">
      <div className="lineone"></div>
      <div className="linethree"></div>
      <Header />
      <Main />
      <Footer />
      <div className="linetwo"></div>
    </div>
  );
}

export default App;
