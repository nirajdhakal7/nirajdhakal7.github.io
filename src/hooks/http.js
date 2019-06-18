import { useState, useEffect } from "react";
import axios from "axios";

export const useHttp = (url, dependencies) => {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedData, setFetchedData] = useState(null);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    axios({
      method: "get",
      // url: "http://laract.test/api/items"
      url: url
    })
      .then(res => {
        if (res.status === 200) {
          setFetchedData(res);
          console.log(res);
          setFetchError(false);
          setIsLoading(false);
        }
      })
      .catch(err => {
        console.log(err);
        setFetchError(true);
        setIsLoading(false);
      });
  }, dependencies);
  return [isLoading, fetchedData, fetchError];
};
