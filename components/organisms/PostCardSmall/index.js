import Link from 'next/link';
import Image from 'next/image';

import { CardWrapper, CardCover, CardTitle } from 'components/organisms/PostCardSmall/styles';

const PostCardSmall = ({cover, title, slug}) => (
  <CardWrapper>
    <Link href={slug}>
      <a title={title}>
        <CardCover>
          <Image src={cover} alt={title} layout="responsive" width="200" height="120" quality="75" />
        </CardCover>
        <CardTitle>{title}</CardTitle>
      </a>
    </Link>
  </CardWrapper>
);

export default PostCardSmall;
