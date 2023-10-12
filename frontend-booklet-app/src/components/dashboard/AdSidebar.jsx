import React from 'react'
import { Badge, Sidebar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiOutlineCloudUpload,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards
} from "react-icons/hi";
import {
  BiBuoy
} from "react-icons/bi";

import imagemUsuario from '../../assets/fotoPerfil.jpg';


const AdSidebar = () => {
  return (
    <Sidebar aria-label="Sidebar with multi-level dropdown example">
      <Sidebar.Logo href="#" img={imagemUsuario} imgAlt="Foto Admin">
        <p>Bookiê</p>
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
            <p>Dashboard</p>
          </Sidebar.Item>
          <Sidebar.Collapse icon={HiShoppingBag} label="E-commerce">
            <Sidebar.Item href="#">Productos</Sidebar.Item>
            <Sidebar.Item href="#">Vendas</Sidebar.Item>
            <Sidebar.Item href="#">Reembolsos</Sidebar.Item>
            <Sidebar.Item href="#">Entregas</Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Item href="/admin/dashboard/gerenciar-livros" icon={HiInbox}>
            <p>Gerenciar Livros</p>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            <p>Usuários</p>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiShoppingBag}>
            <p>Loja</p>
          </Sidebar.Item>
          <Sidebar.Item href="/registar-autor" icon={HiTable}>
            <p>Registar</p>
          </Sidebar.Item>
          <Sidebar.Item href="/login" icon={HiArrowSmRight}>
            <p>Login</p>
          </Sidebar.Item>
          <Sidebar.Item href="/logout" icon={HiTable}>
            <p>Sair</p>
          </Sidebar.Item>

          <Sidebar.Item
            href="/admin/dashboard/upload"
            icon={HiOutlineCloudUpload}
          >
            <p>upload</p>
          </Sidebar.Item>

          <Sidebar.Item href="#" icon={HiViewBoards}>
            <p>Documentação</p>
          </Sidebar.Item>

          <Sidebar.Item href="#" icon={BiBuoy}>
            <p>Ajuda</p>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
      <Sidebar.CTA>
        <div className="mb-3 flex items-center">
          <Badge color="warning">Loja de Livros</Badge>
          <button
            aria-label="Close"
            className="-m-1.5 ml-auto inline-flex h-6 w-6 rounded-lg bg-gray-100 p-1 text-cyan-900 hover:bg-gray-200 focus:ring-2 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
            type="button"
          ></button>
        </div>
        <div className="mb-3 text-sm text-cyan-900 dark:text-gray-400">
          <p>
            Caro Escritor Seja bem-vindo ao sistema da Booklet! Aqui voçê poderá
            fazer a gestão dos seus livros como adicionar novos livros para
            venda, actualizar livro e outras funcionalidades do sistema.
          </p>
        </div>
        <a
          className="text-sm text-cyan-900 underline hover:text-cyan-800 dark:text-gray-400 dark:hover:text-gray-300"
          href="#"
        >
          <p>Ver mais detalhes de uso de sistema</p>
        </a>
      </Sidebar.CTA>
    </Sidebar>
  );
}

export default AdSidebar