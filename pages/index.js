import Layout from 'components/layouts/Layout';

const Home = ({posts}) => (
  <Layout>
    <div>{posts.map(post => <h2>{post.title.rendered}</h2>)}</div>
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