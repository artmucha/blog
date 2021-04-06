import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  0% {
    top: 8px;
    height: 64px;
		opacity: 1;
  }
  50%, 100% {
    top: 24px;
    height: 32px;
		opacity: .8;
  }
`;

export const PageOverlay = styled.div`
  display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(255, 255, 255, .7);
	z-index: 9999;
`;

export const Loader = styled.div`
	display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

	div {
		display: inline-block;
		position: absolute;
		left: 8px;
		width: 16px;
		background: linear-gradient(0deg, #fb8c00, #FFCA29);
		animation: ${loading} 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;

		&:nth-child(1) {
			left: 8px;
			animation-delay: -0.24s;
		}

		&:nth-child(2) {
			left: 32px;
			animation-delay: -0.12s;
		}

		&:nth-child(3) {
			left: 56px;
			animation-delay: 0;
		}
	}
`;