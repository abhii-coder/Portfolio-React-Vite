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
    name: "portfolibasic",
    year: "Mar2022",
    align: "right",
    image: "/images/portfolibasic.jpg",
    link: "https://portfolibasic.netlify.app/",
  },
  {
    name: "clothforal",
    year: "Sept2022",
    align: "left",
    image: "/images/clothforal.jpg",
    link: "https://clothforal.netlify.app/",
  },
  {
    name: "miachaelbasketball",
    year: "Jan2023",
    align: "right",
    image: "/images/miachaelbasketball.jpg",
    link: "https://miachaelbasketball.netlify.app/",
  },
  {
    name: "flapbirdfly",
    year: "May2024",
    align: "left",
    image: "/images/flapbirdfly.jpg",
    link: "https://flapbirdfly.netlify.app/",
  },
  {
    name: "bhulbulaiya",
    year: "Jan2023",
    align: "right",
    image: "/images/bhulbulaiya.jpg",
    link: "https://bhulbulaiya.netlify.app/",
  },
  {
    name: "pingpong1v1",
    year: "May2024",
    align: "left",
    image: "/images/pingpong1v1.jpg",
    link: "https://pingpong1v1.netlify.app/",
  },
  {
    name: "camath",
    year: "Jan2023",
    align: "right",
    image: "/images/camath.jpg",
    link: "https://camath.netlify.app/",
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
