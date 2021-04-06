import styled from 'styled-components';

export const CardWrapper = styled.article`
  background-color: ${({ theme }) => theme.white};

  a {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
    overflow: hidden;
    line-height: 115%;
  }

  &:hover {
    img {
      transform: scale(1.1);
    }
    h3 {
      color: ${({ theme }) => theme.grey300};
    }
  }
`;

export const CardCover = styled.div`
  display: block;
  min-width: 105px;
  max-width: 175px;
  height: 100%;
  margin-right: 15px;
  img {
    transition: all .2s ease-in-out;
    object-fit: cover;
  }

  @media(min-width: 992px) {
    min-width: 145px;
    max-width: 195px;
  }
`;

export const CardTitle = styled.h3`
  transition: all .2s ease-in-out;
  margin-top: 0!important;
  font-size: ${({ theme }) => theme.size.m}!important;
  font-size: ${({ theme }) => theme.black}!important;
`;