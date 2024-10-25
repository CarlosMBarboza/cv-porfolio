import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { TbFileCv } from 'react-icons/tb';

const Contact = () => {
  return (
    <div className="mt-14 mb-32 flex flex-col items-center justify-center">
      <h2 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">Contáctame</h2>
      <p className="text-lg mb-6 text-center text-white max-w-5xl">
        ¡Contáctame para colaborar en tus proyectos tecnológicos! Estoy disponible para discutir oportunidades que aprovechen mis habilidades en desarrollo, diseño y gestión de proyectos. Estoy comprometido a aportar soluciones innovadoras y efectivas a tu equipo.
      </p>
      <div className="flex gap-6">
        {[
          {
            href: "https://www.linkedin.com/in/carlos-michael-barboza-54ba5a61",
            icon: <FaLinkedin className="text-4xl hover:text-blue-300 transition duration-300" />,
            label: "LinkedIn",
          },
          {
            href: "https://github.com/CarlosMBarboza",
            icon: <FaGithub className="text-4xl hover:text-blue-300 transition duration-300" />,
            label: "GitHub",
          },
          {
            href: "mailto:michaelbarboza7@gmail.com",
            icon: <FaEnvelope className="text-4xl hover:text-blue-300 transition duration-300" />,
            label: "Email",
          },
        ].map(({ href, icon, label }) => (
          <div 
            key={label} 
            className="flex flex-col items-center bg-white p-5 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            <a 
              href={href} 
              target="_blank" 
              rel="noopener noreferrer" 
              title={label} 
              className="flex flex-col items-center text-gray-800 text-center"
            >
              <div className="flex items-center justify-center w-16">
                {icon}
              </div>
              <span className="mt-2 text-lg font-semibold">{label}</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
