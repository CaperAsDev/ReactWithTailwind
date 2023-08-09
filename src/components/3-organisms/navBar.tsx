import NavItem from '../1-atoms/navitem';

export default function NavBar() {
  const navRight = [
    { to: '/', text: 'Shopi', customClass: 'font-semibold text-lg logo' },
    { to: '/', text: 'All' },
    { to: '/clothes', text: 'Clothes' },
    { to: '/electronics', text: 'Electronics' },
    { to: '/furnitures', text: 'Furnitures' },
  ];

  const navLeft = [
    { to: undefined, text: 'caperactus@gmail.com' },
    { to: '/my_orders', text: 'My oreders' },
    { to: '/my_account', text: 'My account' },
    { to: '/sign_in', text: 'Sign in' },
    { to: undefined, text: '🛒' },
  ];
  return (
    <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light">
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
        {navLeft.map((item) => <NavItem to={item.to} text={item.text} />)}
      </ul>
    </nav>
  );
}
