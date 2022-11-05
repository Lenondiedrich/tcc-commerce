import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getProductsByCategory, Product } from "../../../api/requests";
import { Header } from "../../../components/Layout/Header";
import { ProductCard } from "../../../components/ProductCard";

const PhonesPage = () => {
  const [phones, setPhones] = useState<Product[]>();

  const { data, isFetched } = useQuery("smartphones", () =>
    getProductsByCategory("smartphones")
  );

  useEffect(() => {
    if (isFetched) setPhones(data?.products);
  }, [data?.products, isFetched]);

  return phones ? (
    <div className="bg-primary-black w-screen h-screen overflow-scroll">
      <Header />
      <div className="p-4 flex flex-col gap-6">
        <h1 className="text-white font-bold text-3xl text-center">
          Celular e Smartphone
        </h1>
        <div className="grid grid-cols-2 justify-items-center gap-2">
          {phones.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  ) : null;
};

export default PhonesPage;
