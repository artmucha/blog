import styled from 'styled-components';

const Badge = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  padding: 5px 5px 2px;
  margin-right: 5px;
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
