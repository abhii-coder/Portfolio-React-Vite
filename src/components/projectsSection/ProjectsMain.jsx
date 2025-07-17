import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "foodiea",
    year: "Jul2025",
    align: "right",
    image: "/images/foodiea.jpg",
    link: "https://foodiea.netlify.app/",
  },
  {
    name: "flapbirdfly",
    year: "Sept2024",
    align: "left",
    image: "/images/flapbirdfly.jpg",
    link: "https://flapbirdfly.netlify.app/",
  },
  {
    name: "pingpong1v1",
    year: "Feb2024",
    align: "right",
    image: "/images/pingpong1v1.jpg",
    link: "https://pingpong1v1.netlify.app/",
  },
  {
    name: "clothforal",
    year: "Sept2023",
    align: "left",
    image: "/images/clothforal.jpg",
    link: "https://clothforal.netlify.app/",
  },
  {
    name: "portfolibasic",
    year: "Oct2023",
    align: "right",
    image: "/images/portfolibasic.jpg",
    link: "https://portfolibasic.netlify.app/",
  },
  {
    name: "miachaelbasketball",
    year: "Oct2023",
    align: "left",
    image: "/images/miachaelbasketball.jpg",
    link: "https://miachaelbasketball.netlify.app/",
  },
  {
    name: "camath",
    year: "Oct2023",
    align: "right",
    image: "/images/camath.jpg",
    link: "https://camath.netlify.app/",
  },
  {
    name: "bhulbulaiya",
    year: "Jan2022",
    align: "left",
    image: "/images/bhulbulaiya.jpg",
    link: "https://bhulbulaiya.netlify.app/",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
