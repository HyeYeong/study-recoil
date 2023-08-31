import type { AppProps } from 'next/app';
import GlobalStyle from '@src/styles/globalStyle';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '@src/styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ChakraProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ChakraProvider>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default MyApp;
