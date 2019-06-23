import styled from 'styled-components'

export const Jumbotron = styled.header`
  min-height: 200px;
  color: white;
  text-shadow: 0 2px rgba(0, 0, 0, 0.5);
  font-size: 1.2em;
  background: ${props => `url(${props.background})`};
  background-size: cover;
`

export const Logo = styled.div`
  width: 400px;
  margin: 0 auto;
  padding: 52px;
  text-align: center;
  font-size: 1.4em;

  @media (max-width: 960px) {
    margin: 0;
  }

  @media (max-width: 740px) {
    width: auto;
    margin: 0 auto;
    padding: 20px;
  }
`

export const Title = styled.h1`
  > span {
    color: #3399ff;
  }
`

export const Contact = styled.div`
  position: absolute;
  right: 20px;
  top: 50px;

  > div {
    margin: 0.5em 0;
  }

  a {
    text-decoration: none;
    color: white;
  }

  @media (max-width: 740px) {
    position: initial;
    text-align: center;
    padding-bottom: 20px;
  }
`
