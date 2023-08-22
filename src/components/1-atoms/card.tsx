/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useContext } from 'react';
import { CheckIcon } from '@heroicons/react/24/solid';
import Button from './button';
import { Product } from '../../types';
import { ShoppingContext } from '../../contexts';

type CardProps = {
  data: Product
};

export default function Card({ data }:CardProps) {
  const {
    setCartProducts, setIsDetailOpen, setProductSelected, setIsMyOrderOpen, cartProducts,
  } = useContext(ShoppingContext);

  const addItem = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    setIsDetailOpen(false);
    setCartProducts((prev) => [...prev, data]);
    setIsMyOrderOpen(true);
  };

  const openDetail = () => {
    setIsMyOrderOpen(false);
    setIsDetailOpen(true);
    setProductSelected(data);
  };

  function cardIcon() {
    if (cartProducts.some((product) => product === data)) {
      return (
        <div
          className="hover:scale-110 absolute top-0 right-0 m-1.5 bg-gray-700 text-sm rounded-full w-6 h-6"
        >
          <CheckIcon className="text-green-400" />
        </div>
      );
    }
    return (
      <Button content="+" action={addItem} />
    );
  }

  return (
    <div className="bg-white cursor-pointer w-56 h-60" onClick={openDetail}>
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 px-2 py-0.5 m-1 rounded-lg bg-white/60 text-xs">{data.category}</span>
        <img src={data.image} alt={data.title} className="w-full h-full object-cover rounded-lg" />
        {cardIcon()}
      </figure>
      <p className="flex justify-between items-center">
        <span className="text-sm truncate mr-2">{data.title}</span>
        <span className="text-lg font-medium">
          $
          {data.price}
        </span>
      </p>
    </div>
  );
}
