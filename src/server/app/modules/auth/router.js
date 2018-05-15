import { isAuthenticated } from '@mid';

import {
  authSingle,
  authSingleOther,
  authUpdate,
  authLocal,
  authSocial
} from './';

export const baseUrl = '/api/auth';

export const routes = [
  {
    method: 'GET',
    route: '/',
    handlers: [
      isAuthenticated,
      authSingle
    ]
  },
  {
    method: 'GET',
    route: '/:id',
    handlers: [
      isAuthenticated,
      authSingleOther
    ]
  },
  {
    method: 'PUT',
    route: '/',
    handlers: [
      isAuthenticated,
      authUpdate
    ]
  },
  {
    method: 'POST',
    route: '/local',
    handlers: [
      authLocal
    ]
  },
  {
    method: 'POST',
    route: '/local',
    handlers: [
      authSocial
    ]
  }
];
