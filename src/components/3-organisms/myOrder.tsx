import { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ShoppingContext } from '../../contexts';
import ProductCard from '../1-atoms/productCard';
import calculateTotal from '../../utils';
import { Order } from '../../types';

export default function MyOrder() {
  const {
    cartProducts, setCartProducts, setMyOrders, setIsMyOrderOpen,
  } = useContext(ShoppingContext);
  const [total, setTotal] = useState(0);

  const order :Order = {
    date: new Date(),
    price: total,
    products: cartProducts,
    id: crypto.randomUUID(),
  };
  const handleOrder = () => {
    setMyOrders((prev) => [...prev, order]);
    setCartProducts([]);
    setIsMyOrderOpen(false);
  };

  useEffect(() => {
    setTotal(calculateTotal(cartProducts));
  }, [cartProducts]);

  return (
    <div className="flex flex-col gap-2.5">
      {cartProducts.map((product) => (
        <ProductCard item={product} key={product.id} />
      ))}
      <div className="flex justify-between border-t-2 mt-1 pt-1">
        <span className="font-medium">Total: </span>
        <span className="font-semibold text-lg">
          $
          {total}
        </span>
      </div>
      <NavLink to={`/my_order/${order.id}`}>
        <button className="p-3 bg-black rounded-lg text-white w-full" type="button" onClick={handleOrder}>CheckOut</button>
      </NavLink>
    </div>
  );
}
