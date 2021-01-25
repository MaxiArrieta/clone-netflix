import * as React from "react"
import { GlobalStyle } from "../styles"
import Header from "../components/Header/Header"

// markup
const IndexPage = () => {
  return (
    <>
      <GlobalStyle />
      <main>
        <Header />
      </main>
    </>
  )
}

export default IndexPage
