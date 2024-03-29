import styled from 'styled-components';

export const Navigation = styled.nav`
	display: flex;
  flex-direction: column;
	padding: 15px;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.white};
  position: fixed;
  top: 0;
  left: 0;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform .2s ease-in-out;
  z-index: 999;

	svg {
		align-self: flex-end;
		fill: ${({ theme }) => theme.black};
	}

	@media(min-width: 992px) {
		position: static;
		padding: 0;
		height: auto;
		transform: translateX(0);
		background-color: transparent;

		svg {
			display: none;
		}
	}
`;

export const NavigationList = styled.ul`
  margin-top: 48px;
  a {
    display: block;
    font-size:  ${({ theme }) => theme.size.m};
    line-height: 48px;
    font-weight: ${({ theme }) => theme.bold};
    text-align: center;
    text-transform: uppercase;
    color: ${({ theme }) => theme.black};
  }

  @media(min-width: 992px) {
    margin: 0;
    flex-direction: row;
    a {
      display: inline-block;
      position: relative;
      font-size:  ${({ theme }) => theme.size.s};
      line-height:  ${({ theme }) => theme.size.xl};
      color: ${({ theme }) => theme.white};

      &:not(:last-child) {
        margin-right: 20px;
      }

      &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        width: 0;
        height: 3px;
        background-color: ${({ theme }) => theme.white};
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