import { Header } from "../../components/Layout/Header";

const Faq = () => {
  return (
    <div className="bg-primary-black w-screen h-screen overflow-scroll font-poppins">
      <Header />
      <div className="text-white p-4 flex flex-col gap-4">
        <h1 className="font-bold">
          Como faço para efetuar uma compra no site?
        </h1>
        <p>
          Este site foi criado para um trabalho de conclusão, então nenhuma
          informação pessoal e nem financeira é requisitada neste site
        </p>
        <h1 className="font-bold">Como faço para rastrear a minha compra?</h1>
        <p>
          Todos os produtos neste site são fictícios e somente para simular as
          ações de um e-commerce.
        </p>
      </div>
    </div>
  );
};

export default Faq;
