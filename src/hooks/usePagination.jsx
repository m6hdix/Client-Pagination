import _ from "lodash";
import { useEffect, useState } from "react";

const usePagination = (url, pageSize) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const paginateData = _.chunk(data, pageSize);
    setData(paginateData);
    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);
  return [data, loading];
};

export default usePagination;
