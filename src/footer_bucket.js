import React from 'react';
import {parts} from './bd.js';

export const FooterBucket = (props) =>{
  let price = 0;
  props.state.parts.map((item, index) => parts.filter((element) => item === element.id && index === element.dotId).map(item => price+=item.price));
  return(<div class="footer">
    <div class="cost_text">
      <h3>Стоимость: {price}руб.</h3>
    </div>
    <div class="cost_sum"></div>
    <div class="buy_btn"><h3 class="buy_text">Купить</h3></div>
  </div>
 );
}
