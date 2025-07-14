import { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "@/assets/css/tomorrow.css";
import Meteors from "@/components/ui/meteors";
import AboutMe from "@/pages/About/About";
import SparklesText from "@/components/ui/sparkles-text";
import { FlipWords } from "@/components/ui/flip-words";

const GridBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <rect width="40" height="40" fill="none" stroke="white" strokeWidth="0.5" className="opacity-40 animate-gridPulse" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </div>
  );
};

export default function Hero() {
  const words = [
    "Web Developer & UI/UX Enthusiast",
    "JavaScript Developer",
    "Learning MARN Stack",
    "Linux & GitHub for DevOps Enthusiast",
  ];

  const [code] = useState(`
const profile = {
    name: 'Sanni Kumar',
    title: 'Web Developer | Data Analyst | Problem Solver',
    skills: [
        'HTML5', 'CSS3', 'JavaScript', 'GSAP','React','EXCEL',
        'UI/UX Design', 'Glassmorphism', 'Animations' ,'Vs Code',
        'MySQL', 'MongoDB',  'AWS', 'Git', 'Linux','PHP (Basics)',
    ],
    hardWorker: true,
    quickLearner: true,
    problemSolver: true, 
    hireable: function() {
        return (
            this.hardWorker &&
            this.problemSolver 
        );
    }
};
  `);

  useEffect(() => {
    Prism.highlightAll();

    const style = document.createElement("style");
    style.textContent = `
      @keyframes gridPulse {
        0%, 100% { opacity: 0.1; }
        50% { opacity: 0.3; }
      }
      @media screen and (width: 1366px) and (height: 768px),
             screen and (width: 1367px) and (height: 768px),
             screen and (width: 1368px) and (height: 769px) {
        .hero {
          padding-top: 12rem !important;
        }
        .hero .container {
          padding-top: 10rem !important;
          margin-top: 5rem !important;
        }
        .hero-section-padding {
          padding-top: 12rem !important;
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
        document.documentElement.style.setProperty("--hero-padding-top", "12rem");
      } else {
        document.documentElement.style.setProperty("--hero-padding-top", "0");
      }
    };

    checkResolution();
    window.addEventListener("resize", checkResolution);

    return () => {
      document.head.removeChild(style);
      window.removeEventListener("resize", checkResolution);
    };
  }, [code]);

  return (
    <>
      <main className="bg-[#020617] text-white min-h-screen">
        <section
          className="hero min-h-screen flex flex-col items-center justify-center relative px-4 sm:px-6 lg:px-8 py-10 md:py-16 lg:py-0 hero-section-padding"
          style={{ paddingTop: "var(--hero-padding-top, 0)" }}
        >
          {/* Backgrounds */}
          <GridBackground />
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Meteors number={10} />
          </div>

          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10 py-8 md:py-10 lg:py-12 md:pt-28 xl:pt-28">
            {/* Left Column */}
            <div className="w-full lg:w-1/2 mb-12 lg:mb-0 relative">
              <div className="absolute hidden lg:-top-20 lg:-left-20 lg:block w-48 h-48 lg:w-64 lg:h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
              <div className="absolute hidden lg:block lg:top-40 lg:-right-20 w-48 h-48 lg:w-64 lg:h-64 bg-teal-500/10 rounded-full blur-3xl"></div>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 mb-8">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
                <span className="text-gray-300 text-sm font-medium">
                  Welcome to my universe
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-8">
                <SparklesText text="Hello" />
                <span className="inline-block">
                  I'm <span className="gradient-text">Sanni Kumar</span>
                </span>
              </h1>

              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-500/10 to-teal-500/10 border border-blue-500/20 mb-8 backdrop-blur-sm">
                <i className="fas fa-rocket text-blue-400 animate-bounce"></i>
                <FlipWords className="text-xl text-blue-400 font-medium" words={words} />
              </div>

              <p className="text-lg text-gray-300/90 leading-relaxed mb-12">
                JavaScript lover 🚀 | Web Developer | Coding the future 💻✨
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <a
                  href="https://github.com/sannikumar25"
                  className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-teal-400 p-0.5 rounded-xl hover:scale-105"
                >
                  <span className="block px-6 py-4 bg-gray-900 rounded-[11px] group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-teal-400">
                    <span className="text-white font-medium flex items-center gap-2">
                      Learn More <i className="fas fa-arrow-right"></i>
                    </span>
                  </span>
                </a>

                <a
                  href="/Sanni_Kumar_Resume.pdf"
                  download
                  className="group relative inline-flex items-center justify-center gap-3 p-0.5 rounded-xl bg-gradient-to-r from-gray-800 to-gray-700 hover:scale-105"
                >
                  <span className="block px-6 py-4 bg-gray-900 border border-gray-700/50 rounded-[11px]">
                    <span className="text-gray-300 font-medium group-hover:text-white flex items-center gap-2">
                      Get Resume <i className="fas fa-envelope"></i>
                    </span>
                  </span>
                </a>
              </div>

              {/* Floating Badges */}
              <div className="hidden lg:block absolute left-[5.5rem] top-[2.3rem] animate-float-slow">
                <div className="px-4 py-2 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400">
                  <i className="fas fa-wand-magic-sparkles"></i> UI Magic
                </div>
              </div>
              <div className="hidden lg:block absolute right-10 top-20 animate-float">
                <div className="px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  <i className="fas fa-code"></i> Clean Code
                </div>
              </div>
              <div className="hidden lg:block absolute top-[17rem] left-[70%] transform -translate-x-1/2 animate-float">
                <div className="px-4 py-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400">
                  <i className="fas fa-lightbulb"></i> Innovation
                </div>
              </div>
            </div>

            {/* Right Code Box */}
            <div className="w-full lg:w-1/2">
              <div className="gradient-border">
                <div className="code-window bg-[#091121]">
                  <div className="window-header">
                    <div className="window-dot bg-red-500"></div>
                    <div className="window-dot bg-yellow-500"></div>
                    <div className="window-dot bg-green-500"></div>
                    <span className="ml-2 text-sm text-gray-400 flex items-center gap-2">
                      <i className="fas fa-code"></i> developer.js
                    </span>
                  </div>
                  <pre className="language-javascript">
                    <code className="language-javascript">{code}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* ✅ About Me Button BELOW developer.js */}
          <div className="w-full flex justify-center mt-12">
            <a
              href="#about"
              className="animate-bounce group flex flex-col items-center gap-2 
                px-5 py-3 rounded-full bg-white/5 border border-blue-500/20 backdrop-blur-md shadow-xl
                hover:bg-blue-500/10 hover:border-blue-500 transition-all duration-300"
            >
              <span className="text-sm text-gray-300 group-hover:text-blue-400 flex items-center gap-2 transition-colors duration-200">
                <i className="fas fa-mouse text-blue-400 group-hover:scale-110 transition-transform duration-300"></i>
                About Me
              </span>
              <i className="fas fa-chevron-down text-blue-400 text-lg group-hover:text-blue-300 transition-colors duration-300"></i>
            </a>
          </div>
        </section>

        {/* About Section */}
        <AboutMe />
      </main>
    </>
  );
}
