import { useRouter } from 'next/router';
import styled, { css } from 'styled-components';

import Layout from 'components/layouts/Layout';
import Container from 'components/atoms/Container';
import Grid from 'components/atoms/Grid';
import PostCard from 'components/organisms/PostCard';

import { getPostsByCategory, getAllCategoriesBySlug } from 'lib/api';

const Hero = styled.header`
  display: block;
  width: 100%;
  height: 310px;
	position: relative;
	overflow: hidden;
  opacity: .8;

  ${({ color }) =>
    color &&
    css`
      background: linear-gradient(to bottom right, ${({ theme }) => theme[color]});
  `}

  @media(min-width: 768px) {
    height: 400px;
  }

  @media(min-width: 992px) {
    height: 540px;
  }
`;

const HeroConrainer = styled(Container)`
  height: 100%;
`;

const CategoryName = styled.h1`
  line-height: 115%;
  font-size: 42px;
  color: ${({ theme }) => theme.white};

  @media(min-width: 992px) {
    font-size: 96px;
  }
`;

const CategoryPage = ({category}) => {
  const router = useRouter();

  if(!router.isFallback && !category?.slug) {
      return <p>Jakiś błąd!</p>;
  };

  return (
    <Layout title={`${category.name} | NerdzCorner`}>
      <Hero color={category.slug}>
        <HeroConrainer flex alignCenter>
          <CategoryName>{category.name}</CategoryName>
        </HeroConrainer>
      </Hero>
      <Container space>
        <Grid s={1} m={2} l={3}>
          { category.posts.edges.map(({node}) => (
            <PostCard
              key={node.slug}
              title={node.title}
              slug={`/${node.slug}`}
              categories={node.categories}
              excerpt={node.excerpt}
              cover={node.featuredImage.node.sourceUrl}
            />
          ))}
        </Grid>
      </Container>
    </Layout>
  ) 
};

export async function getStaticPaths() {
  const categories = await getAllCategoriesBySlug();

  const paths = categories.edges.map(({node}) => ({
    params: { category: node.slug },
  }));

  return { paths, fallback: true }
};

export async function getStaticProps({params}) {
    const data = await getPostsByCategory(params.category)
    
    return {
      props: { category: data.category }
    };
};

export default CategoryPage;
