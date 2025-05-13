import { useState } from 'react';
import { FiSend, FiCheck, FiAlertCircle, FiUser, FiMail, FiMessageSquare } from 'react-icons/fi';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({
    success: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ success: false, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ success: true, message: 'Message sent successfully!' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(data.message || 'Failed to send message');
      }
    } catch (error) {
      setStatus({ success: false, message: error.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-white text-gray-900 py-24 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <span className="font-mono text-sm text-amber-500 tracking-wider mb-2 block">
            GET IN TOUCH
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-poppins">
            Contact Us
          </h2>
          <p className="text-gray-600">
            Have questions or want to collaborate? We'd love to hear from you.
          </p>
        </div>

        <div className="bg-gray-50 rounded-xl p-8 shadow-sm border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiUser className="text-gray-400" />
              </div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiMail className="text-gray-400" />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>

            <div className="relative">
              <div className="absolute top-3 left-3">
                <FiMessageSquare className="text-gray-400" />
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="5"
                required
                className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full px-6 py-3 rounded-lg font-medium flex items-center justify-center space-x-2 transition-all ${isSubmitting
                  ? 'bg-amber-600 cursor-not-allowed'
                  : 'bg-amber-500 hover:bg-amber-600 shadow hover:shadow-md'
                }`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Sending...</span>
                </>
              ) : status.success ? (
                <>
                  <FiCheck className="text-white" />
                  <span>Message Sent!</span>
                </>
              ) : (
                <>
                  <FiSend className="text-white" />
                  <span>Send Message</span>
                </>
              )}
            </button>

            {status.message && !status.success && (
              <div className="flex items-center text-red-500 text-sm p-3 bg-red-50 rounded-lg border border-red-100">
                <FiAlertCircle className="mr-2" />
                {status.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;