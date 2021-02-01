import { useRouter } from 'next/router';
import Link from 'next/link';
import styled, {css} from 'styled-components';

import Layout from 'components/layouts/Layout';
import Container from 'components/atoms/Container';
import Badge from 'components/atoms/Badge';

import { getAllPostsWithSlug, getPost } from 'lib/api';

const Article = styled.article`
  width: 100%;

  p,li {
    margin-bottom: 15px;
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
  width: 100%;
  height: 310px;
  position: relative;

  &:before {
    content: "";
    background-image: linear-gradient(-180deg,rgba(0,0,0,0.4) 1%,rgba(0,0,0,0) 46%);
    z-index: 1;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
  }

  @media(min-width: 768px) {
    height: auto;
    padding: 120px 35px 0px;
  }

  @media(min-width: 992px) {
    padding: 150px 35px 0px;
  }
`;

const BackgroundCover = styled.div`
  display: none;

  @media (min-width: 768px) {
	  display: block;
    position: absolute;
    top: 0px;
    left: 0px;
    right: auto;
    width: 100%;
    height: 400px;
    background: black;
    overflow: hidden;

		& > div {
			height: 100%;
			width: 100%;

			img {
        width: 100%;
				transform: scale(1.5);
    		filter: blur(12px);
			}
		}
	}

	@media (min-width: 992px) {
		height: 520px;
	}
`;

const Cover = styled.div`

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  @media(min-width: 768px) {
    img {
      position: relative;
      height: 480px;
    }
  }

  @media(min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 50px;
    grid-row-gap: 50px;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding-left: 15px;
    padding-right: 15px;

    img {
      grid-column: span 2 / auto;
      position: relative;
      height: 550px;
    }
  }
`;

const PostTitle = styled.h1`
  margin-top: 10px;
  margin-bottom: 15px;
  line-height: 115%;
  font-size: ${({ theme }) => theme.size.xxl};
  font-weight: ${({ theme }) => theme.bold};
  color: ${({ theme }) => theme.black};
`;

const DateTime = styled.time`
  font-size: ${({ theme }) => theme.size.xs};
  font-weight: ${({ theme }) => theme.bold};
  color: ${({ theme }) => theme.grey300};
  line-height: 150%;
`;

const Content = styled.div`
  @media(min-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }

  @media(min-width: 992px) {
    padding: 0;

    ${({ grid }) =>
    grid &&
    css`
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-column-gap: 50px;
    `}

    & > div {
      grid-column: span 2 / auto;
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
    <Layout>
      <Article>
        <Hero>
          <BackgroundCover>
            <div>
              <img src={post.featuredImage.node.sourceUrl} />
            </div>
          </BackgroundCover>
          <Cover>
            <img src={post.featuredImage.node.sourceUrl} alt={post.title} />
          </Cover>
        </Hero>
        <Container space>
          <Content grid>
            <div>
              {post.categories.edges.map(({node}) => <Link key={node.categoryId} href={node.slug}><a title={node.name}><Badge>{node.name}</Badge></a></Link>)}
              
              <PostTitle>{post.title}</PostTitle>
              <DateTime datetime={formDate(post.date)}>Opublikowane: {formDate(post.date)}</DateTime>
            </div>
            <div></div>
          </Content>
        </Container>
        <Container space>
          <Content grid>
            <div dangerouslySetInnerHTML={{__html: post.content}}></div>
            <aside></aside>
          </Content>
        </Container>
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
