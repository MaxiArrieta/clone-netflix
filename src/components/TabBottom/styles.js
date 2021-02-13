import styled from "styled-components"

export const Footer = styled.footer`
  border: 1px solid red;
  position: fixed;
  bottom: 0;
  right: 0l;
  left: 0;
  background-color: var(--black);
  min-width: 340px;
  width: 100%;
  padding: 1em 0 0;

  ul {
    border: 1px solid yellow;
    margin: 0;
    padding: 0;
    display: grid;
    grid-auto-flow: column;
    list-style: none;
    color: #686868;
  }
  li {
    border: 1px solid blue;
    text-align: center;

    &:hover {
      fill: white;
      color: white;
    }
  }
  svg {
    display: block;
    margin: auto;
  }
  path {
    fill: #686868;
  }

  p {
    text-align: center;
  }

  li:hover &:is(path, span) {
    color: white;
    fill: white;
  }
  /* li:hover,
  path {
  } */
`
