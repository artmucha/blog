import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: ${({ theme, small }) =>
  small ? theme.size.xs : theme.size.s};
  font-weight: ${({ theme }) => theme.regular};
  color: ${({ theme, color }) => (color ? color : theme.black)};
  line-height: 150%;
`;

export default Paragraph;
