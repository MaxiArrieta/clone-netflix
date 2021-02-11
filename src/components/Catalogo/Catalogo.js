import React from "react"
import Tarjeta from "../Tarjeta"
import { graphql, useStaticQuery } from "gatsby"
import { Div, H3 } from "./styles"

export default function Catalogo() {
  const { peliculas, animes } = useStaticQuery(graphql`
    {
      peliculas: allFile(
        filter: { relativeDirectory: { eq: "covers/peliculas" } }
      ) {
        nodes {
          childImageSharp {
            fluid {
              srcSetWebp
            }
          }
          name
        }
      }
      animes: allFile(filter: { relativeDirectory: { eq: "covers/anime" } }) {
        nodes {
          childImageSharp {
            fluid {
              srcSetWebp
            }
          }
          name
        }
      }
    }
  `)

  return (
    <div>
      <H3>Populares de Netflix</H3>
      <Div>
        {peliculas.nodes.map((pelicula, index) => (
          <Tarjeta
            url={pelicula.childImageSharp}
            name={pelicula.name}
            key={index}
          />
        ))}
      </Div>
      <H3>Series Japonesas Anime</H3>
      <Div>
        {animes.nodes.map((anime, index) => (
          <Tarjeta url={anime.childImageSharp} name={anime.name} key={index} />
        ))}
      </Div>
    </div>
  )
}
