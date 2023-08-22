import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import {
  ChevronRightIcon, ShoppingBagIcon, CalendarDaysIcon,
} from '@heroicons/react/24/solid';
import { ShoppingContext } from '../../contexts';

type OrderCardProps = {
  id: `${string}-${string}-${string}-${string}-${string}`
};

export default function OrderCard({ id }: OrderCardProps) {
  const { myOrders } = useContext(ShoppingContext);
  const myOrder = myOrders.find((items) => items.id === id);

  if (myOrder) {
    const dateString = myOrder.date.toLocaleDateString();

    return (
      <div className="flex items-center">
        <div className="border border-black mt-2 rounded-lg p-2 w-80 flex justify-between items-center gap-2">
          <div className="flex flex-col gap-3">
            <p className="text-sm text-gray-500 flex gap-1">
              <CalendarDaysIcon className="w-5 h-5" />
              {dateString}
            </p>
            <p className="flex justify-between items-center">
              <ShoppingBagIcon className="w-5 h-5 mr-1" />
              <span>
                {myOrder.products.length}
                {' '}
                Products
              </span>
            </p>
          </div>
          <span className="font-semibold text-lg">
            $
            {' '}
            {myOrder.price}
          </span>
        </div>
        <NavLink to={`/my_order/${id}`}>
          <ChevronRightIcon className="hover:scale-110  w-6 h-7" />
        </NavLink>
      </div>
    );
  }
}
