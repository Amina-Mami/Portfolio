import {
  FaDesktop,
  FaDatabase,
  FaTools,
  FaPlayCircle,
  FaCodeBranch,
  FaGithub,
} from "react-icons/fa";
import "./ProjectCard.css"; // Import your CSS file for ProjectCard component styling

const ProjectCard = ({ project }) => {
  const {
    title,
    description,
    frontend,
    backend,
    database,
    devops,
    versionControl,
    image,
    link,
    githubLink,
  } = project;

  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card shadow project-card">
        {image && <img src={image} className="card-img-top" alt={title} />}
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <ul className="list-group list-group-flush">
            {frontend && (
              <li className="list-group-item">
                <FaDesktop className="icon desktop-icon" />
                <span className="icon-text">{frontend}</span>
              </li>
            )}
            {backend && (
              <li className="list-group-item">
                <FaCodeBranch className="icon branch-icon" />
                <span className="icon-text">{backend}</span>
              </li>
            )}
            {database && (
              <li className="list-group-item">
                <FaDatabase className="icon database-icon" />
                <span className="icon-text">{database}</span>
              </li>
            )}
            {devops && (
              <li className="list-group-item">
                <FaTools className="icon tools-icon" />
                <span className="icon-text">{devops}</span>
              </li>
            )}
            {versionControl && (
              <li className="list-group-item">
                <FaGithub className="icon version-control-icon" />
                <span className="icon-text">{versionControl}</span>
              </li>
            )}
          </ul>
          <div className="d-flex justify-content-center mt-3">
            {link && (
              <a
                href={link}
                className="btn btn-primary me-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaPlayCircle className="btn-icon" /> Demo
              </a>
            )}
            {githubLink && (
              <a
                href={githubLink}
                className="btn btn-dark"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="btn-icon" /> GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
