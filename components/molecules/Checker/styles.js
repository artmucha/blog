import styled from 'styled-components';

export const Checkbox = styled.label`
  display: inline-flex;
  width: 40px;
  height: 24px;
  position: relative;
  background-color: ${({ theme }) => theme.white};
  border: 1px solid ${({ theme }) => theme.grey300};
  border-radius: 50px;
  cursor: pointer;

  &:after {
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 0;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.grey300};
    position: absolute;
    top: 50%;
    left: 1px;
    transform: translateY(-50%);
  }
`;

export const Input = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  opacity: 0;
  visibility: hidden;
`;