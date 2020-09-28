import React from 'react';
import weapon_main  from './images/weapon_main.png';

export const Start = (props) =>{
  return(
    <div className="constructor container">
			<div className="constructor_text">
				<div className="h1">
					<h1>Онлайн<br/>Конструктор</h1>
				</div>
				<div className="p">
					<p>Выбери модификации<br/>и сделай заказ не<br/>выходя из дома</p>
				</div>
				<div className="conf"><button className="conf_btn" onClick={() => props.newMainDiv("conf")}>Собрать</button></div>
			</div>
			<div className="constructor_photo">
				<img className="constructor_photo_img" src={weapon_main} width="900" alt=" "></img>
			</div>
		</div>
  );
}
