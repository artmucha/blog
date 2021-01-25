const API_URL = process.env.WORDPRESS_API_URL;

async function fetchAPI(query, { variables } = {}) {
    const headers = { 'Content-Type': 'application/json' };
  
    const res = await fetch(API_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        query,
        variables,
      }),
    });
  
    const json = await res.json();
    if (json.errors) {
      console.error(json.errors);
      throw new Error('Failed to fetch API');
    };
    return json.data;
};

export async function getAllPosts() {
    const data = await fetchAPI(
        `query AllPosts {
          posts(first: 20, where: { orderby: { field: DATE, order: DESC}}) {
            edges {
              node {
                id
                title
                slug
                featuredImage {
                  node {
                    sourceUrl
                  }
                }
                categories {
                  edges {
                    node {
                      slug
                      name
                      categoryId
                    }
                  }
                }
              }
            }
          }
        }
        `
    );
  
    return data?.posts;
};

export async function getAllPostsWithSlug() {
    const data = await fetchAPI(
      `
      {
        posts(first: 100) {
          edges {
            node {
              slug
            }
          }
        }
      }
    `);
    return data?.posts;
};

export async function getPost(slug) {
  const data = await fetchAPI(
    `
    fragment PostFields on Post {
      title
      slug
      date
      featuredImage {
        node {
          sourceUrl
        }
      }
      categories {
        edges {
          node {
            slug
            name
            categoryId
          }
        }
      }
    }
    query PostBySlug($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        ...PostFields
        content
      }
    }
  `,
    {
      variables: {
        id: slug,
        idType: 'SLUG'
      }
    }
  );

  return data;
};
