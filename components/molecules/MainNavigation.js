import Link from 'next/link';
import styled from 'styled-components';

import menu from 'constans/menu';
import SearchIcon from '../../public/icons/search-button.svg';

const Navigation = styled.nav`
	ul {
		display: flex;
		
		a {
			display: inline-block;
			padding: 0 10px;
			font-size:  ${({ theme }) => theme.s};
			line-height: 48px;
			font-weight: ${({ theme }) => theme.bold};
			text-align: center;
			text-transform: uppercase;
			color: ${({ theme }) => theme.black};
			position: relative;

			&:after {
				content: '';
				position: absolute;
				bottom: 0;
				left: 0;
				right: 0;
				margin: 0 auto;
				width: 0;
				height: 3px;
				background-color: ${({ theme }) => theme.black};
				transform: translate3d(0,0,0);
				transition: width .2s ease;
			}

			&:hover {
				&:after {
					width: 100%;
				}
			}
		}
	}
`;

const SearchButton = styled(SearchIcon)`
	cursor: pointer;
`;

const MainNavigation = () => {
	
	return (
		<>
			<Navigation>
				<ul>
					{ menu.map(item => <Link key={item.link} href={item.link}><a title={item.text}>{item.text}</a></Link>) }
				</ul>
			</Navigation>		
			<SearchButton />
	</>
	)
};

export default MainNavigation;