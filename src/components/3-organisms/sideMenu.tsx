import { XCircleIcon } from '@heroicons/react/24/solid';
import { useContext } from 'react';
import { ShoppingContext } from '../../contexts';

type SideMenuProps = {
  children: JSX.Element
  title: string
};

export default function SideMenu({ children, title }: SideMenuProps) {
  const { setIsDetailOpen, setIsMyOrderOpen } = useContext(ShoppingContext);
  const closeSideMenu = () => {
    setIsMyOrderOpen(false);
    setIsDetailOpen(false);
  };
  return (
    <aside className="flex flex-col overflow-scroll fixed right-0 w-[300px] bg-white max-h-[calc(100vh-68px)] rounded-lg p-5 border border-black top-[68px]">
      <header className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-medium">{title}</h3>
        <XCircleIcon className="h-8 w-8 text-black cursor-pointer" onClick={closeSideMenu} />
      </header>
      <main>
        {children}
      </main>
    </aside>
  );
}
