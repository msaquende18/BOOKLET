import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from '../components/home/Home'
import Shop from "../components/shop/Shop";
import Livros from "../components/livros/Livros";
import Contactos from "../components/contactos/Contactos";
import Sobre from "../components/sobre/Sobre";


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
        path: "/sobre",
        element: <Sobre />,
      },
    ],
  },
]);



export default router;