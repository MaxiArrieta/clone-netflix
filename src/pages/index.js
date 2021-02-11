import * as React from "react"
import { GlobalStyle } from "../styles"
import Header from "../components/Header"
import Catalogo from "../components/Catalogo"

// markup
const IndexPage = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Catalogo />
    </>
  )
}

export default IndexPage
