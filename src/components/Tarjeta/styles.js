import styled from "styled-components"
import Img from "gatsby-image"

export const Image = styled(Img)`
  div {
    width: 100%;
    padding-bottom: 0 !important;
  }
  img {
    &:hover {
      animation-name: hover;
      animation-duration: 1.5s;
      animation-iteration-count: unset;
    }
  }
  @keyframes hover {
    from {
      height: 150px;
      width: 100px;
    }
    to {
      height: 300px;
      width: 200px;
    }
  }
`
