import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-5 pb-28">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-20">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            COURSE <span className="text-blue">HIGHLIGHT</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            some course highlights
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10"
                src="assets/skills-image.png"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="assets/skills-image.png" />
          )}
        </div>
      </div>

      {/* COURSE SECTION */}
      <div className="md:flex md:justify-between mt-2 gap-20">
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
          <div className="relative h-16">
            <div className="z-10">
              <p className="font-playfair font-semibold text-3xl mt-3">
                CSC207
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-16 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
          Delve into Agile Java software development in this course. Learn Agile principles, Git version control, essential design patterns, JUnit testing and UML diagrams. Master creating graphical user interfaces using Java's Swing framework and experience Agile development through collaborative group assignments.
          </p>
        </motion.div>

        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-16">
            <div className="z-10">
              <p className="font-playfair font-semibold text-3xl mt-3">
                CSC209
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-16 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
          Delve into Agile Java software development in this course. Learn Agile principles, Git version control, essential design patterns, JUnit testing and UML diagrams. Master creating graphical user interfaces using Java's Swing framework and experience Agile development through collaborative group assignments.
          </p>
        </motion.div>

        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-16">
            <div className="z-10">
              <p className="font-playfair font-semibold text-3xl mt-3">
                CSC263
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-16 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
          Delve into Agile Java software development in this course. Learn Agile principles, Git version control, essential design patterns, JUnit testing and UML diagrams. Master creating graphical user interfaces using Java's Swing framework and experience Agile development through collaborative group assignments.
          </p>
        </motion.div>

        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-16">
            <div className="z-10">
              <p className="font-playfair font-semibold text-3xl mt-3">
                CSC384
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-16 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
          Delve into Agile Java software development in this course. Learn Agile principles, Git version control, essential design patterns, JUnit testing and UML diagrams. Master creating graphical user interfaces using Java's Swing framework and experience Agile development through collaborative group assignments.
          </p>
        </motion.div>
      </div>

      <div className="md:flex md:justify-between mt-16 gap-32">
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
          <div className="relative h-16">
            <div className="z-10">
              <p className="font-playfair font-semibold text-3xl mt-3">
                CSC343
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-16 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
          Delve into Agile Java software development in this course. Learn Agile principles, Git version control, essential design patterns, JUnit testing and UML diagrams. Master creating graphical user interfaces using Java's Swing framework and experience Agile development through collaborative group assignments.
          </p>
        </motion.div>

        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-16">
            <div className="z-10">
              <p className="font-playfair font-semibold text-3xl mt-3">
                CSC347
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-16 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
          Delve into Agile Java software development in this course. Learn Agile principles, Git version control, essential design patterns, JUnit testing and UML diagrams. Master creating graphical user interfaces using Java's Swing framework and experience Agile development through collaborative group assignments.
          </p>
        </motion.div>

        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-16">
            <div className="z-10">
              <p className="font-playfair font-semibold text-3xl mt-3">
                CSC 311
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-16 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
          Delve into Agile Java software development in this course. Learn Agile principles, Git version control, essential design patterns, JUnit testing and UML diagrams. Master creating graphical user interfaces using Java's Swing framework and experience Agile development through collaborative group assignments.
          </p>
        </motion.div>

       <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-16">
            <div className="z-10">
              <p className="font-playfair font-semibold text-3xl mt-3">
                CSC413
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-16 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
          Delve into Agile Java software development in this course. Learn Agile principles, Git version control, essential design patterns, JUnit testing and UML diagrams. Master creating graphical user interfaces using Java's Swing framework and experience Agile development through collaborative group assignments.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;