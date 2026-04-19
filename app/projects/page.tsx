import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { PinContainer } from "@/components/ui/3d-pin";
import { WavyBackground } from "@/components/ui/wavy-background";

const projects = [
  {
    id: 1,
    title: "Agrisense",
    description: "A SwiftUI and Firebase-powered iOS app that delivers AI-driven assistance, real-time market insights, crop management, and farmer networking in a single unified platform.",
    tags: ["SwiftUI", "Firebase"],
    href: "#",
    gradient: "from-violet-500 via-purple-500 to-blue-500",
    image: "/agrisense.png",
  },
  {
    id: 2,
    title: "Sentiment Analyzer",
    description: "An advanced multilingual sentiment analysis engine for YouTube comments with support for English, Hindi, Hinglish, and mixed-language text.",
    tags: ["JavaScript", "YouTube API"],
    href: "#",
    gradient: "from-cyan-500 via-blue-500 to-purple-500",
    image: "/sentiment-analyzer.png",
  },
  {
    id: 3,
    title: "Krishi AI",
    description: "AI powered voice assistant for Farmers",
    tags: ["React", "TypeScript"],
    href: "#",
    gradient: "from-pink-500 via-rose-500 to-red-500",
    image: "/krishi-ai.png",
  },
  {
    id: 4,
    title: "Clone IT",
    description: "It is the place where you can clone MAANG websites",
    tags: ["HTML", "JavaScript"],
    href: "#",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    image: "/clone-it.png",
  },
];

export default function Projects() {
  return (
    <>
      <Navbar />
      <WavyBackground>
        {/* Content with top padding to account for fixed navbar */}
        <div className="pt-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Projects Grid with 3D Pins - Centered */}
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl">
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="flex justify-center items-start overflow-hidden"
                  >
                    <div className="w-full max-w-xs">
                      <PinContainer
                        title={project.title}
                        href={project.href}
                      >
                        <div className="flex flex-col p-3 w-[14rem]">
                          {/* Project Preview - Vertical Rectangle */}
                          {project.image ? (
                            <Image
                              src={project.image}
                              alt={project.title}
                              width={64}
                              height={96}
                              className="w-16 h-24 rounded-lg mb-3 mx-auto object-cover"
                            />
                          ) : (
                            <div className={`w-16 h-24 rounded-lg bg-gradient-to-br ${project.gradient} mb-3 mx-auto`} />
                          )}

                          {/* Project Info */}
                          <h3 className="!pb-1 !m-0 font-bold text-sm text-slate-100 text-center">
                            {project.title}
                          </h3>
                          <p className="text-xs !m-0 !p-0 font-normal text-slate-400 mb-2 text-center line-clamp-2">
                            {project.description}
                          </p>

                          {/* Tech Tags */}
                          <div className="flex gap-2 flex-wrap justify-center">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-white/70"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </PinContainer>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </WavyBackground>
    </>
  );
}
