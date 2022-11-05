import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getProductsByCategory, Product } from "../../../api/requests";
import { Header } from "../../../components/Layout/Header";
import { ProductCard } from "../../../components/ProductCard";

const SelfCarePage = () => {
  const [skinCareProducts, setSkinCareProducts] = useState<Product[]>();
  const [fragranceProducts, setFragranceProducts] = useState<Product[]>();

  const { data: skinCareData, isFetched: isSkinCareFetched } = useQuery(
    "skincare",
    () => getProductsByCategory("skincare")
  );

  const { data: fragrancesData, isFetched: isFragrancesFetched } = useQuery(
    "fragrances",
    () => getProductsByCategory("fragrances")
  );

  useEffect(() => {
    if (isSkinCareFetched) setSkinCareProducts(skinCareData?.products);
    if (isFragrancesFetched) setFragranceProducts(fragrancesData?.products);
  }, [
    fragrancesData?.products,
    isFragrancesFetched,
    isSkinCareFetched,
    skinCareData?.products,
  ]);

  return skinCareProducts && fragranceProducts ? (
    <div className="bg-primary-black w-screen h-screen overflow-scroll">
      <Header />
      <div className="p-4 flex flex-col gap-6">
        <h1 className="text-white font-bold text-3xl text-center">
          Beleza pessoal
        </h1>
        <div className="grid grid-cols-2 justify-items-center gap-2">
          {skinCareProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        <h1 className="text-white font-bold text-3xl text-center">Perfumes</h1>
        <div className="grid grid-cols-2 justify-items-center gap-2">
          {fragranceProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  ) : null;
};

export default SelfCarePage;
