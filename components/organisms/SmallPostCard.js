import styled from 'styled-components';
import Link from 'next/link';

import Typography from 'components/atoms/Typography';

const CardWrapper = styled.article`
	display: flex;
  background-color: ${({ theme }) => theme.white};
  margin-top: ${({ theme }) => theme.size.xl};
`;

const Cover = styled.div`
  flex: 0 0 30%;
  width: 30%;
	margin-right: ${({ theme }) => theme.size.s};
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const PostTitle = styled(Typography)`
	width: 100%;
  font-size: ${({ theme }) => theme.size.s};
  line-height: ${({ theme }) => theme.size.m};

  a {
    color: ${({ theme }) => theme.black};
  }
`;

const SmallPostCard = ({cover, title, link}) => {
  
  return (
    <CardWrapper>
			<Cover>
				<img src={cover} alt={title} />
			</Cover>
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

export default SmallPostCard;
