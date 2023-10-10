import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from '../components/home/Home'
import Shop from "../components/shop/Shop";
import Livros from "../components/livros/Livros";
import Contactos from "../components/contactos/Contactos";
import Sobre from "../components/sobre/Sobre";
import LivroDetail from "../components/livros/LivroDetail";


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
        path: "/livos",
        element: <Livros />,
      },
      {
        path: "/contactos",
        element: <Contactos />,
      },
      {
        path: "/livros/:id",
        element: <LivroDetail />,
        loader: ({ params }) => fetch(`http://localhost:9000/api/livros${params.id}`),
      },
      {
        path: "/sobre",
        element: <Sobre />,
      },
    ],
  },
]);



export default router;