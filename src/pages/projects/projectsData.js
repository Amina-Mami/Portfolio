import metamatchImg from "../../assets/metamatch.png";
import projectlemonImg from "../../assets/littlelemon.png";
import projectFoyerImage from "../../assets/foyer.png";
import projectMicroImage from "../../assets/micro.png";
import projectUrbanImage from "../../assets/urban2.png";
import projectCodeImage from "../../assets/codegen.png";
const projectsData = [
  {
    title: "Spring Code Generation Platform",
    description:
      "Development of a platform to simplify web application creation using Spring framework.",
    frontend: "React.js, React Bootstrap",
    backend: "Java, Spring Framework",
    versionControl: "GitHub",
    database: "MySQL",
    image: projectCodeImage,
    link: "https://example.com/project1",
    githubLink: "https://github.com/Amina-Mami/SpringCodeGenerator.git",
  },
  {
    title: "Football Staff Management Web Application",
    description:
      "Optimization of technical and sports management of football personnel.",
    frontend: "Angular",
    backend: "Express, Node.js",
    database: "MongoDB",
    methodology: "Agile Scrum",
    devops: "Jenkins, Jest, Docker, Nexus, Prometheus, Grafana",

    image: metamatchImg,
    link: "https://example.com/project2",
    githubLink: "https://github.com/Amina-Mami/BackEndMetaMatch.git",
  },
  {
    title: "University Residences Management System",
    description:
      "Integrated solution for managing university residences, enhancing administrative efficiency.",
    frontend: "Angular",
    backend: "Java, Spring Framework",
    database: "MySQL",
    versionControl: "GitHub",
    image: projectFoyerImage,
    link: "https://example.com/project3",
    githubLink: "https://github.com/Amina-Mami/ProjetFoyersUniversitaires.git",
  },
  {
    title: "Urban Complaint Management Application",
    description:
      "Development of a web application for reporting urban issues and managing complaints.",
    frontend: "HTML5, CSS3, Bootstrap, jQuery",
    backend: "Java Enterprise Edition (JEE)",
    server: "Tomcat",
    database: "MySQL",
    versionControl: "GitHub",
    image: projectUrbanImage,
    link: "https://example.com/project3",
    githubLink:
      "https://github.com/Amina-Mami/Urban-Complaint-Management-Application.git",
  },
  {
    title: "Microservices Stock Management System",
    description: "Distributed microservices application for stock management.",
    frontend: "React.js, React Bootstrap",
    backend: "Spring Boot",
    devops: "Docker, Eureka, Keycloak",
    database: "MySQL ,  H2",
    githubLink: "https://github.com/Amina-Mami/InventoryManagementWebApp.git",
    image: projectMicroImage,
    link: "https://example.com/project5",
  },
  {
    title: "Online Restaurant Reservation System",
    description:
      "Reservation system allowing users to book tables and manage bookings online.",
    frontend: "React.js, Material-UI",
    backend: "Node.js, Express",
    database: "MongoDB",
    image: projectlemonImg,
    versionControl: "GitHub",
    link: "https://example.com/project6",
    githubLink: "https://github.com/Amina-Mami/FrontRestaurantReservation.git",
  },
];

export default projectsData;
