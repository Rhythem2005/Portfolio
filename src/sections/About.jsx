import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/FrameWorks";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Rhythem Sabharwal</p>
            <p className="subtext">
              Full Stack Developer with a strong foundation in the MERN stack and a keen interest in Artificial Intelligence. Skilled in building
              scalable web applications and integrating AI-driven solutions. Passionate about leveraging technology to solve real-world problems
              and committed to continuously expanding knowledge in modern development and AI advancements.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>

        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500">
            Logic Becomes Beauty
            </p>
            <Card
              style={{ transform: "rotate(75deg) scale(0.7)", top: "30%", left: "20%" }}
              text="AI"
              containerRef={grid2Container}
            />
            <Card
              style={{ transform: "rotate(-30deg) scale(0.7)", top: "60%", left: "45%" }}
              text="CLOUD"
              containerRef={grid2Container}
            />
            <Card
              style={{ transform: "rotate(90deg) scale(0.7)", bottom: "30%", left: "70%" }}
              text="DSA"
              containerRef={grid2Container}
            />
            <Card
              style={{ transform: "rotate(-45deg) scale(0.7)", top: "55%", left: "0%" }}
              text="PROMPT"
              containerRef={grid2Container}
            />
            <Card
              style={{ transform: "rotate(20deg) scale(0.7)", top: "10%", left: "38%" }}
              text="TECH"
              containerRef={grid2Container}
            />
          </div>
        </div>

        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
            Currently on Earth, but open to remote opportunities anywhere.
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>

        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
            Wanna get connected… or just keep ghosting like usual?
            </p>
            <CopyEmailButton />
          </div>
        </div>

        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headText">Tech Stack</p>
                <p className="subtext">
  <strong>Programming Languages:</strong> C++, Python <br />
  <strong>Frontend Technologies:</strong> React.js, Tailwind CSS, JavaScript, Next.js <br />
  <strong>Backend Technologies:</strong> Node.js, Express.js, RESTful APIs <br />
  <strong>Databases:</strong> MongoDB, SQL <br />
  <strong>Tools & Platforms:</strong> Git, GitHub, Postman, Vercel, Render, VS Code
</p>



</div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
