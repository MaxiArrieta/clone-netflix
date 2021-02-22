import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

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
  position: relative;
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
  padding-left: 5%;
  margin-top: 5%;
  width: 20%;
  position: absolute;

  div {
    padding-bottom: 0 !important;
  }
`
export const ImageBack = styled(BackgroundImage)`
  height: 513px;
  /* min-width: 375px; */
`
export const DivBack = styled.div`
  height: 520px;
  min-width: 340px;
  margin-top: 25px;
  width: 100%;
`
export const Nav = styled.nav`
  position: absolute;
  left: 0;
  right: 0;
  top: 64px;
  align-items: center;
  color: #fff;
  display: flex;
  justify-content: center;
  ul {
    list-style: none;
    display: flex;
  }
  li {
    margin: 10px;
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }

  @media (min-width: 800px) {
    font-size: 2rem;
  }
`
export const DivCategorias = styled.div`
  position: absolute;
  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    gap: 5px;
  }
  li {
    font-size: 1.4rem;

    @media (max-width: 375px) {
      font-size: 1.2rem;
    }

    @media (min-width: 385px) {
      font-size: 1.4rem;
    }

    @media (min-width: 510px) {
      font-size: 1.6rem;
      margin-right: 5px;
    }

    @media (min-width: 800px) {
      font-size: 1.8rem;
      margin-right: 20px;
    }

    &:before {
      content: '•';
      margin-left: 5px;
      margin-right: 2px;
      top: 2px;

      @media (min-width: 450px) {
        margin-left: 10px;
        margin-right: 15px;
      }

      @media (min-width: 760px) {
        margin-left: 15px;
        margin-right: 20px;
      }
    }
    &:first-child:before {
      display: none;
    }
  }
`
export const DivUl = styled.div`
  display: flex;
  justify-content: center;
  background: rgb(4, 4, 4);
  background: linear-gradient(
    0deg,
    rgb(3, 3, 3) 15%,
    rgb(0 0 0 / 70%) 60%,
    rgb(0 0 0 / 5%) 100%
  );
  height: 70px;
  position: absolute;
  top: 490px;
  width: 100%;
`

export const DivLogoMatrix = styled.div`
  left: calc(50% - 155px);
  position: absolute;
  top: 340px;
  min-width: 340px;
  @media (max-width: 375px) {
    left: calc(50% - 170px);
  }
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
  cursor: pointer;

  span {
    background-image: url(${(props) => props.imgUrl});
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
  padding: 8px 20px;
  text-align: center;
  cursor: pointer;

  span {
    background-image: url(${(props) => props.imgUrl});
    display: inline-block;
    height: 20px;
    line-height: 5px;
    margin-right: 10px;
    margin-top: 5px;
    width: 25px;
  }
`
