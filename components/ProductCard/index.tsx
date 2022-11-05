import Image from "next/image";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { Product } from "../../api/requests";
import ShopContext from "../../context/ShopContext";

export const ProductCard = (product: Product) => {
  const context = useContext(ShopContext);
  const router = useRouter();

  const handlePurchaseClick = () => {
    context.addProductToCart.bind(this, product);
    router.push("/cart");
  };

  return (
    <div className="cursor-pointer border-2 border-light-violet max-w-[200px] max-h-[300px] bg-white w-full h-full flex flex-col items-center rounded-lg font-poppins gap-2 p-4">
      <Image
        src={product.thumbnail}
        alt="Imagem do produto"
        width={100}
        height={100}
        className="rounded"
        onClick={() => router.push(`/product/${product.id}`)}
      />
      <p className="font-semibold text-primary-black text-[13px]">
        {product.title}
      </p>
      <p className="font-semibold text-[#555555]">
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
  );
};
