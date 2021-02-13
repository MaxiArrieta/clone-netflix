import * as React from "react"
import { GlobalStyle } from "../styles"
import Header from "../components/Header"
import Catalogo from "../components/Catalogo"
import TabBottom from "../components/TabBottom"

const IndexPage = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Catalogo />
      <TabBottom />
    </>
  )
}

export default IndexPage
