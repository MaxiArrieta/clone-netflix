import styled from 'styled-components'

export const Footer = styled.footer`
  position: sticky;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: var(--black);
  min-width: 340px;
  width: 100%;
  padding: 1em 0 0;

  ul {
    margin: 0;
    padding: 0;
    display: grid;
    grid-auto-flow: column;
    list-style: none;
    color: var(--gray);
    padding-bottom: 1em;
  }

  p {
    text-align: center;
  }

  li {
    text-align: center;
    font-size: 0.9em;
    cursor: pointer;
  }

  svg {
    display: block;
    margin: auto;
  }

  path {
    fill: var(--gray);
  }

  li:hover path,
  li:hover span {
    color: var(--light);
    fill: var(--light);
  }
`
