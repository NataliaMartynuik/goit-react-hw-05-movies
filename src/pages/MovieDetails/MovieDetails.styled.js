import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
  display: inline-block;
  min-width: 200px;
  min-height: 30px;
  padding: 5px;
  border-radius: 5px;
  border: none;
  color: ${({ theme: { colors } }) => colors.fontSecondary};
  text-transform: uppercase;
  text-align: center;
  background-color: ${({ theme: { colors } }) => colors.primary};
  cursor: pointer;
  margin-right: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
    &:hover{
    background-color: ${({ theme: { colors } }) => colors.secondary};
    }
     &.active {
     background-color: ${({ theme: { colors } }) => colors.secondary};
  }
`

export const Title = styled.p`
    font-size: 25px;
    font-weight: 700;
    margin-top: 20px;
`