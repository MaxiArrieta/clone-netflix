import React from "react"
import Img from "gatsby-image"

export default function Tarjeta({ url, name }) {
  return (
    <div>
      <Img
        fluid={url.fluid}
        alt={name}
        imgStyle={{
          position: "relative",
          display: "flex",
          height: 144,
          width: 96,
          margin: 10,
          padding: 0,
        }}
        style={{ margin: 0, padding: 0 }}
      />
    </div>
  )
}
