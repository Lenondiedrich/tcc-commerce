import Image from "next/image";
import { Product } from "../../api/requests";
import { Trash } from "phosphor-react";
import { useContext, useEffect } from "react";
import ShopContext from "../../context/ShopContext";

interface CartItemProps {
  product: Product;
}

export const CartItem = ({ product }: CartItemProps) => {
  const context = useContext(ShopContext);

  return (
    <div className="bg-white rounded-lg flex items-center justify-around p-2">
      <Image
        src={product.thumbnail}
        alt="Imagem do produto"
        width={100}
        height={100}
        className="rounded"
      />
      <div>
        <h1 className="font-semibold text-primary-black text-[13px]">
          {product.title}
        </h1>
        <p className="font-semibold text-[#555555]">
          {product.price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </div>
      <button
        className="flex items-center justify-center gap-2 bg-red-600 rounded text-white p-2 active:scale-90"
        onClick={context.removeProductFromCart.bind(this, product.id)}
      >
        <Trash size={20} weight="bold" />
      </button>
    </div>
  );
};
