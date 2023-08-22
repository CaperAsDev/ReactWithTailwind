import { useContext } from 'react';
import { ShoppingContext } from '../../contexts';

export default function ProductDetail() {
  const { productSelected } = useContext(ShoppingContext);
  return (
    <>
      <figure>
        <img className="w-full h-full" src={productSelected.image} alt="" />
      </figure>
      <div className="flex flex-col">
        <p className="text-2xl font-medium my-2 border-t-2">
          $
          {productSelected.price}
        </p>
        <p className="text-md font-medium">{productSelected.title}</p>
        <p className="text-sm font-light">{productSelected.description}</p>
      </div>
    </>
  );
}
