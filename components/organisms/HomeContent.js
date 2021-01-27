import Link from 'next/link';
import styled from 'styled-components';

import Badge from 'components/atoms/Badge';

const ContentWrapper = styled.div`
	width: 100%;

	@media(min-width: 768px) {

		& > a {
			&:nth-last-of-type(1) {
				grid-area: one;
			}

			&:nth-last-of-type(2) {
				grid-area: two;
			}

			&:nth-last-of-type(3) {
				grid-area: three;
			}

			&:nth-last-of-type(4) {
				grid-area: four;
			}

			&:nth-last-of-type(5) {
				grid-area: five;
			}

			&:nth-last-of-type(6) {
				grid-area: six;
			}

			&:nth-last-of-type(7) {
				grid-area: seven;
			}

			&:nth-last-of-type(8) {
				grid-area: eight;
			}

			&:nth-last-of-type(9) {
				grid-area: nine;
			}
			
			&:nth-last-of-type(10) {
				grid-area: ten;
			}

			&:nth-last-of-type(11) {
				grid-area: eleven;
			}

			&:nth-last-of-type(12) {
				grid-area: twelve;
			}

			&:nth-last-of-type(13) {
				grid-area: thirteen;
			}

			&:nth-last-of-type(14) {
				grid-area: fourteen;
			}

			&:nth-last-of-type(15) {
				grid-area: fifteen;
			}

			&:nth-last-of-type(16) {
				grid-area: sixteen;
			}

			&:nth-last-of-type(17) {
				grid-area: seventeen;
			}

			&:nth-last-of-type(18) {
				grid-area: eighteen;
			}
			&:nth-last-of-type(19) {
				grid-area: nineteen;
			}
		}

		display: grid;
		grid-template-columns: 1fr 1fr;
  	grid-template-rows: auto;
		grid-column-gap: 10px;
  	grid-row-gap: 10px;
  	grid-template-areas: 
    "one two"
    "three three"
    "four four"
		"five six"
		"seven eight"
		"nine nine"
		"ten eleven"
		"twelve thirteen"
		"fourteen fourteen"
		"fifteen sixteen"
		"seventeen seventeen"
		"eighteen nineteen";

		@media(min-width: 992px) {
			grid-template-columns: 1fr 1fr 1fr;
			grid-column-gap: 20px;
			grid-row-gap: 20px;
			grid-template-areas: 
			"one one two"
			"three four five"
			"six six six"
			"seven eight eight"
			"nine nine ten"
			"nine nine eleven"
			"twelve thirteen fourteen"
			"fifteen sixteen sixteen"
			"seventeen eighteen nineteen";
		}
	}
`;

const Article = styled.article`
	height: 100%;
	position: relative;
	&:hover {
		img {
			transform: scale(1.05);
		}

		h2 {
			color: #fb8c00;
		}
	}
`;

const Cover = styled.div`
	width: 100%;
	height: 300px;
	position: relative;
	overflow: hidden;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform .2s linear;
	}

	h2 {
		color: #fb8c00;
	}

	@media(min-width: 992px) {
		min-height: 300px;
		height: 100%;
	}
`;

const Badges = styled.div`
	position: absolute;
	top: 15px;
	left: 15px;
`;

const Header = styled.header`
	padding: 15px;
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));

	h2 {
		transition: color .2s linear;
		line-height: 115%;
		font-size: ${({ theme }) => theme.size.l};
		color: ${({ theme }) => theme.white};
	}

	@media(min-width: 768px) {
		padding: 25px 15px 25px;
	}
`;

const HomeContent = ({posts}) => {
	return (
		<ContentWrapper>

			{posts.slice(3, posts.length).map(({node}) => (
				<Link href={node.slug}>
					<a title={node.title}>
						<Article>
							<Cover>
								<Badges>
									{node.categories.edges.map(({node}) => <Link key={node.categoryId} href={node.slug}><a title={node.name}><Badge>{node.name}</Badge></a></Link>)}
								</Badges>
								<img src={node.featuredImage.node.sourceUrl} alt={node.title} />
							</Cover>
							<Header>
								<h2>{node.title}</h2>
							</Header>
						</Article>
					</a>
				</Link>
			))}
		</ContentWrapper>
	)
};

export default HomeContent;