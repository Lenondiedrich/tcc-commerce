import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getProductsByCategory, Product } from "../../../api/requests";
import { Header } from "../../../components/Layout/Header";
import { ProductCard } from "../../../components/ProductCard";

const ClothingPage = () => {
  const [womenDresses, setWomenDresses] = useState<Product[]>();
  const [shirts, setShirts] = useState<Product[]>();

  const { data: womenDressesData, isFetched: isWomenDressesFetched } = useQuery(
    "womens-dresses",
    () => getProductsByCategory("womens-dresses")
  );

  const { data: shirtsData, isFetched: isShirtsFetched } = useQuery(
    "mens-shirts",
    () => getProductsByCategory("mens-shirts")
  );

  useEffect(() => {
    if (isWomenDressesFetched) setWomenDresses(womenDressesData?.products);
    if (isShirtsFetched) setShirts(shirtsData?.products);
  }, [
    isShirtsFetched,
    isWomenDressesFetched,
    shirtsData?.products,
    womenDressesData?.products,
  ]);

  return womenDresses && shirts ? (
    <div className="bg-primary-black w-screen h-screen overflow-scroll">
      <Header />
      <div className="p-4 flex flex-col gap-6">
        <h1 className="text-white font-bold text-3xl text-center">Vestidos</h1>
        <div className="grid grid-cols-2 justify-items-center gap-2">
          {womenDresses.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        <h1 className="text-white font-bold text-3xl text-center">Camisetas</h1>
        <div className="grid grid-cols-2 justify-items-center gap-2">
          {shirts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  ) : null;
};

export default ClothingPage;
