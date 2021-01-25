import Layout from 'components/layouts/Layout';
import Grid from 'components/atoms/Grid';
import PageHader from 'components/atoms/PageHeader';
import Container from 'components/atoms/Container';
import CategoryBox from 'components/organisms/CategoryBox';

import { getAllPosts } from 'lib/api';

const Home = ({ posts: { edges } }) => {
  return (
    <Layout>
      <PageHader posts={edges} />
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