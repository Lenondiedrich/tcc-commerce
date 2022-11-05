import Image from "next/image";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getProductById, Product } from "../../api/requests";
import { Header } from "../../components/Layout/Header";
import ShopContext from "../../context/ShopContext";

const ProductPage = () => {
  const [product, setProducts] = useState<Product>();

  const context = useContext(ShopContext);

  const router = useRouter();

  const { id } = router.query;

  const { data, isFetched } = useQuery("product-page", () =>
    getProductById(String(id))
  );

  const handlePurchaseClick = () => {
    if (product) {
      context.addProductToCart.bind(this, product);
      router.push("/cart");
    }
  };

  useEffect(() => {
    if (isFetched) setProducts(data);
  }, [data, isFetched]);

  return (
    <div className="bg-primary-black w-screen h-screen overflow-scroll font-poppins">
      <Header />
      {product && isFetched ? (
        <div className="flex flex-col items-center justify-center p-4 gap-4">
          <Image
            src={product.thumbnail}
            alt="Imagem do produto"
            width={200}
            height={250}
            className="rounded-lg"
          />
          <div className="text-center flex flex-col gap-4 bg-white rounded p-2">
            <h1 className="font-bold text-xl">{product.title}</h1>
            <h2 className="">
              <strong>Marca: </strong>
              {product.brand}
            </h2>
            <p className="">{product.description}</p>
            <p className="font-bold">
              {product.price.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
            <button
              className="text-xs text-white font-semibold active:scale-90 bg-light-violet rounded-lg p-2"
              onClick={context.addProductToCart.bind(this, product)}
            >
              Adicionar ao carrinho
            </button>
            <button
              onClick={handlePurchaseClick}
              className="text-xs text-light-violet font-semibold active:scale-90 border-2 border-light-violet rounded-lg p-2"
            >
              Comprar
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ProductPage;
