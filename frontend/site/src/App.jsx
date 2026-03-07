import perfil from './assets/fotoPixelado.png';
import { FaLinkedin, FaGithub, FaEnvelope, FaArrowUp} from 'react-icons/fa';
import QRCode from 'react-qr-code';
import { motion } from 'framer-motion';
import { useState, useEffect} from 'react';

function MobileMenu(){
  const [open, setOpen] = useState(false);

  //Fecha com tecla Esc - uso opcionaç para melhor UX/ACESSIBILIDADE
  useEffect(() => {
    function onKey(e) {
      if (e.key ===  'Escape') setOpen(false);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      {/* Botão hamburguer (aparece só em telas pequenas) */}
      <button
        onClick = {() => setOpen(v => !v)}
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        aria-expanded={open}
        title={open ? "Fechar menu" : "Abrir menu"}
        className="md:hidden p-2 rounded-md text-[#F8EDD9] z-50"
      >
        {/* simples ícone: 3linhas */}
        <div className="w-6 h-0.5 bg-[#F8EDD9] mb-1"></div>
        <div className="w-6 h-0.5 bg-[#F8EDD9] mb-1"></div>
        <div className="w-6 h-0.5 bg-[#F8EDD9]"></div>
      </button>

      {/* menu mobile (aparece abaixo do nav) */}
      <div className={`md:hidden absolute top-full right-0 mt-2 w-56 bg-gray-900/85 backdrop-blur-md rounded-lg shadow-lg overflow-hidden transform transition-transform origin-top ${open ? 'scale-y-100' : 'scale-y-0'}`}
        style={{ transformOrigin:'top'}}
      >
        <ul className="flex flex-col text-[#F8EDD9] p-4 gap-3">
          <li><a onClick={() => setOpen(false)} href="#inicio" className="block py-2 px-3 rounded hover:bg-[#F8EDD9]/5">Inicio</a></li>
          <li><a onClick={() => setOpen(false)} href="#sobremim" className="block py-2 px-3 rounded hover:bg-[#F8EDD9]/5">Sobre mim</a></li>
          <li><a onClick={() => setOpen(false)} href="#projetos" className="block py-2 px-3 rounded hover:bg-[#F8EDD9]/5">Projetos</a></li>
          <li><a onClick={() => setOpen(false)} href="#contato" className="block py-2 px-3 rounded hover:bg-[#F8EDD9]/5">Contato</a></li>
        </ul>
      </div>
    </>
  );
}

export default function App() {
  return (
    <div className="min-h-full">

      {/* Menu de navegação -NAVBAR FIXA */}
      <nav className="fixed top-0 left-0 w-full bg-gray-900/60 backdrop-blur-md px-6 py-3 flex items-center justify-between shadow-md z-50">
        <motion.h1
          className="text-2xl font-bold text-[#F8EDD9]"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          Jhon Dev
        </motion.h1>

        <ul className="hidden md:flex gap-8 items-center text-[#F8EDD9] font-medium">
          <li><a href="#inicio" className="hover:text-[#B19F92] transition-colors duration-200">Inicio</a></li>
          <li><a href="#sobremim" className="hover:text-[#B19F92] transition-colors duration-200">Sobre mim</a></li>
          <li><a href="#projetos" className="hover:text-[#B19F92] transition-colors duration-200">Projetos</a></li>
          <li><a href="#contato" className="hover:text-[#B19F92] transition-colors duration-200">Contato</a></li>
        </ul>

        {/* Botçao hamburguer para mobile */}
        <MobileMenu />
      </nav>

      {/* espaçamento para não ficar embaixo da navbar fixa*/}
      <div className="pt-28"></div>

      {/* HERO / INICIO */}
      <section
        id="inicio"
        className="scroll-mt-28 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 mt-10 gap-16"
      >

  {/* TEXTO */}
  <div className="text-center md:text-left max-w-xl">

    <h2 className="text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#B19F92] to-[#B19F92] mb-4 font-glitch">
      Holá, <br />
      eu sou o Jhon <br />
      Desenvolvedor de Software
    </h2>
  </div>


  {/* FOTO */}
  <div className="relative w-44 h-44">
    {/* IMAGEM */}
    <img
      src={perfil}
      alt="Foto de Jhon"
      className="relative w-44 h-44 rounded-full shadow-lg border-4 border-transparent"
    />

  </div>

</section>

      {/* Sobre mim */}
      <section id="sobremim" 
        data-aos="fade-up"
        data-aos-duration="1000"
        className="scroll-mt-28 max-w-5xl mx-auto mt-20 px-6 text-[#F8EDD9]">
        <h3 
          className="text-3xl font-semibold bg-clip-text text-[#F8EDD9] text-center mb-10">
            Sobre Mim
        </h3>
        <motion.article
          initial={{ opacity:0, y: 50}}
          whileInView={{ opacity:1, y:0}}
          transition={{ duration:1, ease: "easeOut"}}
          viewport={{ once: true}}
          className="relative group bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-lg hover:shadow-gray-500/40 hover:-translate-y-2 transition-all duration-500"
        >

          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-800 to-blue-900 opacity-0 group-hover:opacity-20 blur-xl transition duration-700"></div>

          <div className="relative z-10 hover:-translate-y-2 hover:shadow-gray-500/40 transition-all duration-500">
            <p className="text-lg text-[#F8EDD9] leading-relaxed text-justify">
              Me chamo <strong className="text-gray-500 font-extrabold">Jhon Fabricio</strong>, sou formado em Ciência da Computação e estou me desenvolvendo como
              <span className="text-[#B19F92] font-semibold"> desenvolvedor fullstack</span>. <br /><br />

              Sempre fui motivado por <span className="text-[#B19F92] font-semibold">desafios</span>,
              <span className="text-[#B19F92] font-semibold"> raciocínio lógico</span>,
              <span className="text-[#B19F92] font-semibold"> criação de software</span>.
              Acredito que tecnologia é a ponte para transformar ideias em soluções reais.
              <br /><br />

              Nos meus momentos livres, gosto de
              <span className="text-[#B19F92] font-semibold"> jogar futebol</span> e
              <span className="text-[#B19F92] font-semibold"> sair com amigos</span>.
              Este portfólio é meu espaço para compartilhar projetos, evolução e sonhos no mundo da programação.
            </p>
          </div>

        </motion.article>
      </section>

      {/* Projetos */}
      <section id="projetos" className="scroll-mt-28 max-w-6xl mx-auto mt-20 p-6 text-[#F8EDD9]">
        <h3 className="text-3xl font-extrabold mb-12 text-center">
          <span  className="text-3xl font-semibold bg-clip-text text-[#F8EDD9] text-center mb-10">
            Meus Projetos
          </span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-10 max-w-2xl mx-auto">

          {/* Card Projeto 1 */}
          <article className="relative group bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-gray-500/40 hover:-translate-y-2 transition-all duration-500">
            {/* Borda Neon escondida */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-800 to-blue-900 opacity-0 group-hover:opacity-20 blur-xl transition duration-700"></div>
              {/* Conteúdo */}
              <div className="relative z-10">
                <h4 className="text-2xl font-semibold mb-3">
                  Sistema Completo de E-Commerce (PHP + PostgreSQL)
                </h4>
                  <p className="text-[#F8EDD9] mb-6">
                    Sistema completo de e-commmerce desenvolvido com PHP e PostgreSQL, utilizando PDO com prepared statements para segurança contra SQL Injection.
                    Implementação de autenticação com password_hash, controle de sessão, 
                    relacionamento entre tabelas e deploy em ambiente cloud (Render).
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6 text-xs">
                    <span className="px-2 py-1 bg-green-600 rounded-md">
                      Produção
                    </span>
                    <span className="px-2 py-1 bg-blue-600 rounded-md">
                      Deploy Cloud
                    </span>
                    <span className="bg-gray-500 px-2 py-1 rounded-md">
                      PHP
                    </span>
                    <span className=" bg-purple-600 px-2 py-1 rounded-md">
                      PostgreSQL
                    </span>
                    <span className="bg-pink-600 px-2 py-1 rounded-md">
                      PDO Prepared Statement
                    </span>
                    <span className=" bg-green-800 px-2 py-1 rounded-md">
                      Render
                    </span>
                    <span className=" bg-indigo-600 px-2 py-1 rounded-md">
                      Password Hash
                    </span>
                    <span className=" bg-yellow-600 px-2 py-1 rounded-md">
                      Sessions
                    </span>
                    <span className=" bg-red-600 px-2 py-1 rounded-md">
                      SQL Injection Protection
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <a 
                      href="https://loja-online-l0ba.onrender.com/login.html" 
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="px-5 py-2 rounded-lg bg-[#3d5b75] hover:bg-[#01103A] transition"
                      >
                        Ver Online
                    </a>
                    <a 
                      href="https://github.com/DuKaJT03/loja-online" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-5 py-2 rounded-lg border hover:bg-gray-800 hover:text-white transition"
                    >
                      Código
                    </a>
                  </div>
              </div>
          </article>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="scroll-mt-28 max-w-4xl mx-auto mt-20 px-6 text-white text-center">
        <h3 className="text-3xl font-extrabold mb-6">
          <span className="text-3xl font-semibold bg-clip-text text-[#F8EDD9] text-center mb-10">
            Contato
          </span>
        </h3>

        <p className="mb-10 text-[#F8EDD9]">
          Vamos conversar? Estou aberto para novas oportunidades e colaborações!
        </p>

        {/* Links rápidos */}
        <div className="flex justify-center gap-6 mb-10">
          <a href="https://linkedin.com/in/jhonticona" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 transition"><FaLinkedin /></a>
          <a href="https://github.com/DuKaJT03" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg bg-gray-600 hover:bg-gray-800 transition-colors"><FaGithub /></a>
          <a href="mailto:jhon.ticona.dev@gmail.com" className="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-800 transition"><FaEnvelope /></a>
        </div>

        <div className="flex justify-center">
          <div className="bg-white/5 p-6 rounded-xl shadow-lg">
          <QRCode value="https://www.linkedin.com/in/jhonticona" size={128}/>
          </div>
        </div>
      </section>

      <div className="h-20"/>

    {/* Botão Voltar ao Topo */}
    <a 
      href="#inicio" 
      aria-label="Voltar ao topo"
      className="fixed bottom-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-900 to-blue-800 text-[#F8EDD9] shadow-lg hover:scale-110 transition-transform z-50"
    >
      < FaArrowUp />
    </a>

     {/* Footer */}
     <footer className="mt-20 py-6 bg-gray-900/60 backdrop-blur-md text-gray-400 text-center border-t border-white/10">
      <p className="text-sm">
        ©{new Date().getFullYear()} <span className="text-white font-semibold">Jhon Ticona</span>.
        Todos os direitos reservados.
      </p>
      <p className="text-xs mt-2">
        Feito com <span className="text-yellow-400">React</span>, <span className="text-blue-400">Tailwind</span> e muito ☕
      </p>
     </footer>

    </div>
  );
}
