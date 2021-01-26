import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import {
  Section,
  Head,
  Div,
  DivImage,
  ImageBack,
  DivBack,
  Nav,
  DivCategorias,
} from "./styles"
import styled from "styled-components"

const Header = () => {
  const { logo, background } = useStaticQuery(graphql`
    {
      logo: file(relativePath: { eq: "logo-netflix.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      background: file(relativePath: { eq: "portada-matrix.png" }) {
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
    <Section>
      <Head role="header">
        <DivBack>
          <ImageBack fluid={background.childImageSharp.fluid} fadeIn="soft" />
          <Div>
            <DivImage>
              <Img
                fluid={logo.childImageSharp.fluid}
                imgStyle={{
                  position: "relative",
                  display: "flex",
                }}
              />
            </DivImage>
            <Nav>
              <span>Series</span>
              <span>Peliculas</span>
              <span>Mi lista</span>
            </Nav>
          </Div>
        </DivBack>
      </Head>

      <DivUl>
        <DivCategorias>
          <ul>
            <li style={{ listStyleType: "none" }}>Surrealista</li>
            <li>Distopico</li>
            <li>Habil</li>
            <li>Siniestro</li>
            <li>Emocionante</li>
          </ul>
        </DivCategorias>
      </DivUl>
    </Section>
  )
}

export default Header
const DivUl = styled.div`
  height: 70px;
  width: 100%;
  position: absolute;
  /* left: calc(50% - 180px); */
  top: 490px;
  background: rgb(4, 4, 4);
  background: linear-gradient(
    0deg,
    rgb(3, 3, 3) 0%,
    rgb(0 0 0 / 78%) 49%,
    rgb(0 0 0 / 6%) 100%
  );
`
