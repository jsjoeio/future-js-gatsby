import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin: 100px 25px;
  img {
    height: auto;
    width: 100px;
  }
  h3 {
    font-size: 20px;
    text-align: center;
    height: 100px;
    width: auto;
  }
`
export default ({ title, src, alt, link }) => (
  <Container>
    <a href={link} target='_blank'><img src={src} alt={alt} /></a>
    <h3>{title}</h3>
  </Container>
)
