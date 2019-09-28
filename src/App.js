import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';

function App(props) {
    return (
            <div className="App">
                <Header/>
                <Content state={props.state}
                         sort={props.sort}
                         filterrino={props.filterrino}/>
            </div>
    );
}

export default App;
