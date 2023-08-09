import { NavLink } from 'react-router-dom';

type NavItemProps = {
  text: string
  to: string | undefined
  customClass?: string
};
export default function NavItem({ text, to, customClass = '' }:NavItemProps) {
  const activeStyle = customClass.includes('logo') ? undefined : 'underline underline-offset-4';
  return (
    <li className={customClass}>
      {to ? (
        <NavLink to={to} className={({ isActive }) => (isActive ? activeStyle : undefined)}>
          {text}
        </NavLink>
      ) : <span className="text-black/60">{text}</span>}
    </li>
  );
}
