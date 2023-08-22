import { PlusIcon } from '@heroicons/react/24/solid';

type ButtonProps = {
  content: string;
  action: React.MouseEventHandler<HTMLButtonElement>;
  customClass?: string;
};

export default function Button({ content, action, customClass }: ButtonProps) {
  return (
    <button
      type="button"
      onClick={action}
      className={`hover:scale-110 absolute top-0 right-0 m-1.5 bg-white/60 text-sm rounded-full w-6 h-6 ${customClass}`}
    >
      {content === '+' ? (<PlusIcon className="w-6 h-6 text-black" />) : content}
    </button>
  );
}
