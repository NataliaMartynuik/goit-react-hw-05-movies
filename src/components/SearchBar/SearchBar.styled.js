import styled from 'styled-components';

export const Form = styled.form`
  margin: 30px auto 20px;
  text-align: center;
`;

export const FormInput = styled.input`
  width: 400px;
  padding: 8px 20px;
  border-radius: 5px;
  outline: #527c82;
  border-color: transparent;

`;

export const Button = styled.button`
display: inline-block;
  min-width: 100px;
  padding: 8px;
  border-radius: 5px;
  border: none;
  color: ${({ theme: { colors } }) => colors.fontSecondary};
  text-transform: uppercase;
  text-align: center;
  margin-left: 10px;
  background-color: ${({ theme: { colors } }) => colors.primary};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme: { colors } }) => colors.secondary};
  }
`


