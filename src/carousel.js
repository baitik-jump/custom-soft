import React from 'react';
import {
  parts
} from './bd';
import './conf_style.css';

// item.weapon.includes(props.state.weapon) && item.dotId === props.state.dotId

export const CarouselInit = (props) => {
  return (
    <div className="scrollmenu carusel">
       {parts
        .filter((item) =>
          item.weapon.includes(props.state.weapon) && item.dotId === props.state.dotId
          ).map((item)=>
            <div class="weapon_block" onClick={()=>props.newParts(item)}>
              <div class='img_block'><img class='img_preview' src={item.src} alt=' '></img></div>
              <div class='name_preview'>
                {item.name}
              </div>
              <div class='cost_preview'>
                {item.price} руб.
              </div>
            </div>
          )
        }
    </div>
  )
}
