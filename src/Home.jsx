import React from 'react'

export default function Home() {
  return (
    <div className="min-h-[85.7vh] bg-gray-100">
    {/* Hero Section */}
    <section className="bg-gray-200 py-12">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to My Blog</h1>
        <p className="text-gray-700 mt-4">Insights, stories, and tips from a passionate writer</p>
      </div>
    </section>

    {/* Blog Posts */}
    <main className="container mx-auto px-6 py-5">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Latest Posts</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="src/assets/blog1.avif" alt="Post" className="w-full h-48 object-cover"/>
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800">Blog Post Title</h3>
            <p className="text-gray-700 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="#" className="text-indigo-600 hover:text-indigo-800 mt-4 block">Read more</a>
          </div>
        </article>
        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="src/assets/blog2.avif" alt="Post" className="w-full h-48 object-cover"/>
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800">Blog Post Title</h3>
            <p className="text-gray-700 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="#" className="text-indigo-600 hover:text-indigo-800 mt-4 block">Read more</a>
          </div>
        </article>
        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="src/assets/blog3.webp" alt="Post" className="w-full h-48 object-cover"/>
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800">Blog Post Title</h3>
            <p className="text-gray-700 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="#" className="text-indigo-600 hover:text-indigo-800 mt-4 block">Read more</a>
          </div>
        </article>
      </div>
    </main>
  </div>
  )
}
