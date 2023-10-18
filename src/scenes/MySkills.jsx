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
            I am thrilled to share my journey of discovery and growth, fueled by my passion for the projects I undertook. Here are some courses that I enjoyed a lot in my studies at UofT.  
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
      <div className="md:flex md:justify-between mt-2 gap-16">
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
              <p className="font-playfair font-semibold text-xl mt-0 md:flex md:justify md:justify-end" >
                Software Design
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-16 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
          This course delved into Agile Java software development. Learned Agile principles, Git version control, essential design patterns, JUnit testing and UML diagrams. Master creating graphical user interfaces using Java's Swing framework and experience Agile development through collaborative group assignments.
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
              <p className="font-playfair font-semibold text-xl mt-0 md:flex md:justify md:justify-end" >
                Soft Tools and Sys Prog
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-16 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
          This course explored software techniques within a Unix-style environment, primarily in C. It delved into the intricacies of program execution within an operating system. Key subjects included software tool creation, pipe and filter usage, file processing, shell programming, process management, system calls, signals, and network programming.
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
              <p className="font-playfair font-semibold text-xl mt-0 md:flex md:justify md:justify-end" >
                Data Structures and Analysis
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-16 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
          This course covered algorithm analysis, including worst-case, average-case, and amortized complexity. Randomized quicksort and selection algorithms is also introduced. Explored abstract data types like graphs, dictionaries, priority queues, and disjoint sets. I learnt various data structures, such as balanced search trees, hashing, heaps, and disjoint forests. 
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
              <p className="font-playfair font-semibold text-xl mt-0 md:flex md:justify md:justify-end" >
                Artificial Intelligence 
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-16 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
          This course provided a comprehensive overview of various AI topics, including algorithms such as state space search, game tree search, CSP (Constraint Satisfaction Problem) techniques, decision-making under uncertainty, and knowledge representation. I enjoyed a lot when creating projects such as Hua Rong Dao solver, checkers solver, Battleship Solitaire puzzles solver and income prediction model.
          </p>
        </motion.div>
      </div>

      <div className="md:flex md:justify-between mt-10 gap-16">
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
          <div className="relative h-16 ">
            <div className="z-10">
              <p className="font-playfair font-semibold text-3xl mt-3">
                CSC343 
              </p>
              <p className="font-playfair font-semibold text-xl mt-0 md:flex md:justify md:justify-end" >
                Database Management
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-16 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
          This course covered relational algebra, SQL for querying and updating databases, application programming with SQL, integrity constraints, normal forms, and database design, as well as elements of database system technology, including query processing and transaction management.
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
              <p className="font-playfair font-semibold text-xl mt-0 md:flex md:justify md:justify-end" >
                Information Security
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-16 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
          This course encompassed major topics including software security, system security, and network security, emphasizing vulnerability identification and software development flaw remediation. Also, it covered basic encryption, decryption, and their practical applications in the field of cryptography.          
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
                CSC311
              </p>
              <p className="font-playfair font-semibold text-xl mt-0 md:flex md:justify md:justify-end" >
                Machine Learning
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-16 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
          This course covered classification and regression through KNN, decision trees, linear models, and neural networks, along with an introduction to clustering algorithms such as GDA, PCA and k-Means. I had a lot of fun working on the project of using ML to predict the correctness of students's answers.        
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
              <p className="font-playfair font-semibold text-xl mt-0 md:flex md:justify md:justify-end" >
              Neural Net and Deep Learning
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-16 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
          This course is an extension of CSC311, covering backpropagation, automatic differentiation, CNN and RNN architectures, autoencoders and Transpose Convolutions, Generative Adversarial Networks. It also introduced Attention and Transformers, which is one of the widely used model in the industry.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;