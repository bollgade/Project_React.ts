import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import React from 'react';
import { RouteProps } from 'react-router-dom';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg';

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',

  // last-one
  NOT_FOUND = 'not_found',
}

export interface RouteLink {
  text: string;
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export type RouteItem = RouteProps & {
  link?: RouteLink;
}

export const RouteElements: Record<AppRoutes, RouteItem> = {
  [AppRoutes.MAIN]: {
    path: '/',
    element: <MainPage />,
    link: {
      Icon: MainIcon,
      text: 'Main',
    },
  },
  [AppRoutes.ABOUT]: {
    path: '/about',
    element: <AboutPage />,
    link: {
      Icon: AboutIcon,
      text: 'About',
    },
  },
  [AppRoutes.PROFILE]: {
    path: '/profile',
    element: <ProfilePage />,
    link: {
      Icon: ProfileIcon,
      text: 'Profile',
    },
  },

  // last-one
  [AppRoutes.NOT_FOUND]: {
    path: '*',
    element: <NotFoundPage />,
  },
};

export const routeItems:
RouteItem[] = Object.values(RouteElements).map((val) => val);
