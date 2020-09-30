import React from 'react';
import {Start} from './start.js';
import {ConfStep1} from './conf_step1.js';
import {ConfStep2} from './conf_step2.js';
import {Search} from './search.js';
import {Bucket} from './bucket.js';
import {Menu} from './menu.js'

export const Main = (props) =>{
  console.log(props);
  return (
    <div>
      { props.state.mainDiv === 'start' &&  <Start state = {props.state} newMainDiv = { props.newMainDiv}/>}
      { props.state.mainDiv === 'search' &&  <Search state = {props.state} newMainDiv = {props.newMainDiv}/>}
      { props.state.mainDiv === 'conf_step1' &&  <ConfStep1 state = {props.state} newMainDiv = {props.newMainDiv} newWeapon = {props.newWeapon}/>}
      { props.state.mainDiv === 'conf_step2' &&  <ConfStep2 state = {props.state} newMainDiv = {props.newMainDiv} newDotId = {props.newDotId}  newParts = {props.newParts}/>}
      { props.state.mainDiv === 'bucket' &&  <Bucket state = {props.state} newMainDiv = {props.newMainDiv}/>}
      { props.state.mainDiv === 'menu' &&  <Menu state = {props.state} newMainDiv = {props.newMainDiv}/>}
    </div>
  )
}
