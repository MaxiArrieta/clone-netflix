import React from "react"
import Tarjeta from "../Tarjeta"
import { graphql, useStaticQuery } from "gatsby"
import { Section, Div, H3 } from "./styles"

export default function Catalogo() {
  const { peliculas, animes } = useStaticQuery(graphql`
    {
      peliculas: allFile(
        filter: { relativeDirectory: { eq: "covers/peliculas" } }
      ) {
        nodes {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
          id
          name
        }
      }
      animes: allFile(filter: { relativeDirectory: { eq: "covers/anime" } }) {
        nodes {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
          id
          name
        }
      }
    }
  `)

  return (
    <Section>
      <H3>Populares de Netflix</H3>
      <Div>
        {peliculas.nodes.map(pelicula => (
          <Tarjeta
            url={pelicula.childImageSharp}
            name={pelicula.name}
            key={pelicula.id}
          />
        ))}
      </Div>
      <H3>Series Japonesas Anime</H3>
      <Div>
        {animes.nodes.map(anime => (
          <Tarjeta
            url={anime.childImageSharp}
            name={anime.name}
            key={anime.id}
          />
        ))}
      </Div>
    </Section>
  )
}
