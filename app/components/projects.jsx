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
    <section className="bg-gray-25 text-gray-900 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="font-mono text-sm text-amber-500 tracking-wider mb-2 block">
            SHOWCASE
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-poppins">
            Featured <span className="text-amber-500">Projects</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Exceptional work from our developer community
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-xs hover:shadow-sm transition-all duration-300 border border-gray-100 group"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="text-xs font-mono bg-gray-50 text-gray-600 px-2 py-1 rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold mb-2 font-poppins group-hover:text-amber-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {project.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  {/* Author */}
                  <a
                    href={project.authorLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-gray-500 hover:text-amber-500 transition-colors flex items-center"
                  >
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                    @{project.authorName}
                  </a>

                  {/* Repo Link */}
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono flex items-center text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    view_repo
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 ml-1 transition-transform group-hover:translate-x-1"
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
        <div className="text-center mt-16">
          <a
            href="#all-projects"
            className="inline-flex items-center font-mono text-sm border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-full transition-colors"
          >
            View all projects
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5 ml-2"
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
    </section>
  );
};

export default FeaturedProjects;