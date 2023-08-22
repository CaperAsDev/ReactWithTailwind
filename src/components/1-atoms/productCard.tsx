import { useContext } from 'react';
import { XCircleIcon } from '@heroicons/react/24/solid';
import { Product } from '../../types';
import { ShoppingContext } from '../../contexts';

type ProductCardProps = {
  item: Product
  deletable?: boolean
};
export default function ProductCard({ item, deletable = true }: ProductCardProps) {
  const { setCartProducts } = useContext(ShoppingContext);

  const removeFromCart = () => {
    setCartProducts((idList) => idList.filter((prod) => prod.id !== item.id));
  };
  return (
    <div className="relative w-full flex items-center border border-black rounded-lg p-2 h-[100px]">
      <figure className="h-full w-[100px]">
        <img className="h-full w-full object-contain " src={item.image} alt={item.title} />
      </figure>
      <div className="h-full flex flex-col items-start justify-evenly truncate ml-4">
        <span className="truncate w-32">{item.title}</span>
        <span className="font-semibold text-lg">{item.price}</span>
      </div>
      {deletable && (
        <XCircleIcon
          className="h-6 w-6 text-gray-500 cursor-pointer absolute rounded-full bg-white top-[-10px] left-[-10px]"
          onClick={removeFromCart}
        />
      )}
    </div>
  );
}
