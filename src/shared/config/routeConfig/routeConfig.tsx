import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { RouteProps } from 'react-router-dom';

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: '/',
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: '/about',
    element: <AboutPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: '*',
    element: <NotFoundPage />,
  },
};

export const routeConfig
  : RouteProps[] = Object.values(RoutePath).map((val) => val);
