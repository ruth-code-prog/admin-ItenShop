/*!

=========================================================
* Paper Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import {
  Dashboard,
  EditLiga,
  //Icons,
  ListLiga,
  TambahLiga,
  ListJersey,
  TambahJersey,
  EditJersey,
  ListPesanan
} from "./views";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin",
    sidebar: true,
  },
  {
    path: "/liga",
    name: "Master Kategori",
    icon: "nc-icon nc-world-2",
    component: ListLiga,
    layout: "/admin",
    sidebar: true,
  },
  {
    path: "/liga/tambah",
    name: "Tambah Kategori",
    component: TambahLiga,
    layout: "/admin",
    sidebar: false,
  },
  {
    path: "/liga/edit/:id",
    name: "Edit Kategori",
    component: EditLiga,
    layout: "/admin",
    sidebar: false,
  },
  {
    path: "/jersey",
    name: "Master Barang",
    icon: "nc-icon nc-cart-simple",
    component: ListJersey,
    layout: "/admin",
    sidebar: true,
  },
  {
    path: "/jersey/tambah",
    name: "Tambah Barang",
    component: TambahJersey,
    layout: "/admin",
    sidebar: false,
  },
  {
    path: "/jersey/edit/:id",
    name: "Edit Barang",
    component: EditJersey,
    layout: "/admin",
    sidebar: false,
  },
  {
    path: "/pesanan",
    name: "Master Pesanan",
    icon: "nc-icon nc-cart-simple",
    component: ListPesanan,
    layout: "/admin",
    sidebar: true,
  },
];
export default routes;
