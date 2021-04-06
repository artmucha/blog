import { PageOverlay, Loader } from 'components/molecules/DataLoader/styles';

const DataLoader = () => (
	<PageOverlay>
		<Loader>
			<div></div>
			<div></div>
			<div></div>
		</Loader>
	</PageOverlay>
);

export default DataLoader;
