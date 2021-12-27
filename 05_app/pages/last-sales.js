import { useEffect, useState } from "react";
import useSWR from "swr";

const LastSalesPage = (props) => {
  const [sales, setSales] = useState(props.sales);
  // const [isLoading, setIsLoading] = useState(false);

  // const identifier = ""; // url
  // const { data, error } = useSWR(identifier);

  const dummyData = {
    s1: {
      username: "Max",
      volume: 100,
    },
    s2: {
      username: "Manuel",
      volume: 50,
    },
    s3: {
      username: "Him",
      volume: 80,
    },
  };

  const data = dummyData;
  const error = false;

  useEffect(() => {
    if (data) {
      const transformedSales = transformData(data);
      setSales(transformedSales);
    }
  }, [data]);

  // useEffect(() => {
  //   setIsLoading(true);
  //   // fetch();
  //   setSales(transformedSales);
  //   setIsLoading(false);
  // }, []);

  if (error) {
    return <p>Failed to load.</p>;
  }
  if (!data || !sales) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          {sale.username} - ${sale.volume}
        </li>
      ))}
    </ul>
  );
};

const transformData = (obj) => {
  const transformedSales = [];
  for (const key in obj) {
    transformedSales.push({
      id: key,
      username: obj[key].username,
      volume: obj[key].volume,
    });
  }

  return transformedSales;
};

export default LastSalesPage;

export async function getStaticProps(context) {
  const dummyData = {
    s1: {
      username: "Max",
      volume: 100,
    },
    s2: {
      username: "Manuel",
      volume: 50,
    },
  };
  const transformedSales = transformData(dummyData);

  return {
    props: {
      sales: transformedSales,
    },
    revalidate: 10,
  };
}
