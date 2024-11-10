import MyImage from '../../src/images/8888.jpg'; 
import { titles } from '../Data/Titulos';
import Carousel from './Carousel';
import StackItem from './StackItem';
import { Stacks } from '../Data/Stacks';

function Home() {
  return (
    <div className="min-h-screen text-white">
      <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-10 px-4 md:px-0 justify-center">
        <img 
          src={MyImage} 
          alt="Descripción de la imagen" 
          className="w-64 h-64 mt-11 md:w-80 md:h-80 object-cover rounded-full shadow-2xl transition-transform duration-300 hover:scale-105 mb-6" 
          loading="lazy" 
        />
        <div className="max-w-3xl text-left ">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">¡Bienvenido a Mi Portafolio!</h1>
          <p className="text-base md:text-lg mb-4">
            Soy un apasionado desarrollador junior con formación en tecnologías FullStack y un enfoque en el aprendizaje continuo. Poseo habilidades en HTML, CSS, JavaScript, TypeScript, Node.js, React.js, Angular y otras tecnologías. Además, tengo experiencia en proyectos personales que demuestran mi capacidad para resolver problemas de manera creativa y eficiente. Me destaco por mi capacidad de trabajo en equipo, mi adaptabilidad y mi deseo de contribuir al éxito de proyectos innovadores. Estoy emocionado por la oportunidad de crecer en un entorno dinámico y de aportar valor a su equipo.
          </p>
        </div>
      </div>

      <section className="text-center mt-10">
        <h3 className="text-2xl font-bold">Stacks</h3>
        <div className="flex flex-wrap justify-center mt-4">
          {Stacks.map((stack) => (
            <div 
              key={stack.name} 
              className="flex flex-col items-center transition-transform duration-300 transform hover:rotate-12 w-1/2 md:w-1/6 mt-2 text-center border rounded-lg shadow-slate-800 shadow-lg p-3 m-2 hover:scale-105"
            >
              <StackItem stack={stack} />
            </div>
          ))}
        </div>
      </section>

      <Carousel titles={titles} />
    </div>
  );
}

export default Home;
