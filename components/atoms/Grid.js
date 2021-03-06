import styled, { css } from 'styled-components';

const Grid = styled.div`
  display: grid;
  
  @media(min-width: 1px) {
    ${({ s }) =>
    s &&
    css`
      grid-template-columns: repeat(${({ s }) => s}, 1fr);
      grid-column-gap: 15px;
      grid-row-gap: 40px;
    `}
  } 

  @media(min-width: 768px) {
    ${({ m }) =>
    m &&
    css`
      grid-template-columns: repeat(${({ m }) => m}, 1fr);
    `}
  }

  @media(min-width: 992px) {
    ${({ l }) =>
    l &&
    css`
      grid-template-columns: repeat(${({ l }) => l}, 1fr);
      grid-column-gap: 50px;
      grid-row-gap: 40px;
    `}
  }
`;

export default Grid;
