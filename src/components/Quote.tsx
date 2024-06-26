import { ReactNode, useState } from "react";
import useFetch from "../hooks/useFetch";
import ButtonRestart from "./ButtonRestart";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import clsx from "clsx";

type Quote = {
  _id: string;
  content: string;
  author: string;
  tags: string[];
  authorSlug: string;
  length: number;
  dateAdded?: Date;
  dataModified?: Date;
};

export default function Quote() {
  const { isOpen } = useSelector((state: RootState) => state.details);

  const [fetchKey, setFetchKey] = useState(0);
  const {
    data: quote,
    isLoading,
    error,
  } = useFetch<Quote>(
    "https://api.quotable.io/random",
    "Failed to fetch quote",
    fetchKey
  );

  const fetchNewQuote = () => {
    setFetchKey((prevKey) => prevKey + 1);
  };

  let content: ReactNode;

  if (isLoading) {
    content = <Skeleton />;
  } else if (error) {
    content = <p className="text-red-500">{error}</p>;
  } else {
    content = (
      <div
        className={clsx("flex gap-4 items-start", {
          hidden: isOpen,
        })}
      >
        <div className="text-c-300 text-left flex flex-col gap-2">
          <p>{quote?.content}</p>
          <h5>{quote?.author}</h5>
        </div>
        <ButtonRestart onClick={fetchNewQuote} />
      </div>
    );
  }

  return <div className="text-c-300 text-left max-w-lg">{content}</div>;
}

function Skeleton() {
  return (
    <div className="w-full flex gap-4 items-start">
      <div className="w-full flex flex-col gap-2">
        <div className="h-6 rounded bg-gray-500 animate-pulse"></div>
        <div className="h-6 rounded bg-gray-500 animate-pulse"></div>
        <div className="h-6 rounded w-1/2 bg-gray-500 animate-pulse"></div>
      </div>
      <div className="w-5 h-5 aspect-auto bg-gray-500 animate-pulse rounded-full"></div>
    </div>
  );
}
