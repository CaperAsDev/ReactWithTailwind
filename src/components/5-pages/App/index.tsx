/* eslint-disable import/no-extraneous-dependencies */
import { useRoutes, BrowserRouter } from 'react-router-dom';
import Home from '../home';
import MyAccount from '../myAccount';
import MyOrder from '../myOrder';
import MyOrders from '../myOrders';
import NotFound from '../notFound';
import SignIn from '../signIn';
import NavBar from '../../3-organisms/navBar';

const AppRoutes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/my_order',
      element: <MyOrder />,
    },
    {
      path: '/my_orders',
      element: <MyOrders />,
    },
    {
      path: '/sign_in',
      element: <SignIn />,
    },
    {
      path: '/my_account',
      element: <MyAccount />,
    },
    {
      path: '/*',
      element: <NotFound />,
    },
  ]);
  return routes;
};
function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <NavBar />
    </BrowserRouter>
  );
}

export default App;
