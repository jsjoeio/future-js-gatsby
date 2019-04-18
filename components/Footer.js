import React from 'react'
import styled from 'styled-components'
import Link from './Link'

const Container = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0;
  font-size: 16px;

  * > {
    margin: 0;
  }
`
export default () => (
  <Container>
    <Link href='https://magnoliajs.com/' target='_blank' alt='MagnoliaJS website.'><p style={{ margin: '10px 0' }}>Magnoliajs</p></Link>
    <p style={{ margin: '0' }}>Thursday, April 18th, 2019</p>
  </Container>
)
