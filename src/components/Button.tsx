import { useState, type ReactNode } from "react";
import ArrowUp from "../assets/icon-arrow-up.svg";
import ArrowDown from "../assets/icon-arrow-down.svg";

interface Button {
  children: ReactNode;
}

export default function Button({ children }: Button) {
  const [isOpen, setIsOpen] = useState(false);

  function handleIsOpen() {
    setIsOpen((prev) => !prev);
  }

  console.log(isOpen);

  return (
    <button
      onClick={handleIsOpen}
      className="bg-c-300 p-2 pl-4 rounded-full flex items-center justify-center gap-3"
    >
      <span className="uppercase font-bold text-base opacity-50">
        {children}
      </span>
      <div className="w-10 aspect-square rounded-full bg-c-200 flex items-center justify-center">
        <img src={isOpen ? ArrowUp : ArrowDown} alt="Arrow" />
      </div>
    </button>
  );
}
