import { Navbar } from "@/components/navbar";

export default function Blog() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-black via-black to-gray-900">
        {/* Content with top padding to account for fixed navbar */}
        <div className="relative pt-24 pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
              Blog
            </h1>
            <p className="text-xl text-white/60 mb-12">
              Articles about web development, design, and technology.
            </p>

            {/* Blog Posts */}
            <div className="space-y-6">
              {[
                {
                  title: "Getting Started with Next.js 16",
                  date: "Apr 11, 2026",
                  excerpt: "Learn the basics of Next.js and how to create your first application.",
                },
                {
                  title: "Tailwind CSS v4.0: What's New?",
                  date: "Apr 10, 2026",
                  excerpt: "Exploring new features and improvements in Tailwind CSS v4.0.",
                },
                {
                  title: "Building Interactive Components",
                  date: "Apr 9, 2026",
                  excerpt: "Tips and tricks for creating dynamic and responsive React components.",
                },
                {
                  title: "Web Performance Optimization",
                  date: "Apr 8, 2026",
                  excerpt: "Best practices for optimizing your web applications for speed.",
                },
              ].map((post, i) => (
                <article
                  key={i}
                  className="group rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10 transition-all hover:border-white/20 cursor-pointer"
                >
                  <div className="flex flex-col">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-white/90">
                      {post.title}
                    </h3>
                    <p className="text-sm text-white/50 mb-3">{post.date}</p>
                    <p className="text-white/60">{post.excerpt}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
