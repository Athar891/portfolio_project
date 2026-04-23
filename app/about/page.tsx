import { Navbar } from "@/components/navbar";
import LampDemo from "@/components/lamp-demo";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Image from "next/image";

export default function About() {
  return (
    <LampDemo>
      <Navbar />
      {/* Content with top padding to account for fixed navbar */}
      <div className="relative pt-24 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Athar Profile with Gradient Effect */}
          <div className="mb-12">
            <BackgroundGradient className="rounded-[22px] p-8 sm:p-10 bg-white max-w-md">
              <div className="flex justify-center mb-6">
                <Image
                  src="/images/profile.jpg"
                  alt="Athar Profile"
                  width={128}
                  height={128}
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Athar</h3>
              <p className="text-gray-600">
                Full-stack developer passionate about building beautiful and functional web applications.
              </p>
            </BackgroundGradient>
          </div>

          {/* Skills Section Below */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Skills</h3>
            <div className="space-y-4">
              {["React", "TypeScript", "Next.js", "Tailwind CSS", "Node.js", "Web Design"].map(
                (skill) => (
                  <div
                    key={skill}
                    className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
                  >
                    <p className="text-white font-medium">{skill}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </LampDemo>
  );
}
