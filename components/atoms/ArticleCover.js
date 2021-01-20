import Link from 'next/link';
import styled, {css} from 'styled-components';

import Badge from 'components/atoms/Badge';

const Cover = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

const Heading = styled.header`
  width: 100%;
  padding: 15px;
  position: absolute;
  bottom: 0;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
	color: ${({ theme }) => theme.white};

  h2 {
    display: block;
    margin-top: 5px;
		line-height: 24px;
		font-size: ${({ theme }) => theme.size.l};

    a {
      color: ${({ theme }) => theme.white};
    }
  }

	@media(min-width: 992px) {
		padding: 15px 15px 25px;

			h2 {
        line-height: 38px;
        font-size: ${({ theme }) => theme.size.xxl};
      }

		${({ index }) =>
			index && index > 1 &&
			css`
				h2 {
					line-height: 22px;
					font-size: ${({ theme }) => theme.size.m};
				}
			`}
	}
`;

const ArticleCover = ({index, cover, title, slug, categories}) => {
	return (
		<Cover>
			<img src={cover} alt={title} />
			<Heading index={index}>
				{categories.map(({node}) => <Badge key={node.categoryId} color={node.categoryId}>{node.name}</Badge>)}
				<h2>
          <Link href={slug}>
            <a title={title}>
              {title}
            </a>
          </Link>
        </h2>
			</Heading>
		</Cover>
	)
};

export default ArticleCover;