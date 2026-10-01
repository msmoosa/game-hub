import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    // Fetch genres from the API here
    apiClient
      .get<FetchResponse<T>>(endpoint)
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        if (error instanceof CanceledError) return;
        setError(error.message);
      });

    return () => controller.abort();
  }, []);

  return { data, error, isLoading };
};

export default useData;
