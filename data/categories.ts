import { Armchair, DesktopTower, DeviceMobile, Hamburger, IconProps, Smiley, Watch, CoatHanger, House } from "phosphor-react";

interface CategoriesProps {
  label: string;
  Icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;
  url: string;
}

export const categories: CategoriesProps[] = [
  {
    label: 'Página Inicial',
    url: '/',
    Icon: House
  },
  {
    label: 'Beleza Pessoal',
    url: '/self-care',
    Icon: Smiley
  },
  {
    label: 'Celular e smartphone',
    url: '/phones',
    Icon: DeviceMobile
  },
  {
    label: 'Comida',
    url: '/food',
    Icon: Hamburger
  },
  {
    label: 'Informática',
    url: '/computers',
    Icon: DesktopTower
  },
  {
    label: 'Casa e decoração',
    url: '/decoration',
    Icon: Armchair
  },
  {
    label: 'Relógios',
    url: '/watches',
    Icon: Watch
  },
  {
    label: 'Vestuário',
    url: '/clothing',
    Icon: CoatHanger
  }
]