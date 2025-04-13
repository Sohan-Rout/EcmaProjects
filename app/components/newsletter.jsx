import { useState } from 'react';
import { FiMail, FiSend, FiCheck } from 'react-icons/fi';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Here you would integrate with your chosen service
    console.log('Submitted email:', email);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSuccess(true);
    setEmail('');
    setIsSubmitting(false);
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section className="bg-white text-black py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center justify-center bg-gray-800 rounded-full px-4 py-2 mb-4">
          <FiMail className="mr-2 text-amber-500" />
          <span className="font-mono text-sm text-amber-500">STAY UPDATED</span>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">
          Join Our <span className="text-amber-500">Developer</span> Newsletter
        </h2>
        
        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          Get curated project ideas, developer resources, and community updates delivered to your inbox.
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-grow px-4 py-3 rounded-lg bg-white border border-black focus:border-hidden text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-6 py-3 rounded-lg font-medium flex items-center justify-center space-x-2 transition-all ${
                isSubmitting
                  ? 'bg-amber-600 cursor-not-allowed'
                  : 'bg-amber-500 hover:bg-amber-600'
              }`}
            >
              {isSuccess ? (
                <>
                  <FiCheck className="animate-pulse" />
                  <span>Subscribed!</span>
                </>
              ) : (
                <>
                  <FiSend />
                  <span>{isSubmitting ? 'Sending...' : 'Subscribe'}</span>
                </>
              )}
            </button>
          </div>
        </form>
        
        <p className="text-gray-500 text-xs mt-3">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;