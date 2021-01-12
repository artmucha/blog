import { ThemeProvider } from 'styled-components';

import { theme } from 'styles/theme';
import GlobalStyle from 'styles/GlobalStyle';

const App = ({ Component, pageProps }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
);

export default App;
