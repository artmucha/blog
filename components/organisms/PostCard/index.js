import Link from 'next/link';
import Image from 'next/image';

import Badge from 'components/atoms/Badge';
import { CardWrapper, CardCover, Badges, CardTitle, CardExcerpt } from 'components/organisms/PostCard/styles';

const PostCard = ({cover, title, slug, excerpt, categories, small}) => (
  <CardWrapper>
    <Link href={slug}>
      <a title={title}>
        <CardCover>
          <Image src={cover} alt={title} layout="responsive" width="370" height="260" quality="80" />
          
            { categories ? (
              <Badges>
              { categories.edges.map(({node}) => (
                <Link key={node.slug} href={node.slug}>
                  <a title={node.name}><Badge>{node.name}</Badge></a>
                </Link>
              )) }
              </Badges>
            ) : null }
          
        </CardCover>
        <CardTitle small={small}>{title}</CardTitle>
        { excerpt && <CardExcerpt>{excerpt}</CardExcerpt> }
      </a>
    </Link>
  </CardWrapper>
);

export default PostCard;