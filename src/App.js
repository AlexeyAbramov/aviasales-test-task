import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Header from './components/Header/Header';
import Content from './components/Content/Content';

function App() {
  return (
      <BrowserRouter>
    <div className="App">
      <Header />
      <Content/>
    </div>
      </BrowserRouter>
  );
}

export default App;
