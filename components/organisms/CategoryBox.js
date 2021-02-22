import styled from 'styled-components';

import PostCard from 'components/organisms/PostCardSmall';
import SmallPostCard from 'components/organisms/SmallPostCard';
import Grid from 'components/atoms/Grid';

const BoxWrapper = styled.div`
	display: block;
	width: 100%;
`;

const CategorisHeader = styled.h4`
	display: flex;
	justify-content: space-between;
	border-bottom: 2px solid darkblue;
	font-size: ${({ theme }) => theme.size.s};
	line-height: ${({ theme }) => theme.size.s};
`;

const CategoryTitle = styled.span`
	display: inline-block;
	margin-bottom: -1px;
	line-height: ${({ theme }) => theme.size.m};
  padding: 6px 10px 1px;
	text-transform: uppercase;
	letter-spacing: 1px;
	color: ${({ theme }) => theme.white};
	background-color: darkblue;

`;

const CategoriesList = styled.ul`
	list-style-type: none;
	color: ${({ theme }) => theme.grey300};
	display: flex;
	justify-content: space-between;
	align-items: center;

	li {
		margin-left: ${({ theme }) => theme.size.xxs};
	}
`;

const CategoryBox = ({posts}) => (
  <BoxWrapper>
		<CategorisHeader>
			<CategoryTitle>Gry</CategoryTitle>
			<CategoriesList>
				<li>Playstation</li>
				<li>Xbox</li>
				<li>Nintendo</li>
				<li>PC</li>
			</CategoriesList>
		</CategorisHeader>
		<Grid s={1} m={2}>
			<PostCard 
				cover={posts[0].node.featuredImage.node.sourceUrl} 
				title={posts[0].node.title} 
				slug={posts[0].node.slug}
			/>
			<div>
				{posts.slice(1,4).map(({node}) => (
					<SmallPostCard 
						key={node.id}
						cover={node.featuredImage.node.sourceUrl} 
						title={node.title} 
						slug={node.slug}
					/>
				))}
			</div>
		</Grid>
	</BoxWrapper>
)

export default CategoryBox;
