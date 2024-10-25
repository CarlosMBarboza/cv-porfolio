import { ProjectsList } from '../Data/Projects';

function Projects() {
  return (
    <section className="text-center mt-8">
      <h3 className="text-2xl text-white  font-bold">Proyectos</h3>
      <div className="m-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {ProjectsList.map((project) => (
          <div key={project.name} className="border rounded-lg shadow-lg p-4 bg-white">
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex flex-col items-center text-blue-500 hover:underline"
            >
              <img 
                src={project.image} 
                alt={project.name} 
                className="w-full h-32 object-cover rounded-md mb-2" 
              />
              <span className="font-semibold my-5 ">{project.name}</span>
              <span className="text-sm">{project.description}</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
