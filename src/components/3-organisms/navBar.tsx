import { useContext } from 'react';
import { ShoppingBagIcon } from '@heroicons/react/24/solid';
import NavItem from '../1-atoms/navitem';
import { ShoppingContext } from '../../contexts';

export default function NavBar() {
  const { cartProducts } = useContext(ShoppingContext);

  const navRight = [
    { to: '/', text: 'Shopi', customClass: 'font-semibold text-lg logo' },
    { to: '/', text: 'All' },
    { to: '/category/jewelery', text: 'Jewelery' },
    { to: '/category/electronics', text: 'Electronics' },
    { to: "/category/men's clothing", text: "men's clothing" },
    { to: "/category/women's clothing", text: "women's clothing" },
  ];

  const navLeft = [
    { to: undefined, text: 'caperactus@gmail.com' },
    { to: '/my_orders', text: 'My orders' },
    { to: '/my_account', text: 'My account' },
    { to: '/sign_in', text: 'Sign in' },
  ];
  return (
    <nav className="bg-white flex justify-between items-center fixed top-0 z-10 w-full py-5 px-8 text-sm font-light">
      <ul className="flex items-center gap-3">
        {
        navRight.map(
          (item) => (
            <NavItem
              to={item.to}
              text={item.text}
              customClass={item.customClass}
              key={item.text}
            />
          ),
        )
        }
      </ul>
      <ul className="flex items-center gap-3">
        {navLeft.map((item) => <NavItem to={item.to} text={item.text} key={item.text} />)}
        <li className="flex items-center">
          <ShoppingBagIcon className="w-6 h-6 text-black" />
          <span className="ml-1 text-lg">{cartProducts.length}</span>
        </li>
      </ul>
    </nav>
  );
}
