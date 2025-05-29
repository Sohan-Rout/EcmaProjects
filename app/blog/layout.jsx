import React from 'react';

export default function BlogLayout({ children }) {
  return (
    <>
      <nav className="fixed w-full z-50 bg-black py-4 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold font-poppins tracking-wide">
          <span className="text-white">Our </span>
          <span className="text-amber-500">Blogs</span>
        </h1>
      </nav>
      <main className="pt-20 bg-white min-h-screen text-gray-900 px-6 max-w-screen-xl mx-auto font-poppins">
        {children}
      </main>
    </>
  );
}