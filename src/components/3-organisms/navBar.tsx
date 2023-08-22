import { useContext } from 'react';
import { ShoppingBagIcon } from '@heroicons/react/24/solid';
import NavItem from '../1-atoms/navitem';
import { ShoppingContext } from '../../contexts';

export default function NavBar() {
  const { cartProducts } = useContext(ShoppingContext);

  const navRight = [
    { to: '/ReactWithTailwind/', text: 'Shopi', customClass: 'font-semibold text-lg logo' },
    { to: '/ReactWithTailwind/', text: 'All' },
    { to: '/ReactWithTailwind/category/jewelery', text: 'Jewelery' },
    { to: '/ReactWithTailwind/category/electronics', text: 'Electronics' },
    { to: "/ReactWithTailwind/category/men's clothing", text: "men's clothing" },
    { to: "/ReactWithTailwind/category/women's clothing", text: "women's clothing" },
  ];

  const navLeft = [
    { to: undefined, text: 'caperactus@gmail.com' },
    { to: '/ReactWithTailwind/my_orders', text: 'My orders' },
    { to: '/ReactWithTailwind/my_account', text: 'My account' },
    { to: '/ReactWithTailwind/sign_in', text: 'Sign in' },
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
