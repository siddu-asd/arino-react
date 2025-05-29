import React from 'react'
import { Icon } from '@iconify/react';

export default function ContactInfoWidget({ withIcon, title }) {
  return (
    <>
      {title && <h2 className="cs-widget_title">{title}</h2>}
      <ul className="cs-menu_widget cs-style1 cs-mp0">
        <li>
          {withIcon ? <span className='cs-accent_color'><Icon icon="material-symbols:add-call-rounded" /></span> : ''}
          +91 73373 20100
        </li>
        <li>
          {withIcon ? <span className='cs-accent_color'><Icon icon="mdi:envelope" /></span> : ''}
          hi@raising100x.com
        </li>
        <li>
          {withIcon ? <span className='cs-accent_color'><Icon icon="mdi:map-marker" /></span> : ''}
     Masab Tank - Hyderabad   <br /> 500008
        </li>
      </ul>
    </>
  )
}
