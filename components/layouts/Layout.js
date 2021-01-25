import { useState, useEffect } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import styled from 'styled-components';

import Container from 'components/atoms/Container';
import MainNavigation from 'components/molecules/MainNavigation';
import SearchForm from 'components/molecules/SearchForm';
import DataLoader from 'components/molecules/DataLoader';

import MenuIcon from '../../public/icons/menu-icon.svg';
import SearchIcon from '../../public/icons/search-icon.svg';

import menu from 'constans/menu';
import Grid from 'components/atoms/Grid';

const Header = styled.header`
  margin: 0 auto;
  padding-top: 15px;
  padding-bottom: 15px;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
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
    padding: 60px 20px 15px 20px;
  }

  @media(min-width: 992px) {
    padding: 90px 20px 15px 20px;
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

const SearchButton = styled(SearchIcon)`
  fill: ${({ theme }) => theme.white};
  cursor: pointer;
`;

const NavigationWrapper = styled.div`
  @media(min-width: 992px) {
    display: flex;
    align-items: center;
  }
`;

const Footer = styled.footer`
  padding-top: 24px;
  padding-bottom: 24px;
  margin-top: 24px;
  font-weight: ${({ theme }) => theme.regular};
  font-size: ${({ theme }) => theme.size.s};
  line-height: ${({ theme }) => theme.size.m};
  background-color: ${({ theme }) => theme.black};
  text-align: center;

  @media(min-width: 768px) {
    margin-top: 48px;
    padding-top: 48px;
    padding-bottom: 48px;
    text-align: left;
  }
`;

const FooterMenu = styled.ul`
  display: flex;
  flex-direction: column;
  text-align: center;

  p {
    color: ${({ theme }) => theme.white};
    text-transform: uppercase;
    margin-bottom: 5px;
  }

  a {
    display: inline;
    color: ${({ theme }) => theme.grey300};
    line-height: ${({ theme }) => theme.size.l};
    transition: color .2s linear;

    &:hover {
      color: ${({ theme }) => theme.grey100};
    }
  }

  @media(min-width: 768px) {
    text-align: left;
  }
`;


const Layout = ({ children, title = 'Blog'}) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
	
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
          <div>
            <MenuButton onClick={() => setOpen(!open)} />
            <Link href="/"><a titie="Planeta Geeka">Planeta Geeka</a></Link>
          </div>
          <NavigationWrapper>
            <MainNavigation open={open} setOpen={setOpen} />
            <SearchButton onClick={() => setShowSearch(!showSearch)} />
          </NavigationWrapper>
          <SearchForm showSearch={showSearch} setShowSearch={setShowSearch} />
        </Container>
			</Header>

			{children}
			
			<Footer>
        <Container>
          <Grid s={1} m={3}>
            <FooterMenu>
              <p>Kategorie</p>
              { menu.map(item => <Link key={item.link} href={item.link}><a title={item.text}>{item.text}</a></Link>) }
            </FooterMenu>
            <FooterMenu>
              <p>Kontakt</p>
              <a href="mailto:kontakt@blog.pl">kontakt@blog.pl</a>
            </FooterMenu>
            <div></div>
          </Grid>
        </Container>
			</Footer>
    </>
  )
}

export default Layout;