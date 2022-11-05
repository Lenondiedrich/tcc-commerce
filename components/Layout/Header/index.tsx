import { useContext, useState } from "react";
import { CircleNotch, ShoppingCartSimple } from "phosphor-react";
import { SearchBar } from "../../SearchBar";
import Hamburger from "hamburger-react";
import { SideBar } from "../../SideBar";
import ShopContext from "../../../context/ShopContext";
import { useRouter } from "next/router";
import { Product } from "../../../api/requests";
import { SearchItem } from "../../SearchItem";

export const Header = () => {
  const [results, setResults] = useState<Product[]>([]);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const context = useContext(ShopContext);
  const router = useRouter();

  return (
    <>
      <div className="h-[50px] w-full bg-light-violet flex items-center justify-around relative font-poppins">
        <div className="z-20">
          <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} color="#fff" />
        </div>
        <div>
          <SearchBar
            setResults={setResults}
            setIsSearching={setIsSearching}
            setSearchValue={setSearchValue}
            searchValue={searchValue}
          />
          {isSearching && (
            <div className="bg-white absolute -bottom-11 z-10 w-[200px] rounded-b-lg flex items-center justify-center p-4">
              <CircleNotch size={24} color="#000" className="animate-spin" />
            </div>
          )}
          {results.length > 1 && searchValue.length > 0 && (
            <div className="bg-white absolute top-9 z-10 w-[200px] rounded-b-lg flex overflow-y-scroll max-h-[400px] flex-col gap-4 p-4">
              {results.map((product) => (
                <SearchItem key={product.id} product={product} />
              ))}
            </div>
          )}
          {results.length == 0 && searchValue.length > 0 && (
            <div className="bg-white absolute -bottom-16 z-10 w-[200px] rounded-b-lg flex items-center justify-center p-4">
              Nenhum resultado encontrado
            </div>
          )}
        </div>
        <div
          className="relative w-12 flex items-center justify-center cursor-pointer active:scale-90"
          onClick={() => router.push("/cart")}
        >
          <ShoppingCartSimple size={32} color="#fff" weight="fill" />
          {context.cart.length > 0 ? (
            <div className="text-white font-poppins bg-red-900 rounded-full flex items-center justify-center h-5 w-5 absolute top-0 right-0">
              {context.cart.length}
            </div>
          ) : null}
        </div>
      </div>
      <aside
        className={`${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-10`}
      >
        <SideBar />
      </aside>
    </>
  );
};
