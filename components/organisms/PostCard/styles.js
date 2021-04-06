import styled from 'styled-components';

export const CardWrapper = styled.article`
	width: 100%;
	background-color: ${({ theme }) => theme.white};
  overflow: hidden;

  a {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		overflow: hidden;
  }

  &:hover {
    img {
      transform: scale(1.1);
    }
    h2 {
      color: ${({ theme }) => theme.grey300};
    }
  }
`;

export const CardCover = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
  img {
    transition: all .2s ease-in-out;
    object-fit: cover;
  }
`;

export const Badges = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px 0 10px 15px;
  display: flex;
  background-color: ${({ theme }) => theme.white};
`;

export const CardTitle = styled.h2`
	margin-top: 15px!important;
	line-height: 115%;
  transition: all .2s ease-in-out;
  font-size: ${({ theme, small }) => small ? theme.size.s : theme.size.l};

  @media(min-width: 992px) {
    margin-top: 20px!important;
    font-size: ${({ theme, small }) => small ? theme.size.m : theme.size.l};
  }
`;

export const CardExcerpt = styled.p`
  position: relative;
  line-height: 150%;
  margin-top: 10px!important;
  font-weight: ${({ theme }) => theme.thin}!important;
  font-size: ${({ theme }) => theme.size.s}!important;

  @media(min-width: 992px) {
    margin-top: 20px!important;
    font-size: ${({ theme }) => theme.size.m}!important;
  }

  &:after {
    content: "";
    width: 100%;
    position: absolute;
    top: 30px;
    left: 0px;
    height: 100%;
    display: block;
    background: linear-gradient(rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 100%);
  }
`;