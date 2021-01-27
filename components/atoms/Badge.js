import styled from 'styled-components';

const Badge = styled.span`
  display: inline-block;
  text-transform: uppercase;
  pointer-events: all;
  padding: 6px 10px 3px 10px;
  margin-right: 2px;
  color: ${({ theme }) => theme.black};
  font-size: ${({ theme }) => theme.size.xxs};
  background-color: ${({ theme }) => theme.white};
`;

export default Badge;
