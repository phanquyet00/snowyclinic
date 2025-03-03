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
        className="flex items-center space-x-1 text-gray-700 font-medium hover:text-blue-500"
      >
        {text}
        {icon}
      </button>
    );
  };
  
  export default NavButton;
  