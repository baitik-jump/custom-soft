import React from 'react';
import {FooterBucket} from './footer_bucket.js';
import {Sidebar} from './sidebar.js'
import './bucket_style.css';

export const Bucket = (props) =>{
  return(
    <div>
      <Sidebar state={props.state} newMainDiv={props.newMainDiv}/>
      <FooterBucket state={props.state}/>
    </div>
  );
}
