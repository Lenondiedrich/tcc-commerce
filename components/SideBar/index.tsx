import { useRouter } from "next/router";
import { Question } from "phosphor-react";
import { categories } from "../../data/categories";

export const SideBar = () => {
  const router = useRouter();

  const checkRoute = (url: string) => {
    if (url !== "/") {
      router.push(`/category${url}`);
    } else {
      router.push("/");
    }
  };

  return (
    <div className="h-full border-r-light-violet border-r-2 overflow-hidden">
      <div className="bg-primary-black h-[60px] flex items-center flex-col p-4 text-white">
        <span className="font-poppins font-semibold text-xl">Categorias</span>
      </div>
      <div className="flex flex-col gap-8 px-4 pt-6 bg-light-violet h-full font-semibold text-md text-white font-poppins">
        {categories.map(({ label, Icon, url }) => (
          <div
            className="flex items-center gap-2"
            key={label}
            onClick={() => checkRoute(url)}
          >
            <Icon size={24} />
            <p className="cursor-pointer">{label}</p>
          </div>
        ))}
        <div
          className="absolute bottom-6 flex items-center gap-3 cursor-pointer active:scale-90"
          onClick={() => router.push("/faq")}
        >
          <Question color="#fff" size={32} />
          <p>Precisa de ajuda?</p>
        </div>
      </div>
    </div>
  );
};
