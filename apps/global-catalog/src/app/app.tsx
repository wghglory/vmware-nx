import React, { Suspense } from 'react';

import { ClarityIcons, userIcon } from '@cds/core/icon';

import { Route, Routes } from 'react-router-dom';

import Layout from './core/components/Layout';
import RequireAuth from './core/components/RequireAuth';
import { RoutePath } from '@vmware/constants';

import HomePage from './pages/HomePage';
import NoAccessPage from './pages/NoAccessPage';
import NotFoundPage from './pages/NotFoundPage';
import OperatorPage from './pages/OperatorPage';
import ProviderPage from './pages/ProviderPage';
import PublicPage from './pages/PublicPage';
import SignInPage from './pages/SignInPage';
import TenantPage from './pages/TenantPage';
import PlaygroundPage from './pages/PlaygroundPage';

ClarityIcons.addIcons(userIcon);

export const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={RoutePath.root} element={<HomePage />} />
        <Route path={RoutePath.public} element={<PublicPage />} />

        <Route
          path={RoutePath.provider}
          element={
            <RequireAuth roles={['PROVIDER_ADMIN']}>
              <ProviderPage />
            </RequireAuth>
          }
        />
        <Route
          path={RoutePath.tenant}
          element={
            <RequireAuth roles={['TENANT_USER', 'TENANT_ADMIN']}>
              <TenantPage />
            </RequireAuth>
          }
        />
        <Route
          path="/play"
          element={
            <Suspense fallback={<div className="h-screen"></div>}>
              <PlaygroundPage />
            </Suspense>
          }
        />

        <Route path={RoutePath.noAccess} element={<NoAccessPage />} />
        <Route path={RoutePath.notFound} element={<NotFoundPage />} />
      </Route>

      <Route path={RoutePath.signIn} element={<SignInPage />} />
    </Routes>
  );
};

export default App;
