import styled from 'styled-components';

import Input from 'components/atoms/Input';

import CloseIcon from '../../public/icons/close-icon.svg';

const StyledSearch = styled.form`
  display: flex;
  flex-direction: column;
  padding: 15px;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.white};
  position: fixed;
  top: 0;
  left: 0;
  transform: ${({ showSearch }) => showSearch ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform .2s ease-in-out;
  z-index: 999;

  svg {
		align-self: flex-end;
		fill: ${({ theme }) => theme.black};
	}
`;

const SearchInput = styled(Input)`
  margin-top: 48px;
  color: ${({ theme }) => theme.black};
  border-bottom: 1px solid ${({ theme }) => theme.black};

  &::placeholder {
    color: ${({ theme }) => theme.black};
  }
`;

const SearchForm = ({ showSearch, setShowSearch }) => {
	return (
		<StyledSearch showSearch={showSearch}>
			<CloseIcon onClick={() => setShowSearch(false)} />
			<SearchInput type="search" placeholder="szukaj..." />
		</StyledSearch>		
	)
};

export default SearchForm;
