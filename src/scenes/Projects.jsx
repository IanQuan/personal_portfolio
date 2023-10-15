import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

// Modify the Project component to accept more props
const Project = ({ title, description, detailsLink, image }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (  
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">{description}</p>
        <a className="font-playfair text-md text-blue" href={detailsLink}>DETAILS</a>
      </div>
      <img src={image} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-blue">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          my projectssss
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            PROJECTS
          </div>
          <Project 
            title="NBA MVP Predictor" 
            description="Description for Project 1" 
            detailsLink="https://github.com/IanQuan/NBA_MVP_prediction" 
            image="../assets/project-1.jpeg"
          />
          <Project 
            title="EduML" 
            description="Use various machine learning algorithm to predict teh correctness of students's answers on diagnostic questions" 
            detailsLink="https://github.com/IanQuan/CSC311_S2023_project/tree/main" 
            image="../assets/CSC311-project.png"
          />

          {/* ROW 2 */}
          <Project 
            title="Google Dive Space Saver" 
            description="Recommend user files that have not been used or updated for a long time to free up Google Drive storage" 
            detailsLink="https://github.com/IanQuan/Google-Drive-Space-Saver" 
            image="../assets/google-drive-space-saver.png"
          />
          <Project 
            title="Personal Website" 
            description="Personal website written in React, tailwind css" 
            detailsLink="https://github.com/yourgithubusername/project1" 
            image="../assets/project-4.jpeg"
          />
          <Project 
            title="Project 5" 
            description="Description for Project 5" 
            detailsLink="https://github.com/yourgithubusername/project1" 
            image="../assets/project-5.jpeg"
          />

          {/* ROW 3 */}
          <Project 
            title="Project 6" 
            description="Description for Project 5" 
            detailsLink="https://github.com/yourgithubusername/project1" 
            image="../assets/project-5.jpeg"
          />
          <Project 
            title="Project 7" 
            description="Description for Project 5" 
            detailsLink="https://github.com/yourgithubusername/project1" 
            image="../assets/project-5.jpeg"
          />
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            PROJECTS
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;