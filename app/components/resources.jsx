import { FiArrowRight, FiBook, FiTool, FiBriefcase, FiExternalLink } from 'react-icons/fi';
import { FaChartLine, FaTools, FaUserTie } from 'react-icons/fa';

const Resources = () => {
  const resources = [
    { 
      id: 1, 
      title: "Project Marketing Guide", 
      description: "Learn how to effectively showcase your work",
      link: "#",
      icon: <FaChartLine className="text-amber-500" size={28} />
    },
    { 
      id: 2, 
      title: "Developer Toolbox", 
      description: "Essential tools for modern development",
      link: "#",
      icon: <FaTools className="text-amber-500" size={28} />
    },
    { 
      id: 3, 
      title: "Portfolio Masterclass", 
      description: "Build an impressive developer portfolio",
      link: "#",
      icon: <FaUserTie className="text-amber-500" size={28} />
    },
  ];

  return (
    <section className="bg-gray-50 text-gray-900 py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-sm text-amber-500 tracking-wider mb-2 block">
            <FiBook className="inline mr-2" />
            DEVELOPER RESOURCES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-poppins">
            Grow Your <span className="text-amber-500">Skills</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Curated resources to help you showcase your best work and advance your career
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((resource) => (
            <a
              key={resource.id}
              href={resource.link}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 hover:border-amber-100"
            >
              <div className="p-6">
                <div className="w-12 h-12 flex items-center justify-center bg-amber-50 rounded-lg mb-4">
                  {resource.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 font-poppins group-hover:text-amber-500 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-gray-600 mb-6">{resource.description}</p>
                <div className="flex items-center text-amber-500 font-mono text-sm">
                  Explore resource
                  <FiArrowRight className="ml-1.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#all-resources"
            className="inline-flex items-center font-mono text-sm border border-gray-300 text-gray-700 hover:bg-gray-100 px-6 py-3 rounded-full transition-colors"
          >
            View all resources
            <FiExternalLink className="ml-2" size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resources;