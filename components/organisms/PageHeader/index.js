import Link from 'next/link';
import Image from 'next/image';

import Container from 'components/atoms/Container';
import Badge from 'components/atoms/Badge';
import {PageHeaderWrapper, PageHeaderInner, Article, CoverBackground, Content, Cover, Header, PageLatestHeader, PageLatest} from 'components/organisms/PageHeader/styles'

const PageHader = ({posts}) => (
  <PageHeaderWrapper>
    <PageHeaderInner>
      {posts.slice(0,2).map(({node}) => (
        <Link href={node.slug}>
          <a title={node.title}>
            <Article>
              <CoverBackground>
                <div>
                  <img src={node.featuredImage.node.sourceUrl} />
                </div>
              </CoverBackground>
              <Content>
                <Cover>
                  <img src={node.featuredImage.node.sourceUrl} alt={node.title} />
                </Cover>
                <Header>
                  {node.categories.edges.map(({node}) => <Link key={node.categoryId} href={`/kategoria/${node.slug}`}><a title={node.name}><Badge>{node.name}</Badge></a></Link>)}
                  <h2>{node.title}</h2>
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
          
          <Link href={node.slug}>
            <a title={node.title}>
            <span>
              {node.categories.edges.map(({node}) => <Link key={node.categoryId} href={`/kategoria/${node.slug}`}><a title={node.name}><Badge>{node.name}</Badge></a></Link>)}
              <h2>{node.title}</h2>
            </span>
            <Image src={node.featuredImage.node.sourceUrl} alt={node.title} layout="responsive" width="640" height="360" quality="80" />
            <p>{node.excerpt}</p>
            </a>
          </Link>
        </PageLatest>
      ))}
    </Container>
  </PageHeaderWrapper>
);

export default PageHader;