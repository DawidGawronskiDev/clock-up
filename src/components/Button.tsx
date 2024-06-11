import { type ReactNode } from "react";
import ArrowUp from "../assets/icon-arrow-up.svg";
import ArrowDown from "../assets/icon-arrow-down.svg";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

interface Button {
  onClick: () => void;
}

export default function Button({ onClick }: Button) {
  const { isOpen } = useSelector((state: RootState) => state.details);

  console.log(isOpen);

  return (
    <button
      onClick={onClick}
      className="bg-c-300 p-2 pl-4 rounded-full flex items-center justify-center gap-3"
    >
      <span className="uppercase font-bold text-base opacity-50">
        {isOpen ? "Less" : "More"}
      </span>
      <div className="w-10 aspect-square rounded-full bg-c-200 flex items-center justify-center">
        <img src={isOpen ? ArrowUp : ArrowDown} alt="Arrow" />
      </div>
    </button>
  );
}
