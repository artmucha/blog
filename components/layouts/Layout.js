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
  background-color: ${({ theme }) => theme.black};
  padding-top: 15px;
  padding-bottom: 15px;
  box-shadow: 0px 6px 8px 0px rgba(0,0,0,.08);

  a {
    color: ${({ theme }) => theme.white};
  }

  @media(min-width: 992px) {
    padding-bottom: 0;
    background-color: ${({ theme }) => theme.white};
    
    a {
      color: ${({ theme }) => theme.black};
    }
  }
`;

const MenuButton = styled(MenuIcon)`
  fill: ${({ theme }) => theme.white};
  cursor: pointer;

  @media(min-width: 992px) {
    display: none;
  }
`;

const SearchButton = styled(SearchIcon)`
  fill: ${({ theme }) => theme.white};
  cursor: pointer;

  @media(min-width: 992px) {
    fill: ${({ theme }) => theme.black};
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
        <Container flex spaceBetween>
          <MenuButton onClick={() => setOpen(!open)} />
          <h1><Link href="/"><a titie="Planeta Geeka">Planeta Geeka</a></Link></h1>
          <SearchButton onClick={() => setShowSearch(!showSearch)} >
          </SearchButton>
          <SearchForm showSearch={showSearch} setShowSearch={setShowSearch} />
        </Container>
        <Container flex alignCenter spaceBetween>
          <MainNavigation open={open} setOpen={setOpen} />
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