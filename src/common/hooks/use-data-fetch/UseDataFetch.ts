import { useEffect, useState } from "react";

export default function useDataFetch<T>(emptyFunc: () => T, fetchFunc: () => Promise<T>): T {
  const [data, setData] = useState<T>(emptyFunc());

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const result = await fetchFunc();
        setData(result);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    };

    void fetchData();
  }, [fetchFunc]);

  return data;
}
