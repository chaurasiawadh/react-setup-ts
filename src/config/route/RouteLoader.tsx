import React, { ReactElement, Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PrivateRoutes from './PrivateRoutes';
import { RootState } from '../../store';
import Main from '../../layout/Main';
import PublicRoutes from './PublicRoutes';
import Spinner from '../../shared/components/Spinner';
import { getConfirmation } from '../../utils/routeUtility';

const RouteLoader = (): ReactElement | null => {
  const isAuthenticated: boolean = useSelector(({ auth }: RootState): boolean => {
    return auth.token !== null;
  });

  return (
    <React.Fragment>
      <Router basename="/" getUserConfirmation={getConfirmation}>
        <Suspense fallback={<Spinner />}>
          {isAuthenticated ? (
            <Main>
              <PrivateRoutes />
            </Main>
          ) : <PublicRoutes />
          }
        </Suspense>
      </Router>
    </React.Fragment>
  );
};

export default RouteLoader;
