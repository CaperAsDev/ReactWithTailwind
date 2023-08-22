import { useContext } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import { ShoppingContext } from '../../../contexts';
import OrderCard from '../../1-atoms/productCard';

function MyOrder() {
  const { orderId } = useParams();
  const { myOrders } = useContext(ShoppingContext);
  const myOrder = myOrders.find((x) => x.id === orderId);

  if (myOrder) {
    return (
      <div className="flex flex-col gap-2 justify-center items-center">
        <div className="flex items-center">
          <NavLink to="/my_orders">
            <ChevronLeftIcon className="w-5 h-5" />
          </NavLink>
          <h3 className="text-lg font-semibold">My Order</h3>
        </div>
        <div className="flex flex-col gap-2 ">
          {myOrder.products.map((product) => (
            <OrderCard item={product} key={product.id} deletable={false} />
          ))}
        </div>
      </div>
    );
  }
}

export default MyOrder;
