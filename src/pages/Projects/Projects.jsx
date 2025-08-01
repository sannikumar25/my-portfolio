import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import edulinker from "@/assets/images/edulinker.png"
import  Calculator  from "@/assets/images/basic-calculator.png";
import tictactoe from "@/assets/images/tic-tac-toe.png"
import weatherapp from "@/assets/images/weatherApp.png"
import randomimg from "@/assets/images/random_image_generator.png"

const projects = [
  {
    title: "Tic Tac Toe (Neon Glass UI)",
    description:
      "A classic Tic Tac Toe game with stunning neon-glassmorphic UI, glowing buttons, AI mode toggle, and animated bubble background.",
    src:tictactoe ,
    link: tictactoe,
    color: "#00ffff",
    githubLink: "https://github.com/sannikumar25/Tic-Tac-Toe",
    liveLink: "https://sannikumar25.github.io/Tic-Tac-Toe/",
  },
  {
    title: "EduLinker - Hire Local Teachers",
    description:
      "A platform to connect students with local teachers. Frontend-only project using Google Sheets as backend. Clean UI, search/filter ready.",
    src: "https://i.postimg.cc/j5FG3jkv/edulinker.png",
    link: edulinker,
    color: "#8f89ff",
    githubLink: "https://github.com/sannikumar25/EduLinker",
    liveLink: "https://sannikumar25.github.io/EduLinker/",
  },
  {
    title: "Weather App",
    description:
      "A responsive weather forecast app fetching real-time data using Weather API. Glassmorphic design with animated icons.",
    src: "https://i.postimg.cc/hjyytkZD/weather-app.png",
    link: weatherapp,
    color: "#00aaff",
    githubLink: "https://github.com/sannikumar25/Weather-App",
    liveLink: "https://sannikumar25.github.io/Weather-App/",
  },
  {
    title: "Random Image Generator",
    description:
      "Generates a random image of a dog using an API. Click button to fetch a new image every time.",
    src: "https://i.postimg.cc/8Pz6S1Kp/random-image-generator.png",
    link: randomimg,
    color: "#ff9966",
    githubLink: "https://github.com/sannikumar25/Random-Image-Generator",
    liveLink: "https://sannikumar25.github.io/Random-Image-Generator/",
  },
  {
    title: "Basic Calculator",
    description:
      "A clean and animated calculator app built with JavaScript and GSAP. Supports all basic arithmetic operations.",
    src: Calculator,
    link: Calculator,
    color: "#ffc107",
    githubLink: "https://github.com/sannikumar25/Basic-Calculator",
    liveLink: "https://sannikumar25.github.io/Basic-Calculator/",
  },
];

export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @media screen and (width: 1366px) and (height: 768px) {
        .project-card {
          scale: 0.85;
          margin-top: -5vh;
        }
        .project-container {
          height: 90vh;
        }
      }
    `;
    document.head.appendChild(style);

    const checkResolution = () => {
      const isTargetResolution =
        window.innerWidth >= 1360 &&
        window.innerWidth <= 1370 &&
        window.innerHeight >= 760 &&
        window.innerHeight <= 775;

      if (isTargetResolution) {
        document.documentElement.style.setProperty("--project-scale", "0.85");
        document.documentElement.style.setProperty("--project-margin", "-5vh");
      } else {
        document.documentElement.style.setProperty("--project-scale", "1");
        document.documentElement.style.setProperty("--project-margin", "0");
      }
    };

    checkResolution();
    window.addEventListener("resize", checkResolution);
    return () => {
      document.head.removeChild(style);
      window.removeEventListener("resize", checkResolution);
    };
  }, []);

  return (
    <ReactLenis root>
      <main className="bg-black" ref={container}>
        <section className="text-white w-full bg-slate-950">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                url={project.link}
                title={project.title}
                color={project.color}
                description={project.description}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
                githubLink={project.githubLink}
                liveLink={project.liveLink}
              />
            );
          })}
        </section>
      </main>
    </ReactLenis>
  );
}

function Card({
  i,
  title,
  description,
  url,
  color,
  progress,
  range,
  targetScale,
  githubLink,
  liveLink,
}) {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0 project-container"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
          transform: `scale(var(--project-scale, 1))`,
          marginTop: "var(--project-margin, 0)",
        }}
        className="relative -top-[25%] h-auto w-[90%] md:w-[85%] lg:w-[75%] xl:w-[65%] origin-top project-card"
        whileHover={{ y: -8, transition: { duration: 0.3 } }}
      >
        <div className="w-full flex flex-col md:flex-row bg-zinc-900 rounded-2xl overflow-hidden shadow-xl">
          <div className="w-full md:w-[55%] h-[250px] md:h-[400px] lg:h-[450px] relative overflow-hidden">
            <motion.img
              src={url}
              alt={title}
              className="w-full h-full object-cover"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />
            <motion.div
              className="absolute inset-0"
              style={{ backgroundColor: color, mixBlendMode: "overlay" }}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.3 }}
              transition={{ duration: 0.3 }}
            />
            <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-black/50 backdrop-blur-md text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
              Project {i + 1}
            </div>
          </div>

          <div className="w-full md:w-[45%] p-6 md:p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full" style={{ backgroundColor: color }} />
                <div className="h-[1px] w-12 md:w-20 bg-gray-600" />
              </div>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-4">
                {title}
              </h2>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed line-clamp-3 md:line-clamp-none max-w-md">
                {description}
              </p>
            </div>
            <div className="mt-4 md:mt-auto pt-4">
              <div className="w-full h-[1px] bg-gray-800 mb-4 md:mb-6" />
              <div className="flex items-center gap-4">
                <motion.a href={githubLink} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2" whileHover={{ y: -3 }} transition={{ type: "spring", stiffness: 400 }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  <span className="text-xs md:text-sm font-medium" style={{ color }}>Code</span>
                </motion.a>

                <motion.a href={liveLink} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2" whileHover={{ y: -3 }} transition={{ type: "spring", stiffness: 400 }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                  <span className="text-xs md:text-sm font-medium" style={{ color }}>Live</span>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

Card.propTypes = {
  i: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  progress: PropTypes.object.isRequired,
  range: PropTypes.array.isRequired,
  targetScale: PropTypes.number.isRequired,
  githubLink: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired,
};
