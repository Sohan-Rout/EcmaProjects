import Link from 'next/link';

const blogPosts = [
  {
    slug: 'how-new-ecmascript-features-work-under-the-hood',
    title: 'How New ECMAScript Features Work Under the Hood',
    excerpt: 'Explore the TC39 proposal process and compare older vs. newer JS syntax.',
    tags: ['#javascript', '#ecmascript', '#tc39'],
    date: '2024-06-01',
    coverImage: '/blog/covers/ecmascript-features.jpg',
  },
  {
    slug: 'modern-javascript-patterns-you-should-use',
    title: 'Modern JavaScript Patterns You Should Use',
    excerpt: 'Learn about private class fields, nullish coalescing, and optional chaining.',
    tags: ['#javascript', '#patterns', '#tutorial'],
    date: '2024-05-15',
    coverImage: '/blog/covers/js-patterns.jpg',
  },
  // Add more posts as needed
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-12 font-sans">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="block rounded-lg bg-gray-200 p-6 shadow-lg hover:shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
            {post.coverImage && (
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
            )}
            <h2 className="text-xl font-mono font-semibold text-amber-600 hover:underline mb-2">{post.title}</h2>
            <p className="text-gray-900 mb-4">{post.excerpt}</p>
            <div className="flex flex-wrap gap-2 mb-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm text-amber-500 cursor-pointer hover:underline"
                >
                  {tag}
                </span>
              ))}
            </div>
            <time className="text-xs text-gray-600">{new Date(post.date).toLocaleDateString()}</time>
          </Link>
        ))}
      </div>
    </main>
  );
}