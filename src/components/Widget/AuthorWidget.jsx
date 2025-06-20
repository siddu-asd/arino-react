import React from 'react'
import Div from '../Div'

export default function AuthorWidget({src, name, description}) {
  return (
    <Div className="cs-author_card text-center">
      <img src={src} alt="Aauthor" loading="lazy" />
      <h3>{name}</h3>
      <p>{description}</p>
    </Div>
  )
}
