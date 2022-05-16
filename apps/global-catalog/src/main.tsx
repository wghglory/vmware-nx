import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import './style.scss';

import { AppProviders } from './app/core/context';
import { i18nClient } from '@vmware/i18n';

async function prepare() {
  await i18nClient.coreService.loadI18nData();

  // 2. jest testing will start Server instead of worker (test/jest.setup.ts)
  // 3. cypress currently runs below worker, the issue is with worker started, interceptor won't work...
  // 4. if not hoping to run worker, do this, "test:e2e:dev": "npm run dev -- --mode=test & npm run cy:open" will execute `vite --mode=test` and process.env.NODE_ENV='test'
  return Promise.resolve();
}

prepare().then(() => {
  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );
  root.render(
    <StrictMode>
      <AppProviders>
        <App />
      </AppProviders>
    </StrictMode>
  );
});
