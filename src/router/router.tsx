import { lazy } from 'react';
import { Navigate } from 'react-router';

//Auth
const Login = lazy(() => import('src/content/pages/Login'));

const routes = [
  {
    path: '/',
    children: [
      {
        path: '',
        element: <Navigate to={"/login"} />
      },
      {
        path: '*/',
        element: <Navigate to={"/login"} />
      },
    ]
  },
  {
    path: 'login',
    children: [
      {
        path: '',
        element: <Login />
      }
    ]
  }
];

export default routes;
