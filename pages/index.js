import Layout from 'components/layouts/Layout';
import Grid from 'components/atoms/Grid';
import PageHader from 'components/atoms/PageHeader';
import Container from 'components/atoms/Container';
import ArticleCover from 'components/atoms/ArticleCover';
import CategoryBox from 'components/organisms/CategoryBox';

import { getAllPosts } from 'lib/api';

const Home = ({ posts: { edges } }) => {
  return (
    <Layout>
      <PageHader>
      {edges.slice(0,4).map(({ node }, i) => (
        <article key={node.id}>
          <ArticleCover 
            index={i}
            cover={node.featuredImage.node.sourceUrl} 
            title={node.title} 
            slug={node.slug}
            categories={node.categories.edges} 
          />
        </article>
      ))}
      </PageHader>
      <Container>
        <Grid s={1} m={2}>
          <CategoryBox posts={edges} />
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