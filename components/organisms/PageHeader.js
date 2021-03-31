import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

import Container from 'components/atoms/Container';
import Badge from 'components/atoms/Badge';

const PageHeaderWrapper = styled.div``;

const PageHeaderInner = styled.div`
  display: block;

  @media(min-width: 992px) {
		display: grid;
		grid-template-columns: 1fr 1fr;

		a:nth-of-type(2) {
			article {
				div {
					margin: 0 auto 0 0;
					header {
						margin: 0 auto 0 0;
						border-left: 1px solid ${({ theme }) => theme.grey200};
					}
				}
			}
		}
  }
`;

const Article = styled.article`
	width: 100%;
	position: relative;

	&:hover {
		img {
			transform: scale(1.05);
		}

		h2 {
			color: ${({theme}) => theme.grey300}
		}
	}

	@media(min-width: 768px) {
		padding: 40px 20px 0px;
    margin-bottom: -30px;

		&:hover {
			& > div:first-of-type {
				img {
					transform: scale(1.5);
				}
			}
		}
	}

	@media(min-width: 992px) {
		padding: 50px 0 0 0;
		margin-bottom: 0;
		
		div {
			margin: 0 0 0 auto;
		}
	}
`;

const CoverBackground = styled.div`
	display: none;

	@media (min-width: 768px) {
		display: block;
    position: absolute;
    top: 0px;
    left: 0px;
    right: auto;
    width: 100%;
    height: 400px;
    background: black;
    overflow: hidden;

		& > div {
			position: relative;
    	overflow: hidden;
			height: 100%;
			width: 100%;
			opacity: 0.7;

			img {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				object-fit: cover;
				object-position: center;
				opacity: 1;
				transition: none;
				transform: scale(1.5);
    		filter: blur(12px);
			}
		}
	}

	@media (min-width: 992px) {
		height: 420px;
	}

`;

const Cover = styled.div`
	width: 100%;
	height: 310px;
	position: relative;
	overflow: hidden;
	
	&:before {
		content: "";
		background-image: linear-gradient(-180deg, rgba(0, 0, 0, 0.4) 1%, rgba(0, 0, 0, 0) 46%);
		z-index: 1;
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0px;
		left: 0px;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform .2s linear;
	}

	@media(min-width: 768px) {
		height: 500px;
	}

	@media(min-width: 768px) {
		height: 540px;
	}
`;

const Content = styled.div`
	@media (min-width: 992px) {
		width: 100%;
		max-width: 683px;
		z-index: 1;
	}
`;

const Header = styled.header`
	width: calc(100% - 20px);
	margin: 0px auto;
	padding: 15px 20px 0px;
	position: relative;
	top: -30px;
	z-index: 2;
	background: ${({ theme }) => theme.white};

	h2 {
		margin-top: 10px;
    margin-bottom: 15px;
    transition: color .2s linear;
		line-height: 115%;
		font-size: ${({ theme }) => theme.size.xl};
		color: ${({ theme }) => theme.black};
	}

	@media(min-width: 768px) {
		top: -100px;
    width: calc(100% - 150px);
    padding: 30px 30px 0px;
	}

	@media(min-width: 992px) {
		top: -70px;
		width: calc(100% - 40px);
    padding: 50px;
		margin: 0 0 0 auto;

		h2 {
			font-size: ${({ theme }) => theme.size.xxl};
		}
	}
`;

const PageLatest = styled.article`
  margin: 0 auto 40px 0;

  h3 {
    line-height: 28px;
    margin-bottom: 20px;
    margin-top: 10px;
    font-size: ${({theme}) => theme.size.xl};
  }

  p {
    line-height: 150%;
    margin-top: 25px;
    font-weight: ${({ theme }) => theme.thin};
    font-size: ${({ theme }) => theme.size.s};

    @media(min-width: 992px) {
      margin-top: 20px;
      font-size: ${({ theme }) => theme.size.m};
    }
  }

  @media(min-width: 768px) {
    margin: 0 auto 80px 0;
    position: relative;

    & > a > span {
      width: 390px;
      padding-right: 30px;
      position: absolute;
      top: -1px;
      z-index: 1;
      background-color: ${({theme}) => theme.white};
    }
    
    h3 {
      line-height: 36px;
      margin-top: 15px;
      margin-bottom: 25px;
    }

    p {
      margin-left: calc(20% - 20px)!important;
    }

    img {
      margin-left: calc(20% - 20px)!important;
    }
  }

  @media (min-width: 992px) {

    & > a > span {
      width: 490px;
      padding-right: 68px;
      padding-bottom: 40px;
    }

    h3 {
      margin-top: 20px;
      margin-bottom: 0px;
      font-size: 36px;
      line-height: 42px;
    }

    p {
      margin-left: 0px;
      display: block;
      padding-top: 0px;
    }

    img {
      width: calc(75% - 20px)!important;
    }
  }
`;

const PageLatestHeader = styled.h2`
  font-size: 54px;
  line-height: 42px;
  margin-top: 40px;
  margin-bottom: 40px;
  color: ${({theme}) => theme.grey200};

  @media (min-width: 768px) {
    font-size: 72px;
    margin-bottom: 60px;
  }

  @media (min-width: 992px) {
    font-size: 96px;
  }
`;

const PageHader = ({posts}) => {
	return (
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
                    {node.categories.edges.map(({node}) => <Link key={node.categoryId} href={node.slug}><a title={node.name}><Badge>{node.name}</Badge></a></Link>)}
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
                {node.categories.edges.map(({node}) => <Link key={node.categoryId} href={node.slug}><a title={node.name}><Badge>{node.name}</Badge></a></Link>)}
                <h3>{node.title}</h3>
              </span>
              <Image src={node.featuredImage.node.sourceUrl} alt={node.title} layout="responsive" width="640" height="360" quality="80" />
              </a>
            </Link>
          </PageLatest>
        ))}
      </Container>
    </PageHeaderWrapper>
	)
};

export default PageHader;