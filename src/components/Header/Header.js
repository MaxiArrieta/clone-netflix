import React from 'react'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
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
  BotonPlay
} from './styles'

export default function Header () {
  const {
    logo,
    background,
    matrixLogo,
    info,
    play,
    plus
  } = useStaticQuery(graphql`
    {
      logo: file(relativePath: { eq: "logo-netflix.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
          id
        }
      }
      background: file(relativePath: { eq: "portada-matrix.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
          id
        }
      }
      matrixLogo: file(relativePath: { eq: "logo-matrix.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
          id
        }
      }
      info: file(relativePath: { eq: "icons/info.svg" }) {
        publicURL
        id
      }
      play: file(relativePath: { eq: "icons/play.svg" }) {
        publicURL
        id
      }
      plus: file(relativePath: { eq: "icons/plus.svg" }) {
        publicURL
        id
      }
    }
  `)

  return (
    <Section>
      <Head>
        <DivBack>
          <ImageBack
            fadeIn
            fluid={background.childImageSharp.fluid}
            key={background.id}
          />
          <Div>
            <DivLogo>
              <Img
                fluid={logo.childImageSharp.fluid}
                imgStyle={{
                  position: 'relative',
                  width: 25,
                  height: 35,
                  padding: 10
                }}
                key={logo.id}
              />
            </DivLogo>
            <Nav>
              <ul>
                <li>Series</li>
                <li>Peliculas</li>
                <li>Mi Lista</li>
              </ul>
            </Nav>
          </Div>
        </DivBack>
      </Head>

      <DivUl>
        <DivCategorias>
          <ul>
            <li>Surrealista</li>
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
          alt='logo-matrix'
          imgStyle={{
            position: 'relative',
            display: 'flex'
          }}
          key={matrixLogo.id}
          fadeIn={false}
        />
      </DivLogoMatrix>
      <DivControl>
        <P imgUrl={plus.publicURL} key={plus.id}>
          <span />
          <br />
          Mi lista
        </P>

        <BotonPlay imgUrl={play.publicURL} key={play.id}>
          <span />
          Reproducir
        </BotonPlay>

        <P imgUrl={info.publicURL} key={info.id}>
          <span /> <br />
          Info
        </P>
      </DivControl>
    </Section>
  )
}
