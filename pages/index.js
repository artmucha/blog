import Layout from 'components/layouts/Layout';
import PageHader from 'components/atoms/PageHeader';

const Home = ({posts}) => (
  <Layout>
    <PageHader>
    {posts.map(post => <article><img src={post.cover_url} /></article>)}
    </PageHader>
  </Layout>
);

export async function getServerSideProps() {
  const API_URL = process.env.WORDPRESS_API_URL
  
  const res = await fetch(`${API_URL}/posts`);
  const data = await res.json();

  return {
    props: { posts: data }
  }
};

export default Home;