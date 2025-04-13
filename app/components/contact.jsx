const ContactUs = () => {
    return (
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Get in Touch</h2>
          <form className="max-w-md mx-auto space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 bg-black border border-gray-700 rounded-md focus:outline-none focus:border-blue-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 bg-black border border-gray-700 rounded-md focus:outline-none focus:border-blue-400"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full px-4 py-3 bg-black border border-gray-700 rounded-md focus:outline-none focus:border-blue-400"
            ></textarea>
            <button
              type="submit"
              className="bg-white text-black px-6 py-3 rounded-md text-lg font-medium hover:bg-gray-200 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
  };
  
  export default ContactUs;