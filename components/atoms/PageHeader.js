import styled from 'styled-components';

const PageHader = styled.div`
  display: block;

	article {
		width: 100%;
		margin-bottom: 10px;

		img {
			width: 100%;
			height: auto;
			object-fit: cover;
		}
	}

  @media(min-width: 768px) {
		article:nth-last-of-type(1) {	grid-area: 1; }
		article:nth-last-of-type(2) { grid-area: 2; }
		article:nth-last-of-type(3) { grid-area: 3; }
		article:nth-last-of-type(4) { grid-area: 4; }

		display: grid;
		grid-template-areas: 
			'1 1 2 2'
			'1 1 3 3';
		grid-column-gap: 10px;
		grid-row-gap: 10px;
  }

  /* @media(min-width: 992px) {
    article:nth-last-of-type(1) { grid-area: 1 / 1 / 3 / 3; }
		article:nth-last-of-type(2) { grid-area: 1 / 3 / 2 / 5; }
		article:nth-last-of-type(3) { grid-area: 2 / 3 / 3 / 4; }
		article:nth-last-of-type(4) { grid-area: 2 / 4 / 3 / 5; }
  } */
`;

export default PageHader;
