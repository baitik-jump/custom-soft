import React,{useState} from 'react';
import './App.css';
import {Header} from './header.js';
import {Main} from './main.js';

function App() {
  const [state, setState] = useState({
    weapon: 1,
    dotId: 0,
    mainDiv: "start"
  });

  const dotChoose = (newDotId) => {
    setState({ ...state, dotId:newDotId});
  }

  const mainChanger = (newMainDiv) => {
    console.log(newMainDiv);
    setState({ ...state, mainDiv:newMainDiv})
  }

  console.log(state);
  return (
    <div>
     <Header newMainDiv = {mainChanger}/>
     <Main mainDivState = {state.mainDiv} newMainDiv = {mainChanger}/>
		</div>
  );
}

export default App;
