"use client";
import Navbar from "../../components/navbar";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";

const MeetTheTeam = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl mt-16 font-bold text-gray-900 mb-4">Meet Our <span className="text-amber-500">Team</span></h1>
          <p className="text-lg text-gray-600">
            The passionate people behind our success
          </p>
        </div>

        {/* All Team Members in One Line */}
        <section className="mb-20">
          <div className="flex flex-nowrap overflow-x-auto pb-4 gap-8 px-4">
            {/* Founder 1 */}
            <div className="flex-shrink-0 bg-white p-6 rounded-lg shadow-md text-center w-64">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-100">
                <Image
                  src="/founder1.jpg"
                  alt="Vaibhav Jamloki"
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Vaibhav Jamloki</h3>
              <p className="text-blue-600 font-medium mb-2">Co-founder</p>
              <p className="text-gray-600 mb-4 text-sm">
                Blending creativity with strategy to grow our brand and reach.
              </p>
              <a
                href="https://www.linkedin.com/in/vaibhav-jamloki/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
              >
                <FaLinkedin size={24} />
              </a>
            </div>

            {/* Founder 2 */}
            <div className="flex-shrink-0 bg-white p-6 rounded-lg shadow-md text-center w-64">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-100">
                <Image
                  src="/founder2.jpg"
                  alt="Sohan Rout"
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Sohan Rout</h3>
              <p className="text-blue-600 font-medium mb-2">Founder</p>
              <p className="text-gray-600 mb-4 text-sm">
                The mind behind the vision, shaping the foundation and direction.
              </p>
              <a
                href="https://www.linkedin.com/in/sohan-rout/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
              >
                <FaLinkedin size={24} />
              </a>
            </div>

            {/* Removed Team Member 1 (Vinay Singh Shekhawat) */}
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <h2 className="text-xl font-semibold mb-4">Want to join us?</h2>
          <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700">
            Contact Us
          </button>
        </div>
      </div>
    </main>
  );
};

export default MeetTheTeam;
