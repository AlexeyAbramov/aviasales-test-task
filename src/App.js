import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Header from './components/Header/Header';
import Content from './components/Content/Content';

function App(props) {
  return (
      <BrowserRouter>
    <div className="App">
      <Header />
      <Content state={props.state}/>
    </div>
      </BrowserRouter>
  );
}

export default App;
