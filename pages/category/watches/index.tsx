import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getProductsByCategory, Product } from "../../../api/requests";
import { Header } from "../../../components/Layout/Header";
import { ProductCard } from "../../../components/ProductCard";

const WatchesPage = () => {
  const [menWatches, setMenWatches] = useState<Product[]>();
  const [womenWatches, setWomenWatches] = useState<Product[]>();

  const { data: menWatchesData, isFetched: isMenWatchesFetched } = useQuery(
    "mens-watches",
    () => getProductsByCategory("mens-watches")
  );

  const { data: womenWatchesData, isFetched: isWomenWatchesFetched } = useQuery(
    "womens-watches",
    () => getProductsByCategory("womens-watches")
  );

  useEffect(() => {
    if (isMenWatchesFetched) setMenWatches(menWatchesData?.products);
    if (isWomenWatchesFetched) setWomenWatches(womenWatchesData?.products);
  }, [
    isMenWatchesFetched,
    isWomenWatchesFetched,
    menWatchesData?.products,
    womenWatchesData?.products,
  ]);

  return menWatches && womenWatches ? (
    <div className="bg-primary-black w-screen h-screen overflow-scroll">
      <Header />
      <div className="p-4 flex flex-col gap-6">
        <h1 className="text-white font-bold text-3xl text-center">
          Relógios Masculino
        </h1>
        <div className="grid grid-cols-2 justify-items-center gap-2">
          {menWatches.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        <h1 className="text-white font-bold text-3xl text-center">
          Relógios Femininos
        </h1>
        <div className="grid grid-cols-2 justify-items-center gap-2">
          {womenWatches.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  ) : null;
};

export default WatchesPage;
