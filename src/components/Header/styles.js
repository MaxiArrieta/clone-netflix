import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

export const Section = styled.section`
  height: 100%;
  margin: 0;
  min-width: 340px;
  position: relative;
  padding: 0;
  width: 100%;
`

export const Head = styled.header`
  display: flex;
  min-width: 340px;
  width: 100%;
`

export const Div = styled.div`
  background: linear-gradient(180deg, #0e0d0d 0%, rgba(0, 0, 0, 0) 100%),
    linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 101.98%);
  left: 0px;
  min-width: 340px;
  height: 198px;
  position: absolute;
  top: 0px;
  width: 100%;
`
export const DivLogo = styled.div`
  align-items: center;
  display: flex;
  padding-left: 5%;
  width: 20%;
`
export const ImageBack = styled(BackgroundImage)`
  height: 513px;
`
export const DivBack = styled.div`
  height: 520px;
  min-width: 340px;
  margin-top: 25px;
  width: 100%;
`
export const Nav = styled.nav`
  align-items: center;
  color: #fff;
  display: flex;
  justify-content: center;
  span {
    margin: 10px;
  }
`
export const DivCategorias = styled.div`
  position: absolute;
  ul {
    display: flex;
    flex-direction: row;
  }
  li {
    font-size: 1.3rem;
    display: flex;
    margin: 8px;
    /* margin: 5px 10px 5px 8px; */
  }
`
export const DivUl = styled.div`
  display: flex;
  justify-content: center;
  background: rgb(4, 4, 4);
  background: linear-gradient(
    0deg,
    rgb(3, 3, 3) 0%,
    rgb(0 0 0 / 78%) 49%,
    rgb(0 0 0 / 6%) 100%
  );
  height: 70px;
  position: absolute;
  top: 490px;
  width: 100%;
`

export const DivLogoMatrix = styled.div`
  left: calc(50% - 155px);
  position: absolute;
  top: 290px;
`
export const DivControl = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
`

export const P = styled.p`
  margin-top: 15px;
  padding: 5px;
  text-align: center;
  span {
    background-image: url(${props => props.imgUrl});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: inline-block;
    height: 20px;
    width: 20px;
  }
`
export const BotonPlay = styled.p`
  background-color: var(--light);
  border-radius: 5px;
  color: var(--black);
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 8px 15px;
  text-align: center;

  span {
    background-image: url(${props => props.imgUrl});
    display: inline-block;
    height: 20px;
    line-height: 5px;
    margin-right: 10px;
    margin-top: 5px;
    width: 25px;
  }
`
