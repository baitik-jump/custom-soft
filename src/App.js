import React,{useState} from 'react';
import './App.css';
import {Header} from './header.js';
import {Main} from './main.js';
import './conf_style.css'

function App() {
  const [state, setState] = useState({
    weapon: 1,
    dotId: 0,
    mainDiv: 'start',
    parts: [1,1,1,1,1,1]
  });

 console.log(state);

  const dotChoose = (newDotId) => {
    setState({ ...state, dotId:newDotId});
  }

  const mainChanger = (newMainDiv) => {
    setState({ ...state, mainDiv:newMainDiv});
  }

  const weaponChange = (newWeapon) => {
    setState({ ...state, weapon:newWeapon});
  }

  const partChange = (newPart) =>{
    let newParts = [...state.parts];
    newParts[newPart.dotId] = newPart.id;
    setState({...state, parts:newParts})
  }

  return (
    <div>
     <Header newMainDiv = {mainChanger}/>
     <Main newDotId={dotChoose}
     newWeapon={weaponChange}
     newParts={partChange}
     state = {state}
     newMainDiv = {mainChanger}/>
		</div>
  );
}

export default App;
