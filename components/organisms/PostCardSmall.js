import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

const CardWrapper = styled.article`
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
      transform: scale(1.1);
    }
  }
`;

const CardCover = styled.div`
  display: block;
  min-width: 105px;
  max-width: 175px;
  height: 100%;
  margin-right: 15px;
  img {
    transition: all .2s ease-in-out;
    object-fit: cover;
  }

  @media(min-width: 992px) {
    min-width: 145px;
    max-width: 195px;
  }
`;

const CardTitle = styled.h3`
  margin-top: 0!important;
  font-size: ${({ theme }) => theme.size.m}!important;
  font-size: ${({ theme }) => theme.black}!important;
`;

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
