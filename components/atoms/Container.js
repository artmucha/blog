import styled, { css } from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;

  ${({ space }) =>
    space &&
    css`
      padding-top: 24px;
    `}

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      justify-content: center;
    `}

  ${({ spaceBetween }) =>
    spaceBetween &&
    css`
      justify-content: space-between;
    `}
  
    ${({ flexStart }) =>
    flexStart &&
    css`
      justify-content: flex-start;
    `}

	${({ alignCenter }) =>
    alignCenter &&
    css`
      align-items: center;
    `}

  ${({ column }) =>
    column &&
    css`
      flex-direction: column;
    `}

    @media (min-width: 992px) {

      ${({ space }) =>
      space &&
      css`
        padding-top: 48px;
      `}
    }
`;

export default Container;
