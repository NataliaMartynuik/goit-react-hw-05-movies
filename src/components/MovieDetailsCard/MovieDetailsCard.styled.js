import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  
`;

export const Img = styled.img`
  display: block;
  width: 300px;
  border-radius: 5px;
`;

export const MovieInfo = styled.div`
  flex: 1;
  min-width: 200px;
  margin-left: 20px;
  color: ${({ theme: { colors } }) => colors.fontPrimary};
`;