import { useRouter } from 'next/router';
import Link from 'next/link';
import styled, {css} from 'styled-components';

import Layout from 'components/layouts/Layout';
import Container from 'components/atoms/Container';
import Badge from 'components/atoms/Badge';

import { getAllPostsWithSlug, getPost } from 'lib/api';

const Article = styled.article`
  width: 100%;
  position: relative;

  p,li {
    margin-top: 15px;
    line-height: 150%;
    font-size: ${({ theme }) => theme.size.m};
    font-weight: ${({ theme }) => theme.regular};
    color: ${({ theme }) => theme.black};
  }

  img {
    width: auto;
    max-width: 100%;
    height: auto;
  }
`;

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
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

  @media(min-width: 768px) {
    position: absolute;
    height: 400px;
    z-index: -1;

    img {
      transform: scale(1.1);
      filter: blur(12px);
    }
  }

  @media(min-width: 992px) {
    height: 540px;
  }
`;

const Content = styled(Container)`

  @media(min-width: 768px) {
    padding-top: 130px;
  }

  @media(min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 50px;
    padding-top: 170px;

    & > div {
      grid-column: span 2 / auto;
    }
  }
`;

const Cover = styled.div`
  display: none;

  @media(min-width: 768px) {
    display: block;
    margin-bottom: 20px;  
  }
`;

const PostTitle = styled.h1`
  margin-top: 10px;
  margin-bottom: 15px;
  line-height: 115%;
  font-size: ${({ theme }) => theme.size.xxl};
  color: ${({ theme }) => theme.black};
`;

const DateTime = styled.time`
  line-height: 150%;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.size.xs};
  color: ${({ theme }) => theme.grey300};
`;

const Categories = styled.aside`
  margin-top: 40px;
  h4 {
    margin-bottom: 15px;
    color: ${({ theme }) => theme.grey200};
    font-size: ${({ theme }) => theme.size.xl};
  }
`;

const SinglePage = ({post}) => {
  const router = useRouter();

  if(!router.isFallback && !post?.slug) {
      return <p>Jakiś błąd!</p>;
  };

  const formDate = date => {
      const newDate = new Date(date);
      return `${newDate.getDate()}.${newDate.getMonth() + 1}.${newDate.getFullYear()}`;
  };

  return (
    <Layout>
      <Article>
        <Hero>
          <img src={post.featuredImage.node.sourceUrl} />
        </Hero>
        <Content space>
          <div>
            <Cover>
              <img src={post.featuredImage.node.sourceUrl} alt={post.title} />
            </Cover>
            {post.categories.edges.map(({node}) => (
            <Link key={node.categoryId} href={node.slug}>
              <a title={node.name}><Badge>{node.name}</Badge></a>
            </Link>))}
            <PostTitle>{post.title}</PostTitle>
            <DateTime datetime={formDate(post.date)}>Opublikowano: {formDate(post.date)}</DateTime>
            <div dangerouslySetInnerHTML={{__html: post.content}}></div>
          </div>
          <Categories>
            <h4>Więcej z tej kategorii</h4>
          </Categories>
        </Content>
      </Article>
    </Layout>
  ) 
};

export async function getStaticPaths() {
  const posts = await getAllPostsWithSlug();

  const paths = posts.edges.map(({node}) => ({
    params: { slug: node.slug },
  }));

  return { paths, fallback: true }
};

export async function getStaticProps({params}) {
    const data = await getPost(params.slug)
  
    return {
      props: { post: data.post }
    };
};

export default SinglePage;
