import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className=" p-6 flex justify-between items-center  shadow-lg shadow-black/65 ">
      <h1 className="text-white text-2xl font-bold">Carlos Michael Alexander Barboza</h1>
      <ul className="flex gap-4 mr-5">
        <li>
          <Link 
            className="text-white hover:text-blue-300 transition duration-300" 
            to="/" 
            title="Ir a Inicio">
            Home
          </Link>
        </li>
        <li>
          <Link 
            className="text-white hover:text-blue-300 transition duration-300" 
            to="/projects" 
            title="Ir a Proyectos">
            Projects
          </Link>
        </li>
        <li>
          <Link 
            className="text-white hover:text-blue-300 transition duration-300" 
            to="/contact" 
            title="Ir a Contacto">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
