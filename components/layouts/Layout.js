import { useState, useEffect } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import styled from 'styled-components';

import Container from 'components/atoms/Container';
import MainNavigation from 'components/molecules/MainNavigation';
import DataLoader from 'components/molecules/DataLoader';

import Logo from '../../public/logos/logo.svg';
import LogoBlack from '../../public/logos/logo_black.svg';
import MenuIcon from '../../public/icons/menu-icon.svg';

import menu from 'constans/menu';

const Header = styled.header`
  margin: 0 auto;
  padding-top: 15px;
  padding-bottom: 15px;
  position: absolute;
  width: 100%;
  text-shadow: rgba(0,0,0,.01) 0 0 1px;
  z-index: 99;

  a {
    color: ${({ theme }) => theme.white};
    font-size: ${({ theme }) => theme.size.xl};
    font-weight: ${({ theme }) => theme.bold};
    line-height: ${({ theme }) => theme.size.xxl};
  }

  @media(min-width: 768px) {
    padding: 60px 0 15px 0;
  }

  @media(min-width: 992px) {
    padding: 90px 0 15px 0;
  }
`;

const MenuButton = styled(MenuIcon)`
  fill: ${({ theme }) => theme.white};
  cursor: pointer;
  float: left;
  margin-right: 20px;

  @media(min-width: 992px) {
    display: none;
  }
`;

const NavigationWrapper = styled.div`
  @media(min-width: 992px) {
    display: flex;
    align-items: center;
  }
`;

const Footer = styled.footer`
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

const FooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 20px;

  p, span {
    line-height: 150%;
    color: ${({ theme }) => theme.black};
  }

  span {
    text-transform: uppercase;
  }

  span, svg {
    margin-bottom: 10px;
  }

  a {
    display: inline;
    line-height: 150%;
    transition: color .2s linear;
    color: ${({ theme }) => theme.black};

    &:hover {
      color: ${({ theme }) => theme.grey300};
    }
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

const Layout = ({ children, title = "NerdzCorner"}) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
	
	const startLoading = () => setLoading(true);
	const stopLoading = () => setLoading(false);

  useEffect(() => {
		Router.events.on("routeChangeStart", () => { 
			setOpen(false);
			startLoading();
		});
    Router.events.on("routeChangeComplete", stopLoading);
    return () => {
      Router.events.off("routeChangeStart", () => {
				setOpen(false);
				startLoading();
			});
			Router.events.off("routeChangeComplete", stopLoading);
    }
	}, []);
	
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href='https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@300;400;700&display=swap' rel='stylesheet'/>
      </Head>
      { loading && <DataLoader /> }
			<Header>
        <Container flex spaceBetween alignCenter>
          <MenuButton onClick={() => setOpen(!open)} />
          <Link href="/">
            <a titie="NerdzCorner">
              <Logo />
            </a>
          </Link>
          <NavigationWrapper>
            <MainNavigation open={open} setOpen={setOpen} />
          </NavigationWrapper>
        </Container>
			</Header>

			{children}
			
      <Container>
        <Footer>
          <FooterInfo>
            <LogoBlack />
            <p>NerdzCorner to blog technologiczny, na którym znajdziesz najciekawsze i najbardziej aktualne informacje ze świata gier, filmów, seriali, książek i nowych technologii.</p>
          </FooterInfo>
          <FooterInfo>
            <span>Kategorie</span>
            { menu.map(item => <Link key={item.link} href={item.link}><a title={item.text}>{item.text}</a></Link>) }
          </FooterInfo>
          <FooterInfo>
            <span>Kontakt</span>
            <p>kontakt[at]nerdzcorner.pl</p>
          </FooterInfo>
        </Footer>
      </Container>
    </>
  )
}

export default Layout;