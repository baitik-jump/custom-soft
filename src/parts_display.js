import React from 'react';
import {
  parts
} from './bd';

export const PartsDisplay = (props) =>{
  return(
    <div>
      {
        props.state.parts.map(
          (item, index) =>
            parts.filter((element) => item === element.id && index === element.dotId).map(item =>(
              <img src={item.src} alt=' ' class={item.styleSrc}/>)
            )
        )
      }
    </div>
  );
}
