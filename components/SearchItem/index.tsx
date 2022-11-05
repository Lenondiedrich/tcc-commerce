import Image from "next/image";
import { Product } from "../../api/requests";

interface SearchItemProps {
  product: Product;
}

export const SearchItem = ({ product }: SearchItemProps) => {
  return (
    <div className="flex items-center gap-2 font-poppins border border-light-violet rounded-lg p-2">
      <Image
        src={product.thumbnail}
        alt="Imagem do produto"
        width={50}
        height={50}
        className="rounded"
      />
      <div>
        <h1 className="text-sm">{product.title}</h1>
        <h1 className="text-sm">
          {product.price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </h1>
      </div>
    </div>
  );
};

export default SearchItem;
