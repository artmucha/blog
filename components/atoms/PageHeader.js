import styled from 'styled-components';

const PageHader = styled.div`
  display: grid;
	grid-row-gap: 5px;
	margin-bottom: 24px;

  @media(min-width: 768px) {
		article:nth-of-type(1) { grid-area: first; }
		article:nth-of-type(2) { grid-area: second; }
		article:nth-of-type(3) { grid-area: third; }
		article:nth-of-type(4) { grid-area: fourth; }

		grid-template-columns: 1fr 1fr;
  	grid-template-rows: auto;
		grid-column-gap: 5px;
		grid-template-areas: 
			'first first'
			'second second'
			'third fourth';
  }

  @media(min-width: 992px) {
		width: 100%;
		max-width: 1400px;
		margin: 24px auto 48px auto;
		padding-left: 15px;
		padding-right: 15px;
		grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-areas: 
			'first first second second'
			'first first third fourth';
  }
`;

export default PageHader;
