import React from 'react';
import Div from '../Div';
import './funfact.scss';

export default function FunFact({ variant, title, subtitle }) {
  return (
    <Div className={variant ? `cs-funfact_wrap ${variant}` : 'cs-funfact_wrap'}>
      <Div className="cs-funfact_shape" style={{ backgroundImage: 'url(./images/funfact_shape_bg.svg)' }} />
      <Div className="cs-funfact_content">
        <h2>{title}</h2>
  
      </Div>
    </Div>
  );
}
