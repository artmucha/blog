import Layout from 'components/layouts/Layout';
import PageHader from 'components/organisms/PageHeader';
import Container from 'components/atoms/Container';
import Grid from 'components/atoms/Grid';
import PostCard from 'components/organisms/PostCard';

import { getAllPosts } from 'lib/api';

const Home = ({ posts: { edges } }) => {
  return (
    <Layout>
      <PageHader posts={edges} />
      <Container>
        <Grid s={1} m={2} l={3}>
          { edges.slice(3, 9).map(({node}) => (
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
          { edges.slice(9, edges.length).map(({node}) => (
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

export async function getStaticProps() {
  const data = await getAllPosts();
  return {
    props: { posts: data }
  };
};

export default Home;