import ProjectCard from "./ProjectCard"; // Assuming you have a component for ProjectCard
import projectsData from "./projectsData"; // Example data for projects
import "./ProjectCard.css";
const Projects = () => {
  return (
    <section className="projects-section">
      <div className="container-fluid">
        <h2 className="section-title">Let's Explore My Projects</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {projectsData.map((project, index) => (
            <div className="col mb-4" key={index}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
