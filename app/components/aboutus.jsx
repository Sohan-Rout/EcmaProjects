import Link from "next/link";

const AboutUs = () => {
  return (
    <section className="bg-white text-gray-900 py-24 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-sm text-amber-500 tracking-wider mb-2 block">
            WHO WE ARE
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-poppins">
            Building the <span className="text-amber-500">Future</span> of Developer Showcases
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-6"></div>
        </div>

        {/* Content Container - Centered */}
        <div className="flex flex-col items-center gap-12">
          {/* Text Content */}
          <div className="max-w-xl text-center">
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At <span className="font-semibold text-gray-900">EcmaProjects</span>, we're revolutionizing how developers share their work with the world. Our platform bridges the gap between creativity and opportunity.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start justify-center">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-5 h-5 bg-amber-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <p className="ml-3 text-gray-600">
                  Curated showcase of exceptional developer projects
                </p>
              </div>

              <div className="flex items-start justify-center">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-5 h-5 bg-amber-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <p className="ml-3 text-gray-600">
                  Global community of passionate developers
                </p>
              </div>

              <div className="flex items-start justify-center">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-5 h-5 bg-amber-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <p className="ml-3 text-gray-600">
                  Tools and resources to elevate your work
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/about/learn-more" passHref>
                <button className="px-6 py-3 bg-amber-500 text-white rounded-lg font-medium hover:bg-amber-600 transition duration-300 shadow hover:shadow-md">
                  Learn More
                </button>
              </Link>
              <Link href="/about/meet-the-team" passHref>
                <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition duration-300">
                  Meet the Team
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-24 flex flex-wrap justify-center gap-8 text-center text-gray-400">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 font-mono">10+</div>
            <div className="text-sm uppercase tracking-wider">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 font-mono">5+</div>
            <div className="text-sm uppercase tracking-wider">Developers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 font-mono">1K+</div>
            <div className="text-sm uppercase tracking-wider">Contributions</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
