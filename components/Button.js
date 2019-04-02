import styled from 'styled-components'

export default styled.a`
  display: block;
  background-color: #57BE8C;
  width: 300px;
  color: #f7f6fa;
  border-radius: 14px;
  border-color: transparent;
  padding: 14px 24px;
  font-size: 25px;
  font-weight: bold;
  margin: 80px auto 0;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;
  &:hover {
    color: #fff;
    cursor: pointer;
    transform: translate(0px, 1px) scale(1.1, 1.1);
  }
`
