import React from 'react'
import Img from 'gatsby-image'
import { Div } from './styles'

export default function Tarjeta ({ url, name }) {
  return (
    <Div>
      <Img
        alt={name}
        fluid={url.fluid}
        imgStyle={{
          position: 'relative',
          display: 'flex',
          height: 150,
          width: 100
        }}
        fadeIn='true'
        durationFadeIn={2500}
      />
    </Div>
  )
}
