import React from 'react'
import styled from 'styled-components'

const FlexBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  a {
    color: #141414;
  }
`

export default ({ children }) => (
  <FlexBox>
    {children}
  </FlexBox>
)
