import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const MySkills = () => {
  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="flex justify-center gap-16 mt-32">
        <motion.div
          className="w-1/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="font-playfair font-semibold text-4xl mb-5 text-center">
            MY <span className="text-red">SKILLS</span>
          </div>
          <LineGradient width="w-1/1" />
        </motion.div>
      </div>

      {/* SKILLS */}
      <motion.div
        className="w-1/1"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="flex flex-col xs:flex xs:justify-around xs:flex-row">
          <div className="font-playfair font-semibold text-2xl mb-5 mt-5">
            <h2>LANGUAGES</h2>
            <div className=" text-lg mt-2">
              <ul>
                <li>C</li>
                <li>C++</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Tailwind</li>
                <li>SQL</li>
                <li>Java</li>
                <li>TypeScript</li>
              </ul>
            </div>
          </div>
          <div className="font-playfair font-semibold text-2xl mb-5 mt-5">
            <h2>TECH</h2>
            <div className=" text-lg mt-2">
              <ul>
                <li>ReactJS</li>
                <li>NodeJS</li>
                <li>Socket.io</li>
                <li>Express</li>
                <li>Redux</li>
                <li>TailwindCSS</li>
                <li>SpringBoot</li>
                <li>React Router</li>
              </ul>
            </div>
          </div>
          <div className="font-playfair font-semibold text-2xl mb-5 mt-5">
            <h2>TOOLS</h2>
            <div className=" text-lg mt-2">
              <ul>
                <li>Git & Github</li>
                <li>Postman</li>
                <li>MongoDB</li>
                <li>MySQL</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="md:flex md:justify-start mt-10 gap-32">
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-3xl mt-3">
                Experience
              </p>
              <a
                className="hover:opacity-50 transition duration-500"
                href="https://drive.google.com/file/d/1HJ7ZkJ4mAQOu_xAeVOoFEdmxQaTvF8PH/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <img alt="linkedin-link" src="../assets/samsung.png" />
              </a>

              <p className="font-playfair font-semibold text-xl mt-1">
                SDE-Intern
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-3 absolute right-0 top-0 z-[-1]" />
            <p>
              • Developed production-ready web applications using
                Springboot, optimizing backend performance by
                implementing caching strategies thatreduced API
                response time by 50%.<br/>
              • Acquired proficiency in building highly interactive web
                applications using ReactJS,resulting in a 40% increase in
                user engagement and a 25% decrease in bounce rate.
          </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
