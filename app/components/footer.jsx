import { FiGithub, FiX, FiMail, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white font-mono">
              <span className="text-amber-500">E</span>cma
              <span className="text-amber-500">P</span>rojects
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering developers to showcase their work and connect with a global community of creators.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <FiGithub size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <FiX size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <FiLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <FiMail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Explore</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors text-sm">Featured Projects</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors text-sm">Developer Resources</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors text-sm">Community Guidelines</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors text-sm">Submit Project</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors text-sm">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors text-sm">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors text-sm">Contact Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors text-sm">Feedback</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors text-sm">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors text-sm">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors text-sm">License</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} EcmaProjects. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-amber-500 transition-colors text-sm">Status</a>
            <a href="#" className="text-gray-500 hover:text-amber-500 transition-colors text-sm">Changelog</a>
            <a href="#" className="text-gray-500 hover:text-amber-500 transition-colors text-sm">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;