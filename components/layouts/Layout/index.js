import { useState, useEffect } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import Head from 'next/head';

import Container from 'components/atoms/Container';
import MainNavigation from 'components/molecules/Navigation';
import DataLoader from 'components/molecules/DataLoader';
import Checker from 'components/molecules/Checker';
import { Header, MenuButton, NavigationWrapper, Footer, FooterInfo, FooterHeader, FooterLink, FooterCopyrights } from 'components/layouts/Layout/styles';

import Logo from '../../../public/logos/logo.svg';
import LogoBlack from '../../../public/logos/logo_black.svg';

import menu from 'constans/menu';

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
            <Checker />
          </NavigationWrapper>
        </Container>
			</Header>

			{children}
			
      <Container>
        <Footer>
          <FooterInfo>
            <LogoBlack />
            <p>NerdzCorner to blog technologiczny, na którym znajdziesz najciekawsze i najbardziej aktualne informacje ze świata gier, filmów i nowych technologii.</p>
          </FooterInfo>
          <FooterInfo>
            <FooterHeader>Kategorie</FooterHeader>
            { menu.map(item => (
              <Link key={item.link} href={item.link}>
                <FooterLink title={item.text}>{item.text}</FooterLink>
              </Link>
              )
            )}
          </FooterInfo>
          <FooterInfo>
            <FooterHeader>Kontakt</FooterHeader>
            <p>kontakt[at]nerdzcorner.pl</p>
          </FooterInfo>
        </Footer>
          <FooterCopyrights>
            Copyright © {new Date().getFullYear()} 
            <Link href="https://nerdzcorner.pl"><a> NerdzCorner </a></Link> 
            - Wszystkie prawa zastrzeżone.
          </FooterCopyrights>
      </Container>
    </>
  )
}

export default Layout;