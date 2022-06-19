import { useEffect, useState } from "react";

export default function useDataFetch<T>(emptyFunction: () => T, fetchFunction: () => Promise<T>): T {
  const [data, setData] = useState<T>(emptyFunction());

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const result = await fetchFunction();
        setData(result);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    };

    void fetchData();
  }, [fetchFunction]);

  return data;
}
