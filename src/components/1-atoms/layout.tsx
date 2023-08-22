import { useContext } from 'react';
import { ShoppingContext } from '../../contexts';
import SideMenu from '../3-organisms/sideMenu';
import ProductDetail from '../3-organisms/productDetail';
import MyOrder from '../3-organisms/myOrder';

type LayoutProps = {
  children: JSX.Element
};

export default function Layout({ children }:LayoutProps) {
  const { isDetailOpen, isMyOrderOpen } = useContext(ShoppingContext);
  return (
    <div className="flex flex-col items-center mt-20">
      {children}
      {isDetailOpen
      && (
      <SideMenu title="Detail">
        <ProductDetail />
      </SideMenu>
      )}
      {isMyOrderOpen
      && (
      <SideMenu title="My Order">
        <MyOrder />
      </SideMenu>
      )}

    </div>
  );
}
