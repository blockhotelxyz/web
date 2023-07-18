import { Home, Profile, SignIn, SignUp } from "@/pages";
import {
  HomeIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  UsersIcon,
  DocumentTextIcon,
  BuildingOfficeIcon
} from "@heroicons/react/24/solid";

export const routes = [
  {
    icon: HomeIcon,
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    icon: BuildingOfficeIcon,
    name: "Hotels",
    path: "/home#Hotels",
  },
  {
    icon: UsersIcon,
    name: "Travellers",
    path: "/home#Travellers",
  },
  {
    icon: DocumentTextIcon,
    name: "Articles",
    href: "https://medium.com/@blockhotelxyz",
    target: "_blank",
    element: "",
  },
];

export default routes;
