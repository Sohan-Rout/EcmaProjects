const Footer = () => {
    return (
      <footer className="bg-black text-white py-10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400 mb-4">
            © 2023 EcmaProjects. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="hover:text-blue-400 transition duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition duration-300">Terms of Service</a>
            <a href="#" className="hover:text-blue-400 transition duration-300">Contact Us</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;