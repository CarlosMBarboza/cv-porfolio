import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { TbFileCv } from 'react-icons/tb'; // Asegúrate de importar correctamente el icono

function Footer() {
  return (
    <footer className="text-white text-center p-4 mt-10">


      <div className="flex justify-center space-x-6 mb-2">
        <a href="https://www.linkedin.com/in/carlos-michael-barboza-54ba5a61" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <FaLinkedin className="text-2xl hover:text-blue-300 transition duration-300" />
        </a>
        <a href="https://github.com/CarlosMBarboza" target="_blank" rel="noopener noreferrer" title="GitHub">
          <FaGithub className="text-2xl hover:text-blue-300 transition duration-300" />
        </a>
        <a href="mailto:michaelbarboza7@gmail.com" title="Email">
          <FaEnvelope className="text-2xl hover:text-blue-300 transition duration-300" />
        </a>
        <a href="/downloads/CV-Carlos-Michael-Barboza.pdf" download className="text-2xl hover:text-blue-300 transition duration-300" title="Descargar CV">
          <TbFileCv className="text-2xl" />
        </a>
      </div>
      <p className="text-sm">© 2024 Carlos Michael Barboza. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;
