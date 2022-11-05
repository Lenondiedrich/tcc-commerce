import { useContext, useState } from "react";
import { Product } from "../../api/requests";
import { CartItem } from "../../components/CartItem";
import { Header } from "../../components/Layout/Header";
import ShopContext from "../../context/ShopContext";
import { ArrowCircleLeft } from "phosphor-react";
import { useRouter } from "next/router";
import { PurchaseModal } from "../../components/PurchaseModal";

const CartPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const context = useContext(ShopContext);

  const isCartEmpty = context.cart.length == 0;

  const router = useRouter();

  return (
    <div className="bg-primary-black w-screen h-screen overflow-scroll font-poppins">
      <Header />
      {isCartEmpty ? (
        <div className="flex flex-col items-center h-[400px] justify-center gap-4 p-4">
          <span className="text-white text-xl">O carrinho está vazio!</span>
          <button
            className="flex items-center text-white gap-2 bg-light-violet rounded-md p-2 active:scale-90"
            onClick={() => router.push("/")}
          >
            <ArrowCircleLeft size={26} color="#fff" />
            <span>Voltar a página inicial</span>
          </button>
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-3 p-4">
            {context.cart.map((item, index) => (
              <CartItem key={index} product={item} />
            ))}
          </div>
          <div className="bg-white flex flex-col gap-2 items-center text-primary-black font-semibold text-lg mt-4 mx-4 rounded p-2">
            <div className="flex items-center justify-center gap-2">
              <span>Total do carrinho:</span>
              <p>
                {context.cart
                  .reduce((accumulator, product: Product) => {
                    return accumulator + product.price;
                  }, 0)
                  .toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
              </p>
            </div>
            <button
              className="bg-light-violet text-white p-2 rounded-lg active:scale-90"
              onClick={() => setOpenModal(!openModal)}
            >
              Finalizar compra
            </button>
            {openModal ? (
              <div className="fixed inset-0 bg-black/[0.5] flex items-center justify-center">
                <PurchaseModal closeModal={setOpenModal} />
              </div>
            ) : null}
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
