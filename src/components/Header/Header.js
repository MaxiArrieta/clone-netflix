import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import { Head, Div } from "./styles"

const Header = () => {
  const { logo } = useStaticQuery(graphql`
    {
      logo: file(relativePath: { eq: "logo-netflix.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  console.log("logo", logo.childImageSharp.fluid)

  return (
    <Head role="header">
      <Div>
        <Img
          fluid={logo.childImageSharp.fluid}
          imgStyle={{ position: "relative", display: "flex", margin: "0 auto" }}
        />
      </Div>
    </Head>
  )
}

export default Header
