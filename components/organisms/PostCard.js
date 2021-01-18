import styled from 'styled-components';
import Link from 'next/link';

import Typography from 'components/atoms/Typography';

const CardWrapper = styled.article`
  background-color: ${({ theme }) => theme.white};
  margin-top: ${({ theme }) => theme.size.xl};
`;

const Cover = styled.div`
  display: flex;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const PostTitle = styled(Typography)`
  margin-top: ${({ theme }) => theme.size.s};
  font-size: ${({ theme }) => theme.size.m};
  line-height: ${({ theme }) => theme.size.l};

  a {
    color: ${({ theme }) => theme.black};
  }
`;

const PostCard = ({cover, title, link}) => {
  
  return (
    <CardWrapper>
      <Link href={link}>
        <a title={title}>
          <Cover>
            <img src={cover} alt={title} />
          </Cover>
        </a>
      </Link>
      <PostTitle as='h3'>
        <Link href={link}>
          <a title={title}>
          {title}
          </a>
        </Link>
      </PostTitle>
    </CardWrapper>
  );
};

export default PostCard;
