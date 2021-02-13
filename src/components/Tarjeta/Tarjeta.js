import React from "react"
import Img from "gatsby-image"
import { DivImg } from "./styles"

export default function Tarjeta({ url, name }) {
  return (
    <DivImg>
      <Img
        alt={name}
        fluid={url.fluid}
        imgStyle={{
          position: "relative",
          display: "flex",
          height: 150,
          width: 100,
          margin: 10,
          padding: 0,
        }}
        fadeIn={true}
        durationFadeIn={2500}
      />
    </DivImg>
  )
}
