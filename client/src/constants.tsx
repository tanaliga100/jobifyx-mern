export interface ILinks {
  href: string;
  icon: React.ReactNode;
  label: string;
}
export const Links: ILinks[] = [
  { href: "/dashboard", label: "Stats", icon: <ImStatsBars2 size={20} /> },

  {
    href: "/dashboard/all-jobs",
    label: "All Jobs",
    icon: <FaBorderAll size={20} />,
  },
  {
    href: "/dashboard/add-job",
    label: "Add Job",
    icon: <MdOutlineAddToPhotos size={20} />,
  },
  {
    href: "/dashboard/profile",
    label: "Profile",
    icon: <FaAddressCard size={20} />,
  },
  {
    href: "/dashboard/admin",
    label: "Admin",
    icon: <MdAdminPanelSettings size={20} />,
  },
];

import { ImStatsBars2 } from "react-icons/im";

import { FaAddressCard } from "react-icons/fa";

import { FaBorderAll } from "react-icons/fa";
import { MdOutlineAddToPhotos } from "react-icons/md";

import { MdAdminPanelSettings } from "react-icons/md";
