import React from 'react';
import './conf_style.css';
import {Sidebar} from './sidebar.js';
import bg_im from './images/bg_im.png';
import {weapon} from './bd';
import {CarouselInit} from './carousel.js';
import {PartsDisplay} from './parts_display.js'

export const ConfStep2 = (props) =>{
  return(
    <div>
      <Sidebar state = {props.state} newMainDiv = {props.newMainDiv}/>
      <div class="constructor container">
        <div><h3 class="name">  {weapon
            .filter(item =>
              item.id === props.state.weapon
            ).map(item => (item.name))
          }</h3></div>
        <div class="details">
        <div class="base">
          {weapon
            .filter(item =>
              item.id === props.state.weapon
            ).map(item => <div><img class="base_img" src={item.src} alt=" "/> </div>)
          }
          <PartsDisplay state={props.state}/>
          <div class="points cevie_point" onClick={()=>props.newDotId(1)} ></div>
          <div class="points scope_point" onClick={()=>props.newDotId(2)}></div>
          <div class="points grip_point" onClick={()=>props.newDotId(3)}></div>
          <div class="points priklad_point" onClick={()=>props.newDotId(4)}></div>
          <div class="points dtk_point" onClick={()=>props.newDotId(5)}></div>
          <div class="points gasblock_point" onClick={()=>props.newDotId(6)}></div>

        </div>
        </div>
        {props.state.dotId===0 && <p class='text'>Выберите точку</p>}
        <CarouselInit state={props.state} newParts = {props.newParts}/>

      </div>
    <div class="smoke">
      <img class="smoke_im" src={bg_im} alt=' '/>
    </div>

    </div>
  );
}
