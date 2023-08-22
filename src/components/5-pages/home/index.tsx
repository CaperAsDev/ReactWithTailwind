/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from 'react';
import { MagnifyingGlassCircleIcon } from '@heroicons/react/24/solid';
import Card from '../../2-molecules/card';
import { getAll } from '../../../apiConnection';
import { ShoppingContext } from '../../../contexts';

function Home() {
  const {
    setProducts, products, setSearchedValue, searchedValue, productsToRender, setProductsToRender,
  } = useContext(ShoppingContext);
  const [notFinded, setNotFinded] = useState(false);

  const defineRender = () => {
    if (searchedValue.trim().length > 0) {
      const filteredProducts = products.filter(
        (p) => p.title.toLowerCase().trim().includes(searchedValue.trim().toLowerCase()),
      );
      if (filteredProducts.length > 0) {
        setProductsToRender(filteredProducts);
        setNotFinded(false);
        return;
      }
      setNotFinded(true);
    }
    setProductsToRender(products);
  };

  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchedValue(value);
  };

  useEffect(() => {
    getAll(setProducts)
      .then((res) => setProductsToRender(res));
    return () => {
      setSearchedValue('');
    };
  }, []);

  useEffect(() => {
    defineRender();
  }, [searchedValue]);

  return (
    <>
      <div className="flex items-center border border-black p-2 mb-4 rounded-lg">
        <input type="text" placeholder="SperHero pants" className="focus:outline-none w-72" value={searchedValue} onChange={handleInputChange} />
        <MagnifyingGlassCircleIcon className="w-8 h-8 cursor-pointer text-gray-400" />
      </div>
      {notFinded && (
      <div className="border-b-2 mb-2 border-red-500">
        {'We couldn\'t find any result for:'}
        <span className="font-semibold">{searchedValue}</span>
      </div>
      )}
      <div className="grid grid-cols-4 gap-4 w-full max-w-screen-lg">
        {productsToRender.map((product) => <Card data={product} key={product.id} />)}
      </div>
    </>
  );
}

export default Home;
