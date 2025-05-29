"use client";

import { useState, useEffect } from 'react';

const SubmitProjectPage = () => {
  const [formData, setFormData] = useState({
    githubUsername: '',
    email: '',
    repoLink: '',
    projectDescription: '',
    projectImages: [null, null, null, null],
  });

  const [imagePreviews, setImagePreviews] = useState([null, null, null, null]);

  useEffect(() => {
    return () => {
      imagePreviews.forEach(url => {
        if (url) URL.revokeObjectURL(url);
      });
    };
  }, [imagePreviews]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (index, e) => {
    const file = e.target.files[0];
    setFormData(prev => {
      const newImages = [...prev.projectImages];
      newImages[index] = file;
      return { ...prev, projectImages: newImages };
    });

    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setImagePreviews(prev => {
        const newPreviews = [...prev];
        if (newPreviews[index]) {
          URL.revokeObjectURL(newPreviews[index]);
        }
        newPreviews[index] = previewUrl;
        return newPreviews;
      });
    } else {
      setImagePreviews(prev => {
        const newPreviews = [...prev];
        if (newPreviews[index]) {
          URL.revokeObjectURL(newPreviews[index]);
        }
        newPreviews[index] = null;
        return newPreviews;
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailBody = `
GitHub Username: ${formData.githubUsername}
Email Address: ${formData.email}
GitHub Repository Link: ${formData.repoLink}
Project Description: ${formData.projectDescription}
Project Images: ${formData.projectImages.map((img, i) => img ? img.name : 'No image').join(', ')}
    `;

    const mailtoLink = `mailto:vaibhavjj99@gmail.com?subject=Project Submission&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoLink;
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="bg-black py-4 px-6 flex justify-center">
        <h1 className="text-white text-3xl font-semibold">
          <span>Project </span><span className="text-amber-500">Submission</span>
        </h1>
      </nav>

      {/* Form */}
      <div className="max-w-md mx-auto p-8 text-black">
        <h2 className="text-2xl font-bold mb-6 text-center">Submit Your Project</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="githubUsername" className="block font-semibold mb-1">GitHub Username :-</label>
            <input
              type="text"
              id="githubUsername"
              name="githubUsername"
              value={formData.githubUsername}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-semibold mb-1">Email Address :-</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>
          <div>
            <label htmlFor="repoLink" className="block font-semibold mb-1">GitHub Repository Link :-</label>
            <input
              type="url"
              id="repoLink"
              name="repoLink"
              value={formData.repoLink}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>
          <div>
            <label htmlFor="projectDescription" className="block font-semibold mb-1">Tell us about your project :-</label>
            <textarea
              id="projectDescription"
              name="projectDescription"
              value={formData.projectDescription}
              onChange={handleChange}
              rows={5}
              className="w-full border border-gray-300 rounded px-3 py-2 resize-y focus:outline-none focus:ring-2 focus:ring-amber-400"
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Project Image samples :- <small className="text-gray-500">(can take 4 images max)</small></label>
            <div className="grid grid-cols-2 gap-4">
              {[0,1,2,3].map(i => (
                <div key={i} className="flex flex-col items-center">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageChange(i, e)}
                    className="hidden"
                    id={`file-input-${i}`}
                  />
                  <label htmlFor={`file-input-${i}`} className="cursor-pointer border border-gray-300 rounded p-2 w-full flex justify-center items-center">
                    {imagePreviews[i] ? (
                      <img src={imagePreviews[i]} alt={`Preview ${i+1}`} className="max-h-24 object-contain" />
                    ) : (
                      <span>Choose Image</span>
                    )}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-amber-300 text-black px-6 py-3 rounded font-semibold hover:bg-amber-400 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default SubmitProjectPage;
