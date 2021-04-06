import Link from 'next/link';
import Image from 'next/image';

import Container from 'components/atoms/Container';
import Badge from 'components/atoms/Badge';
import {PageHeaderWrapper, PageHeaderInner, Article, CoverBackground, Content, Cover, Header, PageLatestHeader, PageLatest} from 'components/organisms/PageHeader/styles'

const PageHader = ({posts}) => (
  <PageHeaderWrapper>
    <PageHeaderInner>
      {posts.slice(0,2).map(({node}) => (
        <Link key={node.slug} href={node.slug}>
          <a title={node.title}>
            <Article>
              <CoverBackground>
                <div>
                  <Image src={node.featuredImage.node.sourceUrl} alt={node.title} layout="responsive" width="960" height="540" quality="40" />
                </div>
              </CoverBackground>
              <Content>
                <Cover>
                  <Image src={node.featuredImage.node.sourceUrl} alt={node.title} layout="responsive" width="960" height="800" quality="80" />
                </Cover>
                <Header>
                  {node.categories.edges.map(({node}) => <Link key={node.categoryId} href={`/kategoria/${node.slug}`}><a title={node.name}><Badge>{node.name}</Badge></a></Link>)}
                  <h2>{node.title}</h2>
                  <p>{node.excerpt}</p>
                </Header>
              </Content>
            </Article>
          </a>
        </Link>
      ))}
    </PageHeaderInner>
    <Container>
      <PageLatestHeader>Najnowsze</PageLatestHeader>
      {posts.slice(2,3).map(({node}) => (
        <PageLatest>
          
          <Link key={node.slug} href={node.slug}>
            <a title={node.title}>
            <span>
              {node.categories.edges.map(({node}) => <Link key={node.categoryId} href={`/kategoria/${node.slug}`}><a title={node.name}><Badge>{node.name}</Badge></a></Link>)}
              <h2>{node.title}</h2>
            </span>
            <Image src={node.featuredImage.node.sourceUrl} alt={node.title} layout="responsive" width="640" height="360" quality="80" />
            </a>
          </Link>
        </PageLatest>
      ))}
    </Container>
  </PageHeaderWrapper>
);

export default PageHader;