import React from 'react';
import bucket from './images/bucket.svg'
import lupa from './images/lupa.svg'
import logo from './images/logo.png'
import weapon_icon  from './images/weapon_icon.png'
import menu from './images/menu.svg';

export const Header = (props) =>{
  return(
    <div className="header">
			<div className="navbar">
				<div className="menu">
					<div className="menu_button"  onClick={() => props.newMainDiv("menu")}>
						<img className="menu_img" alt=" " src={menu}/>
						<div className="catalog" >Каталог</div>
					</div>
				</div>
			</div>
			<div className="logo">
				<img className="logo_image" alt=" " src={logo} onClick={() => props.newMainDiv("start")}/>
			</div>
			<div className="header_icons">
					<div className="finder">
						<div className="header_icons_link" onClick={() => props.newMainDiv("search")}>
							<img className="finder_img" alt=" " src={lupa}/>
						</div>
					</div>

					<div className="bucket">
						<div className="header_icons_link" onClick={() => props.newMainDiv("bucket")}>
							<img className="bucket_img" alt=" " src={bucket}/>
						</div>
					</div>

					<div className="weapon_icon">
						<div className="header_icons_link" onClick={() => props.newMainDiv("conf")}>
							<img className="weapon_img" alt=" " src={weapon_icon}/>
						</div>
					</div>

			</div>
		</div>
  );
}
