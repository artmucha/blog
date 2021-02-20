import styled from 'styled-components';

const Badge = styled.span`
  display: inline-block;
  text-transform: uppercase;
  pointer-events: all;
  margin-right: 15px;
  background-color: transparent;
  line-height: 150%;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.grey300};
  font-size: ${({ theme }) => theme.size.xxs};
  font-weight: ${({ theme }) => theme.regular};
`;

export default Badge;
