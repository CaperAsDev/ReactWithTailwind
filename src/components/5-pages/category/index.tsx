/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ShoppingContext } from '../../../contexts';
import Card from '../../1-atoms/card';
import { getByCategory } from '../../../apiConnection';

export default function Category() {
  const { productsToRender, setProductsToRender, products } = useContext(ShoppingContext);
  const { catName } = useParams();

  useEffect(() => {
    async function getData() {
      if (catName) {
        const data = await getByCategory(catName);
        console.log(data);
        if (data.length === 0 && (catName === "men's Clothing" || catName === "women's clothing")) {
          const filteredProducts = products.filter((item) => item.category === catName);
          setProductsToRender(filteredProducts);
        } else {
          setProductsToRender(data);
        }
      }
    }
    getData();
    console.log(productsToRender);
  }, [catName]);

  return (
    <div className="grid grid-cols-4 gap-4 w-full max-w-screen-lg">
      {productsToRender.map((product) => <Card data={product} key={product.id} />)}
    </div>
  );
}
