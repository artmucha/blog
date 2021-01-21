import Link from 'next/link';
import styled from 'styled-components';

import menu from 'constans/menu';
import CloseIcon from '../../public/icons/close-icon.svg';

const Navigation = styled.nav`
	display: flex;
  flex-direction: column;
	padding: 15px;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.black};
  position: fixed;
  top: 0;
  left: 0;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform .2s ease-in-out;
  z-index: 999;

	svg {
		align-self: flex-end;
		fill: ${({ theme }) => theme.white};
	}

	ul {
		margin-top: 48px;
		a {
			display: block;
			font-size:  ${({ theme }) => theme.size.m};
			line-height: 48px;
			font-weight: ${({ theme }) => theme.bold};
			text-align: center;
			text-transform: uppercase;
			color: ${({ theme }) => theme.white};
		}
	}

	@media(min-width: 992px) {
		position: static;
		padding: 0;
		height: auto;
		transform: translateX(0);
		background-color: ${({ theme }) => theme.white};

		svg {
			display: none;
		}

		ul {
			margin: 0;
			flex-direction: row;
			a {
				display: inline-block;
				margin-right: 20px;
				position: relative;
				font-size:  ${({ theme }) => theme.size.s};
				color: ${({ theme }) => theme.black};

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
	}
`;

const MainNavigation = ({open, setOpen}) => {
	
	return (
		<Navigation open={open}>
			<CloseIcon onClick={() => setOpen(false)} />
			<ul>
				{ menu.map(item => <Link key={item.link} href={item.link}><a title={item.text}>{item.text}</a></Link>) }
			</ul>
		</Navigation>		
	)
};

export default MainNavigation;