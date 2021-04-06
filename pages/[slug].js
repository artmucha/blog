import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

import Layout from 'components/layouts/Layout';
import Container from 'components/atoms/Container';
import Grid from 'components/atoms/Grid';
import Badge from 'components/atoms/Badge';
import PostCardSmall from 'components/organisms/PostCardSmall';
import PostCard from 'components/organisms/PostCard';

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
    margin-top: 15px;
  }

  @media(min-width: 768px) {
    p, ul {
      margin-top: 30px;
    }

    img {
      margin-top: 30px;
    }
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

  h2, h3 {
    margin-top: 15px;
    font-size: ${({ theme }) => theme.size.l};
  }

  @media(min-width: 768px) {
    padding-top: 130px;

    h2, h3 {
      margin-top: 50px;
    }
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

    img {
      object-fit: cover;
    }
  }

  @media(min-width: 992px) {
    margin-bottom: 50px;  
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

  & > div,
  & > span {
    display: grid;
    margin-bottom: 40px;
  } 

  h4 {
    margin-bottom: 15px;
    color: ${({ theme }) => theme.grey200};
    font-size: ${({ theme }) => theme.size.xl};
  }

  @media(min-width: 992px) {
    & > span {
      display: block;
      width: 100%;
      height: 315px;
      align-content: space-evenly;
      margin-bottom: 105px;
    } 
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
    <Layout title={`${post.title} | NerdzCorner`}>
      <Article>
        <Hero>
          <Image src={post.featuredImage.node.sourceUrl} layout="fill" quality="50" />
        </Hero>
        <Content space>
          <div>
            <Cover>
              <Image src={post.featuredImage.node.sourceUrl} alt={post.title} width="750" height="500" layout="responsive" quality="80" />
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
            <span></span>

            {post.tags.edges.length ? ( 
              <>
                <h4>Przeczytaj również</h4>
                <Grid s={1} m={2} l={1}>
                  {post.tags.edges[0].node.posts.edges.slice(0,4).map(({node}) => (
                    <PostCardSmall 
                      key={node.slug}
                      cover={node.featuredImage.node.sourceUrl}
                      title={node.title}
                      slug={node.slug}
                    />
                  ))}
                </Grid>
              </>
            ) : null }

            {post.categories.edges.length ? ( 
              <>
                <h4>W tej kategorii</h4>
                <Grid s={1} m={2} l={1}>
                  {post.categories.edges[0].node.posts.edges.slice(0,4).map(({node}) => (
                    <PostCard
                      key={node.slug}
                      title={node.title}
                      slug={node.slug}
                      excerpt={node.excerpt}
                      cover={node.featuredImage.node.sourceUrl}
                    />
                  ))}
                </Grid>
              </>
            ) : null }
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
