const FeaturedProjects = () => {
  const projects = [
    {
      id: 1,
      title: "AI Chatbot",
      description: "ML-powered natural language processing",
      image: "/ai-chatbot.jpg",
      repoLink: "https://github.com/example/chatbot",
      authorName: "john_doe",
      authorLink: "https://github.com/johndoe",
      tags: ["AI", "Python"]
    },
    {
      id: 2,
      title: "E-commerce",
      description: "Full-stack with payment integration",
      image: "/ecommerce-platform.jpg",
      repoLink: "https://github.com/example/ecommerce",
      authorName: "jane_smith",
      authorLink: "https://github.com/janesmith",
      tags: ["React", "Node"]
    },
    {
      id: 3,
      title: "Portfolio Builder",
      description: "Drag-and-drop interface",
      image: "/portfolio-builder.jpg",
      repoLink: "https://github.com/example/portfolio",
      authorName: "alex_johnson",
      authorLink: "https://github.com/alexjohnson",
      tags: ["Next.js", "Tailwind"]
    },
  ];

  return (
    <section className="bg-gray-50 text-gray-900 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 font-poppins">
            <span className="text-amber-500">/</span>featured_projects
          </h2>
          <p className="text-gray-500 mx-auto font-mono text-xs">
            Notable projects from our community
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group"
            >
              {/* Image */}
              <div className="h-40 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="text-[0.65rem] font-mono bg-gray-100 text-gray-600 px-2 py-0.5 rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Title & Description */}
                <h3 className="text-lg font-semibold mb-1 font-poppins group-hover:text-amber-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-3 text-xs leading-snug">
                  {project.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between border-t border-gray-100 pt-3">
                  {/* Author */}
                  <a
                    href={project.authorLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[0.7rem] font-mono text-gray-500 hover:text-amber-500 transition-colors flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-1.5"></span>
                    @{project.authorName}
                  </a>

                  {/* Repo Link */}
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[0.7rem] font-mono flex items-center text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    view_repo
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-2.5 w-2.5 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <a
            href="#all-projects"
            className="inline-block font-mono text-xs border border-gray-300 text-gray-500 hover:bg-gray-100 px-5 py-2 rounded-full transition-colors"
          >
            view_all →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;