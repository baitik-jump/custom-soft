import React from 'react';
import weapon_main  from './images/weapon_main.png';
import './App.css';
import bg_im from "./images/bg_im.png";

export const Start = (props) =>{
  return(
    <div>
    <div class="constructor container">
			<div class="constructor_text">
				<div class="h1">
					<h1>Онлайн<br/>Конструктор</h1>
				</div>
				<div class="p">
					<p>Выбери модификации<br/>и сделай заказ не<br/>выходя из дома</p>
				</div>
				<div class="conf">
          <button className="conf_btn" onClick={() => props.newMainDiv("conf_step1")}>Собрать</button>
        </div>
			</div>
			<div class="constructor_photo">
				<img class="constructor_photo_img" src={weapon_main} alt=""></img>
			</div>
    </div>
    </div>

  );
}
