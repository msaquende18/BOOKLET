import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from '../components/home/Home'
import Shop from "../components/shop/Shop";
import Livros from "../components/livros/Livros";
import Contactos from "../components/contactos/Contactos";
import Sobre from "../components/sobre/Sobre";
import LivroDetail from "../components/livros/LivroDetail";
import DashboardLayout from "../components/dashboard/DashboardLayout";
import Dashboad from "../components/dashboard/Dashboad";
import UploadLivro from "../components/dashboard/UploadLivro";
import GerenciarLivros from "../components/dashboard/GerenciarLivros";
import EditarLivros from "../components/dashboard/EditarLivros";
import Registar from "../components/Auth/registar/Registar";
import Login from "../components/Auth/login/Login";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/livros",
        element: <Livros />,
      },
      {
        path: "/contactos",
        element: <Contactos />,
      },
      {
        path: "/livros/:id",
        element: <LivroDetail />,
        loader: ({ params }) =>
          fetch(`http://localhost:9000/api/livros${params.id}`),
      },
      {
        path: "/sobre",
        element: <Sobre />,
      },
    ],
  },
  {
    path: "/admin/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/admin/dashboard",
        element: <Dashboad />,
      },
      {
        path: "/admin/dashboard/upload",
        element: <UploadLivro />,
      },
      {
        path: "/admin/dashboard/gerenciar-livros",
        element: <GerenciarLivros />,
      },
      {
        path: "/admin/dashboard/editar-livros/:id",
        element: <EditarLivros />,
        loader: ({ params }) =>
          fetch(`http://localhost:9000/api/livros${params.id}`),
      },
    ],
  },
  {
    path: "/registar",
    element: <Registar />,
  },
  {
    path: "/login",
    element: <Login/>,
  },
]);



export default router;