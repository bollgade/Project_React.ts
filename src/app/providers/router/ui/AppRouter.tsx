import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeItems } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader/';

export const AppRouter = () => (
  <Routes>
    {routeItems.map(({ element, path }) => (
      <Route
        key={path}
        path={path}
        element={(
          <Suspense fallback={<PageLoader />}>
            <div className="page-wrapper">
              {element}
            </div>
          </Suspense>
        )}
      />
    ))}
  </Routes>
);
