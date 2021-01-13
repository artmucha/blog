import { useState, useEffect } from 'react';
import Router from 'next/router';
import Head from 'next/head';
import styled from 'styled-components';

import Container from 'components/atoms/Container';
import MainNavigation from 'components/molecules/MainNavigation';

const Header = styled.header`
  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.black};
  padding-top: 10px;
  box-shadow: 0px 6px 8px 0px rgba(0,0,0,.08);
`;

const Footer = styled.footer`
  padding-top: 20px;
  padding-bottom: 20px;
  margin-top: 20px;
  line-height: 1.7;
  font-weight: ${({ theme }) => theme.regular};
  color: ${({ theme }) => theme.grey300};
  font-size: ${({ theme }) => theme.fontSize.s};
  background-color: ${({ theme }) => theme.black};
  text-align: center;

  @media(min-width: 768px) {
    margin-top: 40px;
    text-align: left;
  }
`;

const Layout = ({ children, title = 'Blog'}) => {
	const [loading, setLoading] = useState(false);
	
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

			<Header>
        <Container>
          <h1>Planeta Geeka</h1>
        </Container>
        <Container flex alignCenter spaceBetween>
          <MainNavigation />
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