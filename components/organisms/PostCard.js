import styled from 'styled-components';
import Link from 'next/link';

import Typography from 'components/atoms/Typography';
import Badge from 'components/atoms/Badge';

const CardWrapper = styled.article`
  height: 380px;
  position: relative;
  overflow: hidden;
  background-color: ${({ theme }) => theme.white};
`;

const Cover = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const PostCard = ({ cover ,title, link, categories, content}) => {
  
  return (
    <CardWrapper>
      <Link href={link}>
        <a>
          <Cover>
            <img src={cover} alt={title} />
              <Badge>Gry</Badge>
          </Cover>
        </a>
      </Link>
      <Typography as='h2' color='#ffffff'>
        {title}
      </Typography>
    </CardWrapper>
  );
};

export default PostCard;
