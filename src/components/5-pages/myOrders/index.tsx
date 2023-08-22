import { useContext } from 'react';
import OrderCard from '../../1-atoms/orderCard';
import { ShoppingContext } from '../../../contexts';

function MyOrders() {
  const { myOrders } = useContext(ShoppingContext);
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-lg font-semibold">My orders</h3>
      {myOrders.map((order) => <OrderCard id={order.id} key={order.id} />)}
    </div>
  );
}

export default MyOrders;
