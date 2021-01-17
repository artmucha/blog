import Layout from 'components/layouts/Layout';
import Grid from 'components/atoms/Grid';
import PageHader from 'components/atoms/PageHeader';
import Container from 'components/atoms/Container';
import ArticleCover from 'components/atoms/ArticleCover';
import PostCard from 'components/organisms/PostCard';

const Home = ({posts}) => (
  <Layout>
    <PageHader>
    {posts.slice(0,4).map((post, i) => (
      <article>
        <ArticleCover 
          index={i}
          cover={post.cover_url} 
          title={post.title.rendered} 
          link={post.link}
          categories={post.categories} 
        />
      </article>
    ))}
    </PageHader>
    <Container>
      <Grid s={1} m={3} l={4}>
      {posts.map(post => (
        <PostCard 
          cover={post.cover_url} 
          title={post.title.rendered} 
          link={post.link}
          categories={post.categories} 
          content={post.content.rendered}
        />
      ))}
      </Grid>
    </Container>
  </Layout>
);

export async function getServerSideProps() {
  const API_URL = process.env.WORDPRESS_API_URL
  
  const res = await fetch(`${API_URL}/posts`);
  const data = await res.json();
  console.log(data)

  return {
    props: { posts: data }
  }
};

export default Home;