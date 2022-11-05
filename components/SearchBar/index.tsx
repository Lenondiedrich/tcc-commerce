import { MagnifyingGlass } from "phosphor-react";
import { useEffect, useState } from "react";
import { Product } from "../../api/requests";
import { products } from "../../data/products";
import useDebounce from "../../hooks/useDebounce";

interface SearchBarProps {
  setResults: (products: Product[]) => void;
  setIsSearching: (isSearching: boolean) => void;
  searchValue: string;
  setSearchValue: (searchValue: string) => void;
}

export const SearchBar = ({
  setResults,
  setIsSearching,
  searchValue,
  setSearchValue,
}: SearchBarProps) => {
  const debouncedValue = useDebounce<string>(searchValue, 2000);

  useEffect(() => {
    const searchProducts = (search: string) => {
      const sanitizeSearch = search
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

      const findProducts: Product[] = products.filter((product) =>
        product.title
          .toLocaleLowerCase()
          .includes(sanitizeSearch.toLocaleLowerCase())
      );
      setResults(findProducts);
      setIsSearching(false);
    };

    if (debouncedValue.length > 1) {
      setIsSearching(true);
      searchProducts(searchValue);
    }
  }, [debouncedValue, searchValue, setIsSearching, setResults]);

  const handleSearch = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value);
  };

  return (
    <>
      <form className="flex items-center relative">
        <input
          className="rounded-l font-poppins p-1 text-sm max-w-[200px] focus:outline-none"
          placeholder="Buscar produto..."
          onChange={handleSearch}
        />
        <div className="p-1 bg-primary-black rounded-r cursor-pointer active:scale-90">
          <MagnifyingGlass size={24} color="#fff" />
        </div>
      </form>
    </>
  );
};
