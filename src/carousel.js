import React from 'react';
import {
  parts
} from './bd';

// item.weapon.includes(props.state.weapon) && item.dotId === props.state.dotId

export const CarouselInit = (props) => {
  return (
    <div className="scrollmenu">
       {parts
        .filter((item) =>
          item.weapon.includes(props.state.weapon) && item.dotId === props.state.dotId
          ).map((item)=>
            <div>
              <img className="part" src={item.src} alt={item.name}/>
            </div>
          )
        }
    </div>
  )
}
