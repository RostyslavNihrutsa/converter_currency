import { useState, useEffect } from "react";

function useFetch(url) {
  const [status, setStatus] = useState({
    data: null,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setStatus({ ...status, data, isLoading: false });
      })
      .catch((error) => {
        setStatus({ ...status, error, isLoading: false });
      });
  }, [url]);

  return { ...status };
}

export default useFetch;
