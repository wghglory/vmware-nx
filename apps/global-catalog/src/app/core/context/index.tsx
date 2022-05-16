import {QueryClient, QueryClientProvider} from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools';
import {BrowserRouter} from 'react-router-dom';

import {AuthProvider} from './AuthContext';
import {ThemeProvider} from './ThemeContext';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // useErrorBoundary: true,
      refetchOnWindowFocus: false,
      retry: false,
      // retry(failureCount, error: any) {
      //   // retry once
      //   if (failureCount < 1) return true;
      //   else return false;
      // },
    },
  },
});

function AppProviders({children}: {children: React.ReactNode}) {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </AuthProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export {AppProviders};
