import { useRouter } from 'next/router';
import Image from 'next/image';
import styled from 'styled-components';

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
	
	&:before {
		content: "";
		background-image: linear-gradient(-180deg, rgba(0, 0, 0, 0.4) 1%, rgba(0, 0, 0, 0) 46%);
		z-index: 1;
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0px;
		left: 0px;
	}

	img {
		object-fit: cover;
    transform: scale(1.1);
    filter: blur(12px);
    z-index: -1;
	}

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
    <Layout title={`${category.name} | Geek's Corner`}>
      <Hero>
        <Image src={category.description} alt={category.name} layout="fill" quality="50" />
        <HeroConrainer flex alignCenter>
          <CategoryName>{category.name}</CategoryName>
        </HeroConrainer>
      </Hero>
      <Container space>
        <Grid s={1} m={2} l={3}>
          { category.posts.edges.slice(0,6).map(({node}) => (
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
      <Container space>
        <Grid s={2} m={3} l={4}>
          { category.posts.edges.slice(7,19).map(({node}) => (
            <PostCard
              small
              key={node.slug}
              title={node.title}
              slug={`/${node.slug}`}
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
    const data = await getPostsByCategory(params.category, 10)
    
    return {
      props: { category: data.category }
    };
};

export default CategoryPage;
