import { Icon } from '@iconify/react';

export default function ContactInfoWidget({ withIcon, title }) {
  return (
    <>
      {title && <h2 className="cs-widget_title">{title}</h2>}
<ul className="cs-menu_widget cs-style1 cs-mp0">
  <li>
    {withIcon && (
      <span className="cs-accent_color" style={{ marginRight: '8px' }}>
        <Icon icon="material-symbols:add-call-rounded" />
      </span>
    )}
    <a
      href="tel:+917337320100"
      className="cs-accent_color"
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      +91 73373 20100
    </a>
  </li>
  <li>
    {withIcon && (
      <span className="cs-accent_color" style={{ marginRight: '8px' }}>
        <Icon icon="mdi:envelope" />
      </span>
    )}
    <a
      href="mailto:hi@raising100x.com"
      className="cs-accent_color"
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      hi@raising100x.com
    </a>
  </li>
  <li>
    {withIcon && (
      <span className="cs-accent_color" style={{ marginRight: '8px' }}>
        <Icon icon="mdi:map-marker" />
      </span> 
    )}
    <span className="cs-accent_color" style={{display: 'inline-block', width: 'auto'}}>
      Hyderabad
    </span>
  </li>
</ul>
    </>
  )
}
   