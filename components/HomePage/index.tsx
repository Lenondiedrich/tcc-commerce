import { useQuery } from "react-query";
import { getAllProducts, Product } from "../../api/requests";
import { useEffect, useState } from "react";
import { Slider } from "../Slider";
import { ProductCard } from "../ProductCard";

export const HomePage = () => {
  const [products, setProducts] = useState<Product[]>();
  const { data, isFetched } = useQuery("products", getAllProducts);

  useEffect(() => {
    if (isFetched) setProducts(data?.products);
  }, [data?.products, isFetched]);

  return products ? (
    <div className="w-full">
      <Slider />
      <div className="p-4">
        <h2 className="text-white font-poppins font-bold text-2xl p-2">
          Mais vendidos
        </h2>
        <div className="grid grid-cols-2 justify-items-center gap-2">
          {products.slice(0, 6).map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  ) : null;
};
