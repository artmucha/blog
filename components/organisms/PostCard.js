import styled from 'styled-components';
import Link from 'next/link';

const CardWrapper = styled.article`
  margin-bottom: 20px;
  background-color: ${({ theme }) => theme.white};
  transition: all .2s ease-in-out;

  a {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
    overflow: hidden;
    line-height: 115%;
  }

  &:hover {
    img {
      transform: scale(1.05);
    }
  }
`;

const CardCover = styled.div`
  display: flex;
  flex: 0 0 33%;
  height: 100%;
  margin-right: 15px;
  img {
    margin-top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CardTitle = styled.h3`
  margin-top: 0!important;
  font-size: ${({ theme }) => theme.size.m}!important;
  font-size: ${({ theme }) => theme.black}!important;
`;

const PostCard = ({cover, title, slug}) => (
  <CardWrapper>
    <Link href={slug}>
      <a title={title}>
        <CardCover>
          <img src={cover} alt={title} />
        </CardCover>
        <CardTitle>{title}</CardTitle>
      </a>
    </Link>
  </CardWrapper>
);

export default PostCard;
