import HeroImg from "@/assets/images/hero.jpg";
import EduLinker from "@/assets/images/edulinker.png"; // You can replace this with your own logo

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32 text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Developer, Designer, Learner, Dreamer
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            {/* Left Image Section */}
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="Sanni Kumar hero"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            {/* Right Text Section */}
            <div className="relative space-y-4">
              <p className="text-white">
                Hi, I'm <strong className="text-white font-semibold">Sanni Kumar</strong> — a passionate Web Developer and UI/UX enthusiast from Bihar, currently pursuing MCA from RIT Roorkee. I love bringing ideas to life through code, design, and animation.
              </p>
              <p className="text-white">
                With hands-on experience in technologies like HTML, CSS, JavaScript, React, MySQL, and MongoDB, I enjoy crafting elegant interfaces and solving real-world problems. I'm also exploring the world of DevOps using Linux, GitHub, and cloud services like AWS.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I believe in continuous learning, hard work, and pushing creative boundaries. Whether it’s through building a responsive website, designing with glassmorphism, or animating with GSAP, I aim to create digital experiences that leave an impact.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Sanni Kumar, Creator of
                    </cite>
                    <div className="flex items-center gap-2">
                      <img
                        className="h-5 w-fit"
                        src={EduLinker} // Optional: replace with your logo or remove if not needed
                        alt="Sanni's Brand Logo"
                        height="20"
                        width="auto"
                      />
                      <span className="text-white">EduLinker, RaktSetu & More</span>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
