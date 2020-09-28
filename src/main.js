import React from 'react';
import {Start} from './start.js';
import {Conf} from './conf.js';
import {Search} from './search.js';
import {Bucket} from './bucket.js';
import {Menu} from './menu.js'

export const Main = (props) =>{
  console.log(props);
  return (
    <div>
      { props.mainDivState === 'start' &&  <Start newMainDiv = { props.newMainDiv}/>}
      { props.mainDivState === 'search' &&  <Search newMainDiv = {props.newMainDiv}/>}
      { props.mainDivState === 'conf' &&  <Conf newMainDiv = {props.newMainDiv}/>}
      { props.mainDivState === 'bucket' &&  <Bucket newMainDiv = {props.newMainDiv}/>}
      { props.mainDivState === 'menu' &&  <Menu newMainDiv = {props.newMainDiv}/>}
    </div>
  )
}
