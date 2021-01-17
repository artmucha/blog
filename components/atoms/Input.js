import styled from 'styled-components';

const Input = styled.input`
  display: block;
	width: 100%;
	height: 48px;
	background: transparent;
	border: 0;
	border-bottom: 1px solid ${({ theme }) => theme.white};
	color: ${({ theme }) => theme.white};
	font-weight: ${({ theme }) => theme.bold};
	font-size:  ${({ theme }) => theme.size.m};
	outline: 0;

	&::placeholder {
    color: ${({ theme }) => theme.white};
  }
`;

export default Input;
