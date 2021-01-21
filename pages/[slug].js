import { useRouter } from 'next/router';
import styled from 'styled-components';

import Layout from 'components/layouts/Layout';
import Container from 'components/atoms/Container';
import Typography from 'components/atoms/Typography';
import Badge from 'components/atoms/Badge';
import Paragraph from 'components/atoms/Paragraph';

import { getAllPostsWithSlug, getPost } from 'lib/api';

const Article = styled.article`
  overflow-x: hidden;

  h2 {
    margin: 24px 0;
    font-size: ${({ theme }) => theme.size.xl};
    line-height:  ${({ theme }) => theme.size.xxl};
  }

  p {
    line-height:  ${({ theme }) => theme.size.l};
  }

  img {
    width: auto;
    max-width: 100%;
  }

`;

const Hero = styled.header`
  width: 100%;
  height: 70vh;
	background-color: ${({ theme }) => theme.white};
  position: relative;
  margin-left: 10px;
  border-bottom-left-radius: 4em;
  clip-path: polygon(0 0,100% 0,100% calc(100% - 1em),4em 100%,0 100%);
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (min-width: 992px) {
    margin-left: 50px;
    border-bottom-left-radius: 6.25em;
    clip-path: polygon(0 0,100% 0,100% calc(100% - 2em),6.25em 100%,0 100%);
  }
`;

const Heading = styled.div`
  width: 100%;
  padding: 10px 10px 20px;
  position: absolute;
  bottom: 0;
  box-sizing: border-box;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));

  * {
    color: ${({ theme }) => theme.white};
  }

  & > div {
    max-width: 1300px;
  }

  @media (min-width: 768px) {
    padding: 15px 15px 25px;
  }
`;

const PageTitle = styled(Typography)`
  font-size: ${({ theme }) => theme.size.xl};
  line-height: ${({ theme }) => theme.size.xxl};
  display: block;
  margin: 5px 0;
  max-width: 600px;

  @media (min-width: 992px) {
    font-size: ${({ theme }) => theme.size.xxl};
    line-height: 38px;
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
          <img src={post.featuredImage.node.sourceUrl} alt={post.title} />
            <Heading>
              <Container>
                <Badge>{post.categories.edges[0].node.name}</Badge>
                <PageTitle as="h1">{post.title}</PageTitle>
                <Paragraph small>Opublikowane: {formDate(post.date)}</Paragraph>
              </Container>
            </Heading>
        </Hero>
        <Container space>
          <div dangerouslySetInnerHTML={{__html: post.content}}></div>
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
