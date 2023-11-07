import { Suspense, lazy, useEffect } from 'react';
import Loader from './Loader/Loader';
import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import { useDispatch } from 'react-redux';
import { refreshThunk } from 'redux/authSlice';
import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';

const HomePage = lazy(() => import('pages/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));

const appRoutes = [
  { path: '/', element: <HomePage /> },
  {
    path: '/register',
    element: (
      <RestrictedRoute>
        <RegisterPage />
      </RestrictedRoute>
    ),
  },
  {
    path: '/login',
    element: (
      <RestrictedRoute>
        <LoginPage />
      </RestrictedRoute>
    ),
  },
  {
    path: '/contacts',
    element: (
      <PrivateRoute>
        <ContactsPage />
      </PrivateRoute>
    ),
  },
];

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    <div>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          {appRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
