import React from 'react';
import './conf_style.css';
import {Sidebar} from './sidebar.js';
import './weapon_choose_style.css';
import bg_im from './images/bg_im.png';
import {weapon} from './bd.js'

export const ConfStep1 = (props) =>{
  console.log(props)
  return(
    <div>
      <Sidebar state = {props.state} newMainDiv = {props.newMainDiv}/>
      <div class="container">
  			<div class="choose">
  				<div class="text">
  					<h3>Выберите оружие для модификации</h3>
  				</div>
  				<div class="weapons">
          {weapon.map(item => (

            <div class="weapon_block" onClick = {() => {props.newWeapon(item.id);props.newMainDiv('conf_step2');console.log(item)}}>
              <img class='img_preview' src={item.preveiwSrc} alt=' '></img>
              <div class='name_preview'>
                {item.name}
              </div>
            </div>
          ))}
  				</div>
  			</div>
  		</div>

  		<div class="smoke">
  			<img class="smoke_im" src={bg_im} alt=''></img>
  		</div>
    </div>
  );
}
