import React from 'react'
import { Link } from 'react-router-dom'
import Div from '../Div'
import './card.scss'

export default function Card({ title, link, src, alt }) {
  return (
    <Link to={link} className="cs-card cs-style1">
      <>
        <img src={src} alt={alt} />
        
        
        <Div className="cs-card_overlay">
          {/* <Div className="cs-overlay_text">{alt}</Div> */}
        </Div>

        {/* Title */}
        <Div className="cs-card_info">
          <h2 className="cs-card_title">{title}</h2>
        </Div>
      </>
    </Link>
  )
}
  