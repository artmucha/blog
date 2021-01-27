import Layout from 'components/layouts/Layout';
import PageHader from 'components/organisms/PageHeader';
import Container from 'components/atoms/Container';
import HomeContent from 'components/organisms/HomeContent';

import { getAllPosts } from 'lib/api';

const Home = ({ posts: { edges } }) => {
  return (
    <Layout>
      <PageHader posts={edges} />
      <Container>
        <HomeContent posts={edges} />
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