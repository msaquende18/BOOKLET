import React from 'react'

import { Footer } from "flowbite-react";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

const MyFooter = () => {
  return (
   <Footer bgDark>
      <div className="w-full">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
          <div>
            <Footer.Title title="Empresa" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">
                Sobre Nós
              </Footer.Link>
              <Footer.Link href="#">
                Carreira
              </Footer.Link>
              <Footer.Link href="#">
                 Livros
              </Footer.Link>
              <Footer.Link href="#">
                Loja
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Contactos" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">
                bookletao@gmail.com
              </Footer.Link>
              <Footer.Link href="#">
                Twitter
              </Footer.Link>
              <Footer.Link href="#">
                Facebook
              </Footer.Link>
              <Footer.Link href="#">
                Contacta
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Empresa" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">
                Privacidade
              </Footer.Link>
              <Footer.Link href="#">
                Licensa
              </Footer.Link>
              <Footer.Link href="#">
                Termos & Condições
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Serviços" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">
                Livraria
              </Footer.Link>
              <Footer.Link href="#">
                Loja
              </Footer.Link>
              <Footer.Link href="#">
                Vendas
              </Footer.Link>
              <Footer.Link href="#">
                Leitura
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
        <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            by="Marcelino Dev™"
            href="#"
            year={2023}
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              href="#"
              icon={BsFacebook}
            />
            <Footer.Icon
              href="#"
              icon={BsInstagram}
            />
            <Footer.Icon
              href="#"
              icon={BsTwitter}
            />
            
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default MyFooter