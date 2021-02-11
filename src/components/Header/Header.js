import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import {
  Section,
  Head,
  Div,
  DivLogo,
  ImageBack,
  DivBack,
  Nav,
  DivCategorias,
  DivUl,
  DivLogoMatrix,
  DivControl,
  P,
  BotonPlay,
} from "./styles"

export default function Header() {
  const {
    logo,
    background,
    matrixLogo,
    info,
    play,
    plus,
  } = useStaticQuery(graphql`
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
      matrixLogo: file(relativePath: { eq: "logo-matrix.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      info: file(relativePath: { eq: "icons/info.svg" }) {
        publicURL
      }
      play: file(relativePath: { eq: "icons/play.svg" }) {
        publicURL
      }
      plus: file(relativePath: { eq: "icons/plus.svg" }) {
        publicURL
      }
    }
  `)

  console.log("Plus", info.publicURL)

  return (
    <Section>
      <Head role="header">
        <DivBack>
          <ImageBack fluid={background.childImageSharp.fluid} fadeIn="soft" />
          <Div>
            <DivLogo>
              <Img
                fluid={logo.childImageSharp.fluid}
                imgStyle={{
                  position: "relative",
                  display: "flex",
                }}
              />
            </DivLogo>
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
      <DivLogoMatrix>
        <Img
          fluid={matrixLogo.childImageSharp.fluid}
          alt="logo-matrix"
          imgStyle={{
            position: "relative",
            display: "flex",
          }}
          fadeIn={false}
        />
      </DivLogoMatrix>
      <DivControl>
        <P imgUrl={plus.publicURL}>
          <span></span>
          <br />
          Mi lista
        </P>

        <BotonPlay imgUrl={play.publicURL}>
          <span></span>
          Reproducir
        </BotonPlay>

        <P imgUrl={info.publicURL}>
          <span></span> <br />
          Info
        </P>
      </DivControl>
    </Section>
  )
}
