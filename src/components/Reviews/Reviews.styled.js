import styled from 'styled-components';

export const ReviewsList = styled.ul`
  list-style-type: disclosure-open;
  margin-left: 20px;
  & li {
    margin-bottom: 20px;
  }
  & li span {
    font-weight: 500;
  }
`;

export const Text = styled.p`
   font-size: 20px;
   font-weight: 600;
   margin-top: 10px;
`