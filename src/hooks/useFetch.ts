import { useEffect, useState } from "react";

function useFetch<T>(href: string, errorMsg: string) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getData(): Promise<void> {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(href);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const resposneData: T = await response.json();

        setData(resposneData);
      } catch (error) {
        console.log(error);
        setError(errorMsg);
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, [href, errorMsg]);

  return { data, isLoading, error };
}

export default useFetch;
