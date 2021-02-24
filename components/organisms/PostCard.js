import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

const CardWrapper = styled.article`
	width: 100%;
	background-color: ${({ theme }) => theme.white};
  overflow: hidden;

  a {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		overflow: hidden;
  }

  &:hover {
    img {
      transform: scale(1.1);
    }
    h3 {
      color: ${({ theme }) => theme.grey300};
    }
  }
`;

const CardCover = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  img {
    transition: all .2s ease-in-out;
    object-fit: cover;
  }
`;

const CardTitle = styled.h3`
	margin-top: 20px!important;
	line-height: 115%;
  transition: all .2s ease-in-out;
`;

const CardExcerpt = styled.p`
  margin-top: 20px!important;
  font-weight: ${({ theme }) => theme.thin}!important;
  position: relative;

  &:after {
    content: "";
    width: 100%;
    position: absolute;
    top: 30px;
    left: 0px;
    height: 100%;
    display: block;
    background: linear-gradient(rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 100%);
  }
`;

const PostCard = ({cover, title, slug, excerpt}) => (
  <CardWrapper>
    <Link href={slug}>
      <a title={title}>
        <CardCover>
          <Image src={cover} alt={title} layout="responsive" width="370" height="260" quality="80" />
        </CardCover>
        <CardTitle>{title}</CardTitle>
        <CardExcerpt>{excerpt}</CardExcerpt>
      </a>
    </Link>
  </CardWrapper>
);

export default PostCard;