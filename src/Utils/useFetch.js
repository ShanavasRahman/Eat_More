import { useEffect, useState } from "react";
import { Data_Api } from "./constants";

const useFetchData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(Data_Api);
        if (!response.ok) {
          throw new Error(`Failed to fetch. Status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  return data;
};

export default useFetchData;
