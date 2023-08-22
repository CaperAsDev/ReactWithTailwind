/* eslint-disable import/no-extraneous-dependencies */
import { useRoutes, BrowserRouter } from 'react-router-dom';
import Home from '../home';
import MyAccount from '../myAccount';
import MyOrder from '../myOrder';
import MyOrders from '../myOrders';
import NotFound from '../notFound';
import SignIn from '../signIn';
import Category from '../category';
import NavBar from '../../3-organisms/navBar';
import Layout from '../../1-atoms/layout';
import { ShoppingProvider } from '../../../contexts';

const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/category/:catName', element: <Category /> },
    { path: '/my_order/:orderId', element: <MyOrder /> },
    { path: '/my_orders', element: <MyOrders /> },
    { path: '/sign_in', element: <SignIn /> },
    { path: '/my_account', element: <MyAccount /> },
    { path: '/*', element: <NotFound /> },
  ]);
  return routes;
};
function App() {
  return (
    <ShoppingProvider>
      <BrowserRouter>
        <NavBar />
        <Layout>
          <AppRoutes />
        </Layout>
      </BrowserRouter>
    </ShoppingProvider>
  );
}

export default App;
