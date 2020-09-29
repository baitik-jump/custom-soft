import React from 'react';
import step1 from './images/step1.svg';
import step1_used from './images/step1_used.svg';
import step2 from './images/step2.png';
import step2_used from './images/step2_used.png';
import step3 from './images/step3.png';
import step3_used from './images/step3_used.png';
import './conf_style.css';

export const Sidebar = (props) =>{
  return(
    <div>
      <div class="sidebar">
      { props.state.mainDiv !== 'conf_step1' && <div class="step1 step_unused" onClick={() => props.newMainDiv('conf_step1')}>
        <img class="steps_img step1_img" src={step1} alt=" "></img>
      </div> }
      { props.state.mainDiv === 'conf_step1' &&  <div class="step1 step_used">
        <img class="steps_img step1_img" src={step1_used} alt=" "></img>
      </div>}
      { props.state.mainDiv !== 'conf_step2' && <div class="step2 step_unused" onClick={() => props.newMainDiv('conf_step2')}>
        <img class="steps_img step2_img" src={step2} alt=" "></img>
      </div> }
      { props.state.mainDiv === 'conf_step2' &&  <div class="step2 step_used">
        <img class="steps_img step2_img" src={step2_used} alt=" "></img>
      </div>}
      { props.state.mainDiv !== 'bucket' && <div class="step3 step_unused" onClick={() => props.newMainDiv('bucket')}>
        <img class="steps_img step1_img" src={step3} alt=" "></img>
      </div> }
      { props.state.mainDiv === 'bucket' &&  <div class="step3 step_used">
        <img class="steps_img step1_img" src={step3_used} alt=" "></img>
      </div>}
      </div>
    </div>
  );
}
