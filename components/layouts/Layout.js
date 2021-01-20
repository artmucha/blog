import { useState, useEffect } from 'react';
import Router from 'next/router';
import Head from 'next/head';
import styled from 'styled-components';

import Container from 'components/atoms/Container';
import MainNavigation from 'components/molecules/MainNavigation';
import SearchForm from 'components/molecules/SearchForm';
import DataLoader from 'components/molecules/DataLoader';

import MenuIcon from '../../public/icons/menu-icon.svg';
import SearchIcon from '../../public/icons/search-icon.svg';

const Header = styled.header`
  background-color: ${({ theme }) => theme.black};
  color: ${({ theme }) => theme.white};
  padding-top: 15px;
  padding-bottom: 15px;
  box-shadow: 0px 6px 8px 0px rgba(0,0,0,.08);

  @media(min-width: 992px) {
    padding-bottom: 0;
    background-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.black};
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
  padding-top: 20px;
  padding-bottom: 20px;
  margin-top: 20px;
  line-height: 1.7;
  font-weight: ${({ theme }) => theme.regular};
  color: ${({ theme }) => theme.grey300};
  font-size: ${({ theme }) => theme.size.s};
  background-color: ${({ theme }) => theme.black};
  text-align: center;

  @media(min-width: 768px) {
    margin-top: 48px;
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
          <h1>Planeta Geeka</h1>
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
				Stopka
			</Footer>
    </>
  )
}

export default Layout;