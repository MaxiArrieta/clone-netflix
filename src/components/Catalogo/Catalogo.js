import React from "react"
import Tarjeta from "../Tarjeta"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

export default function Catalogo({ titulo }) {
  const { allImage } = useStaticQuery(graphql`
    query {
      allImage: allFile(filter: { relativeDirectory: { eq: "covers" } }) {
        nodes {
          childImageSharp {
            fluid {
              srcSetWebp
            }
          }
          name
          relativePath
        }
      }
    }
  `)

  console.log(allImage.nodes)
  allImage.nodes.map(image => {
    console.log("Images: ", image)
  })

  //   console.log(image)

  return (
    <Div>
      <h3>{titulo}</h3>
      <Tarjeta url="url-img" name="name" />
    </Div>
  )
}

const Div = styled.div`
  margin: 20px;
  overflow-x: scroll;
  h3 {
    font-weight: bold;
    line-height: 20px;
  }
`
