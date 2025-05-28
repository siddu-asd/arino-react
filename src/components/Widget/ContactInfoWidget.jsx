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
          ibrahim@raising100x.com
        </li>
        <li>
          {withIcon ? <span className='cs-accent_color'><Icon icon="mdi:map-marker" /></span> : ''}
          601-Block A, Serene Heights <br />Masab Tank - Hyderabad. 500008
        </li>
      </ul>
    </>
  )
}
