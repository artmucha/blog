import styled from 'styled-components';

import MenuIcon from '../../../public/icons/menu-icon.svg';

export const Header = styled.header`
  margin: 0 auto;
  padding-top: 15px;
  padding-bottom: 15px;
  position: absolute;
  width: 100%;
  text-shadow: rgba(0,0,0,.01) 0 0 1px;
  z-index: 99;

  @media(min-width: 768px) {
    padding: 60px 0 15px 0;
  }

  @media(min-width: 992px) {
    padding: 90px 0 15px 0;
  }
`;

export const MenuButton = styled(MenuIcon)`
  fill: ${({ theme }) => theme.white};
  cursor: pointer;
  float: left;
  margin-right: 20px;

  @media(min-width: 992px) {
    display: none;
  }
`;

export const NavigationWrapper = styled.div`
  @media(min-width: 992px) {
    display: flex;
    align-items: center;
  }
`;

export const Footer = styled.footer`
  margin-top: 50px;
  padding-top: 50px;
  padding-bottom: 50px;
  text-align: center;
  line-height: 150%;
  font-weight: ${({ theme }) => theme.regular};
  font-size: ${({ theme }) => theme.size.s};
  border-top: 1px solid ${({ theme }) => theme.grey200};

  @media(min-width: 992px) {
    text-align: left;
    display: flex;
  }
`;

export const FooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 20px;

  svg {
    margin-bottom: 10px;
  }

  @media(min-width: 992px) {
    max-width: 300px;
    text-align: left;
    margin-bottom: 0;
    align-items: flex-start;
    
    &:not(:last-child) {
      margin-right: 80px;
    }
  }
`;

export const FooterHeader = styled.p`
  margin-bottom: 10px;
  line-height: 150%;
  text-transform: uppercase;
  color: ${({ theme }) => theme.black};
`;

export const FooterLink = styled.a`
  display: inline;
  line-height: 150%;
  transition: color .2s linear;
  cursor: pointer;
  color: ${({ theme }) => theme.black};

  &:hover {
    color: ${({ theme }) => theme.grey300};
  }
`;

export const FooterCopyrights = styled.p`
  line-height: 150%;
  text-align: center;
  color: ${({ theme }) => theme.black};
  font-size: ${({ theme }) => theme.size.xs};
`;