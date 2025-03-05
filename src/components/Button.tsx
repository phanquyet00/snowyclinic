import { ReactNode } from "react";

interface NavButtonProps {
  icon: ReactNode;
  text: string;
  onClick?: () => void;
}

const NavButton: React.FC<NavButtonProps> = ({ text, icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center font-medium hover:text-blue-500"
    >
      <span>{text}</span>
      {icon && <span className="ml-1 text-sm opacity-70">{icon}</span>}
      </button>
  );
};

export default NavButton;
