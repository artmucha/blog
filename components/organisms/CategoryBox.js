import styled from 'styled-components';

import PostCard from 'components/organisms/PostCard';
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
				cover={posts[0].cover_url} 
				title={posts[0].title.rendered} 
				link={posts[0].link}
			/>
			<div>
				{posts.slice(1,4).map(post => (
					<SmallPostCard 
						key={post.uid}
						cover={post.cover_url} 
						title={post.title.rendered} 
						link={post.link}
					/>
				))}
			</div>
		</Grid>
	</BoxWrapper>
)

export default CategoryBox;
