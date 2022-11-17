import styled from 'styled-components';


export const Title = styled.h1`
  display: block;
  margin: 30px auto;
  padding: 20px;
  text-align: center;
  border-radius: 5px;
  color: ${({ theme: { colors } }) => colors.fontSecondary};
  box-shadow: ${({ theme: { colors } }) => colors.shadow};
  background: ${({ theme: { colors } }) => colors.secondary};
  background: linear-gradient(
    90deg,
    ${({ theme: { colors } }) => colors.secondary} 0%,
    ${({ theme: { colors } }) => colors.secondary} 29%,
    ${({ theme: { colors } }) => colors.primary} 100%
  );
`;