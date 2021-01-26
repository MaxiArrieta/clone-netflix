import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

export const Section = styled.section`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  position: relative;
  min-width: 340px;
`

export const Head = styled.header`
  display: flex;
  width: 100%;
  min-width: 340px;
`

export const Div = styled.div`
  position: absolute;
  width: 100%;
  min-width: 340px;
  height: 198px;
  left: 0px;
  top: 0px;
  background: linear-gradient(180deg, #0e0d0d 0%, rgba(0, 0, 0, 0) 100%),
    linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 101.98%);
`
export const DivImage = styled.div`
  align-items: center;
  display: flex;
  padding-left: 5%;
  width: 100%;
`
export const ImageBack = styled(BackgroundImage)`
  height: 513px;
`
export const DivBack = styled.div`
  height: 520px;
  width: 100%;
  min-width: 340px;
  margin-top: 25px;
`
export const Nav = styled.nav`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    margin: 10px;
  }
`
export const DivCategorias = styled.div`
  position: absolute;
  left: calc(50% - 180px);
  /* top: 490px; */
  /* background: linear-gradient(180deg, #0e0d0d 0%, rgba(0, 0, 0, 0) 100%),
    linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 101.98%); */

  ul {
    display: flex;
    flex-direction: row;
  }
  li {
    margin: 5px 16px 5px 8px;
    font-size: 1.3rem;
  }
`
