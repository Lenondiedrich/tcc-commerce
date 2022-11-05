import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getProductsByCategory, Product } from "../../../api/requests";
import { Header } from "../../../components/Layout/Header";
import { ProductCard } from "../../../components/ProductCard";

const ComputersPage = () => {
  const [computers, setComputers] = useState<Product[]>();

  const { data, isFetched } = useQuery("laptops", () =>
    getProductsByCategory("laptops")
  );

  useEffect(() => {
    if (isFetched) setComputers(data?.products);
  }, [data?.products, isFetched]);

  return computers ? (
    <div className="bg-primary-black w-screen h-screen overflow-scroll">
      <Header />
      <div className="p-4 flex flex-col gap-6">
        <h1 className="text-white font-bold text-3xl text-center">
          Informática
        </h1>
        <div className="grid grid-cols-2 justify-items-center gap-2">
          {computers.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  ) : null;
};

export default ComputersPage;
