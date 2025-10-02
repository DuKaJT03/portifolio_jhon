import perfil from './assets/fotoPixelado.png';
import { FaLinkedin, FaGithub, FaEnvelope, FaArrowUp } from 'react-icons/fa';
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
    return () => window.removeEventListener('ketdown', onKey);
  }, []);

  return (
    <>
      {/* Botão hamburguer (aparece só em telas pequenas) */}
      <button
        onClick = {() => setOpen(v => !v)}
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        aria-expanded={open}
        title={open ? "Fechar menu" : "Abrir menu"}
        className="md:hidden p-2 rounded-md text-white z-50"
      >
        {/* simples ícone: 3linhas */}
        <div className="w-6 h-0.5 bg-white mb-1"></div>
        <div className="w-6 h-0.5 bg-white mb-1"></div>
        <div className="w-6 h-0.5 bg-white"></div>
      </button>

      {/* menu mobile (aparece abaixo do nav) */}
      <div className={`md:hidden absolute top-full right-0 mt-2 w-56 bg-gray-900/85 backdrop-blur-md rounded-lg shadow-lg overflow-hidden transform transition-transform origin-top ${open ? 'scale-y-100' : 'scale-y-0'}`}
        style={{ transformOrigin:'top'}}
      >
        <ul className="flex flex-col text-white p-4 gap-3">
          <li><a onClick={() => setOpen(false)} href="#inicio" className="block py-2 px-3 rounded hover:bg-white/5">Inicio</a></li>
          <li><a onClick={() => setOpen(false)} href="#sobremim" className="block py-2 px-3 rounded hover:bg-white/5">Sobre mim</a></li>
          <li><a onClick={() => setOpen(false)} href="#projetos" className="block py-2 px-3 rounded hover:bg-white/5">Projetos</a></li>
          <li><a onClick={() => setOpen(false)} href="#contato" className="block py-2 px-3 rounded hover:bg-white/5">Contato</a></li>
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
          className="text-2xl font-bold text-yellow-400"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          Jhon Dev
        </motion.h1>

        <ul className="hidden md:flex gap-8 items-center text-white font-medium">
          <li><a href="#inicio" className="hover:text-yellow-400 transition-colors duration-200">Inicio</a></li>
          <li><a href="#sobremim" className="hover:text-pink-400 transition-colors duration-200">Sobre mim</a></li>
          <li><a href="#projetos" className="hover:text-pink-400 transition-colors duration-200">Projetos</a></li>
          <li><a href="#contato" className="hover:text-pink-400 transition-colors duration-200">Contato</a></li>
        </ul>

        {/* Botçao hamburguer para mobile */}
        <MobileMenu />
      </nav>

      {/* espaçamento para não ficar embaixo da navbar fixa*/}
      <div className="pt-16"></div>

      {/* HERO / INICIO */}
      <section id="inicio" className="flex flex-col items-center justify-center text-center px-4">
        <div className="relative w-44 h-44 mb-6">
          {/* anel neon (blur + spin) */}
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-pink-500 to-yellow-400 opacity-60 blur-3xl animate-pulse animate-spin-slow"></div>
          {/* Foto */}
          <img 
            src={perfil} 
            alt="Foto de Jhon" 
            className="relative w-44 h-44 border-4 border-transparent shadow-lg rounded-full "
          />
        </div>
        
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-400 mb-3">
          Oii, eu me chamo Jhon
        </h2>

        <p className="text-lg max-w-2xl text-gray-200 italic">
          Este é o meu cantinho onde deixo todas as minhas criações malucas para você me conhecer mais...
        </p>
      </section>

      {/* Sobre mim */}
      <section id="sobremim" 
        data-aos="fade-up"
        data-aos-duration="1000"
        className="max-w-5xl mx-auto mt-20 px-6 text-white">
        <h3 
          className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-yellow-600 to-pink-600 text-center mb-10">
            Sobre Mim
        </h3>
        <motion.div 
          initial={{ opacity:0, y: 50}}
          whileInView={{ opacity:1, y:0}}
          transition={{ duration:1, ease: "easeOut"}}
          viewport={{ once: true}}
          className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg p-8 border border-pink-400/40 hover:border-yellow-400/60 transform hover:-translate-y-2 hover:shadow-green-800 transition duration-300"
        >
          <p className="text-lg text-gray-100 leading-relaxed text-justify">
              Me chamo <strong className="text-yellow-300">Jhon Fabricio</strong>, sou formado em Ciência da Computação e estou me desenvolvendo como
              <span className="text-pink-400 font-semibold"> desenvolvedor fullstack</span>. <br /><br />
              Sempre fui motivado por <span className="text-yellow-400">desafios</span>, 
              <span className="text-pink-400"> raciocínio lógico</span>, 
              <span className="text-green-400"> criação de software</span>. Acredito que tecnologia é a ponte para transformar ideias em soluções reais.
              <br /><br />
              Nos meus momentos livres, adoro 
              <span className="text-blue-300"> jogar futebol</span> e 
              <span className="text-purple-300"> sair com amigos</span>.
              Este portfólio é meu espaço para compartilhar projetos, evolução e sonhos no mundo da programação.
            </p>
        </motion.div>
      </section>

      {/* Projetos */}
      <section id="projetos" className="max-w-6xl mx-auto mt-20 p-6 text-white">
        <h3 className="text-3xl font-extrabold mb-12 text-center">
          <span className="bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent">
            Meus Projetos
          </span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Card Projeto 1 */}
          <article className="relative group bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-pink-500/40 hover:-translate-y-2 transition-all duration-500">
            {/* Borda Neon escondida */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500 to-yellow-500 opacity-0 group-hover:opacity-20 blur-xl transition duration-700"></div>
              {/* Conteúdo */}
              <div className="relative z-10">
                <h4 className="text-2xl font-semibold mb-3">Projeto 1</h4>
                  <p className="text-gray-300 mb-6">
                    Descrição curta do projeto 1 - stack usada, propósito e impacto.
                  </p>
                  <div className="flex gap-4">
                    <a href="#" target="_blank" className="px-5 py-2 rounded-lg bg-pink-500 hover:bg-pink-600 transition">Ver Online</a>
                    <a href="#" target="_blank" className="px-5 py-2 rounded-lg border border-pink-500 hover:bg-pink-500 hover:text-white transition">Código</a>
                  </div>
              </div>
          </article>

          {/* Card Projeto 2 */}
          <article className="relative group bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-yellow-500/40  hover:-translate-y-2 transition-all duration-500">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400 to-pink-500 opacity-0 group-hover:opacity-20 blur-xl transition duration-700"></div>
            
            <div className="relative z-10">
              <h4 className="text-2xl font-semibold mb-3">Projeto 2</h4>
                <p className="text-gray-300 mb-6">
                  Descrição do projeto 2. Fala um pouco sobre o que ele faz.
                </p>
              <div className="flex gap-4">
                <a href="#" target="_blank" className="px-5 py-2 rounded-lg bg-yellow-500 hover:bg-yellow-600 transition">Ver Online</a>
                <a href="#" target="_blank" className="px-4 py-2 rounded-lg border border-yellow-500 hover:bg-yellow-500 hover:text-white transition">Código</a>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="max-w-4xl mx-auto mt-20 px-6 text-white text-center">
        <h3 className="text-3xl font-extrabold mb-6">
          <span className="bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">
            Contato
          </span>
        </h3>

        <p className="mb-10 text-gray-300">
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
      className="fixed bottom-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-yellow-400 text-white shadow-lg hover:scale-110 transition-transform z-50"
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
