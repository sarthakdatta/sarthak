{/*import admit from "/src/assets/images/admit.jpg";
import mychef from "/src/assets/images/MyChef.jpg";
import Projects from "../ui/Projects";
import Heading from "../ui/Heading";

export default function Works({ forwardedRef }) {
  return (
    <section
      ref={forwardedRef}
      id="works"
      className="nav-change overflow-hidden my-[10%]"
    >
     <Heading title="Projects" />
      <div className="mt-10 grid grid-cols-1 gap-16 gap-y-10 md:grid-cols-12">

        <div className=" col-span-1 md:col-span-12">
          <Projects
            link="https://github.com/sarthakdatta/MyChef"
            img={mychef}
            alt="MyChef"
            name="MyChef"
            type="React Native • Python"
            year="2024"
            tools="React Native • Python • Ollama • Meta Llama 3.2"

          />
        </div>

        <div className=" col-span-1 md:col-span-12">
          <Projects
            link="https://github.com/dhrxvjhx/genesis1.0"
            img={admit}
            alt="ChadApp - Decentralised Chat App"
            name="Admit - College Admission Predictor"
            type="ReactJS • Collge Scorecard API"
            year="2025"
            tools="ReactJS • TailwindCSS • Collge Scorecard API"

          />
        </div>

        <div className=" col-span-1 md:col-span-12">
          <Projects
            link="https://github.com/dhrxvjhx/genesis1.0"
            img={admit}
            alt="ChadApp - Decentralised Chat App"
            name="Doggie - Discord Bot"
            type="Python • Discord API"
            year="2022"
            tools="Python • Discord API"

          />
        </div>
      </div>
    </section>
  );
}
*/}


import admit from "/src/assets/images/admit.jpg";
import mychef from "/src/assets/images/MyChef.jpg";
import Projects from "../ui/Projects";
import Heading from "../ui/Heading";
import doggie from "/src/assets/images/doggiediscord.jpg"

export default function Works({ forwardedRef }) {
  return (
    <section
      ref={forwardedRef}
      id="works"
      className="nav-change overflow-hidden my-[10%] "  // Set background to black for the section
    >
      <Heading title="Projects" />
      <div className="mt-10 grid grid-cols-1 gap-16 gap-y-10 md:grid-cols-12">
        {/* Project #1 */}
        <div className="col-span-1 md:col-span-12">
          <Projects
            link="https://github.com/sarthakdatta/MyChef"
            img={mychef}
            alt="MyChef"
            name="MyChef - AI Cooking Assistant"
            type="Enter your ingredients and MyChef will suggest recipes for you using Meta Llama 3.2"
            year="2024"
            tools="React Native • Python • Ollama • Meta Llama 3.2"
          />
        </div>
        {/* Project #2 */}
        <div className="col-span-1 md:col-span-12">
          <Projects
            link="https://github.com/dhrxvjhx/genesis1.0"
            img={admit}
            alt="Admit - College Admission Predictor"
            name="Admit - College Admission Predictor"
            type="Enter your stats and extracurriculars to see your chances of admission using realtime data from the College Scorecard API."
            year="2025"
            tools="ReactJS • TailwindCSS • College Scorecard API"
          />
        </div>
        {/* Project #3 */}
        <div className="col-span-1 md:col-span-12">
          <Projects
            link="https://github.com/dhrxvjhx/genesis1.0"
            img={doggie}
            alt="Doggie - Discord Bot"
            name="Doggie - Discord Bot"
            type="Discord Bot with many features such as moderation, fun, and more."
            year="2022"
            tools="Python • Discord API"
          />
        </div>
      </div>
    </section>
  );
}
