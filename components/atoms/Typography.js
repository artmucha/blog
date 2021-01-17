import styled, { css } from 'styled-components';

const Typography = styled.div`
  display: block;
  font-size: ${({ theme }) => theme.size.l};
  font-weight: ${({ theme }) => theme.bold};
  color: ${({ theme, color }) => (color ? color : theme.black)};

  ${({ small }) =>
    small &&
    css`
      font-size: ${({ theme }) => theme.size.m};
  `}

  ${({ uppercase }) =>
    uppercase &&
    css`
      text-transform: uppercase;
  `}

  ${({ space }) => 
    space &&
    css`
      margin: 24px 0;
    `}

  @media(min-width: 992px) {
    ${({ space }) => 
    space &&
    css`
      margin: 48px 0 24px 0;
    `}

    ${({ big }) =>
    big &&
    css`
      font-size: ${({ theme }) => theme.size.xl};
    `}
  }

`;

export default Typography;
