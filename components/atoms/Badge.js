import styled from 'styled-components';

const Badge = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 5px 3px 3px;
  text-align: center;
  letter-spacing: 1px;
  font-size: ${({ theme }) => theme.size.xxs};
  font-weight: ${({ theme }) => theme.bold};
  color: ${({ theme }) => theme.white};
  /* background: ${({ theme, color }) => {
    if(color) return theme[color];
  }}; */
  background-color: darkblue;
`;

export default Badge;