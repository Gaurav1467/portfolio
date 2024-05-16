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

const Project = ({ title, gitLink, liveLink }) => {
  const overlayStyles = `border-solid border-2 border-blue rounded-lg absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue `;
  const projectTitle = title.replace(" ", "-").toLowerCase();

  return (
    <motion.div transition={{ ease: "easeOut", duration: 1 }} 
                variants={projectVariant} 
                className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <div className="flex justify-center" >
          <a 
          className="hover:opacity-50 transition duration-500 cursor-pointer mt-2 mr-4"
          target="_blank"
          rel="noreferrer"
          href={liveLink}><img src="../assets/external-link.png" alt="live" /></a>

          <a
           className="hover:opacity-50 transition duration-500 cursor-pointer mt-2 "
           target="_blank"
           rel="noreferrer"
           href={gitLink}><img src="../assets/github-black.png" alt="github-repo" /></a>
        </div>
      </div>
      <img className="border-solid border-2 border-blue rounded-lg" src={`../assets/${projectTitle}.png`} alt={projectTitle} />
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
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
      </motion.div>

      {/* PROJECTS */}

      <div className="flex justify-center mt-10">
        <motion.div
          className="sm:grid sm:grid-cols-3 gap-4"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Project title="CodeForges" liveLink="https://codeforges.vercel.app/" gitLink="https://github.com/Gaurav1467/codeforges" />

          <Project title="iNoteBook" liveLink="https://i-note-book-zeta.vercel.app/login" gitLink="https://github.com/Gaurav1467/iNoteBook" />

          <Project title="Sorting Visualizer" liveLink="https://sorting-visualizer-psi-six.vercel.app/" gitLink="https://github.com/Gaurav1467/Sorting-Visualizer" />

          <Project title="Delightful Dishes" liveLink="https://delightful-dishes.vercel.app/" gitLink="https://github.com/Gaurav1467/delightful-dishes" />

          <Project title="TextUtils" liveLink="https://textutils-react-xi.vercel.app/" gitLink="https://github.com/Gaurav1467/Textutils-React" />

          <Project title="News App" liveLink="https://github.com/Gaurav1467/News-App" gitLink="https://github.com/Gaurav1467/News-App" />

          <Project title="Fashion Fest" liveLink="https://github.com/Gaurav1467/News-App" gitLink="https://github.com/Gaurav1467/News-App" />

        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
