import Link from 'next/link';

const Hero = () => {
  return (
    <section className="bg-black text-white relative overflow-hidden min-h-screen">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-gray-900 opacity-90"></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-small-white/[0.04]"></div>
      
      {/* Container */}
      <div className="container mx-auto px-6 py-28 md:py-36 relative z-10 text-center">
        {/* Main Heading with animated gradient */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 font-poppins leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
            Empowering Developers
          </span>
          <br />
          <span className="text-gray-300">to Showcase Their Work</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto font-light">
          Join <span className="font-mono text-amber-400">EcmaProjects</span> and take your projects to the next level with our community-driven platform.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/submit-project">
            <button className="relative bg-amber-500 text-black px-8 py-3.5 rounded-lg text-lg font-medium hover:bg-amber-400 transition-all duration-300 group">
              <span className="relative z-10">Submit Your Project</span>
              <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          </Link>
          <Link href="/projects">
            <button className="relative bg-transparent border border-gray-700 text-white px-8 py-3.5 rounded-lg text-lg font-medium hover:border-amber-400 hover:text-amber-400 transition-all duration-300 group">
              <span className="relative z-10">Explore Projects</span>
              <span className="absolute inset-0 border border-amber-400 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          </Link>
        </div>

        {/* Stats bar */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-gray-400">
          <div className="text-center">
            <div className="text-3xl font-bold text-white font-mono">250+</div>
            <div className="text-sm uppercase tracking-wider">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white font-mono">120+</div>
            <div className="text-sm uppercase tracking-wider">Developers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white font-mono">15K+</div>
            <div className="text-sm uppercase tracking-wider">Contributions</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;