import React from 'react'



export default function Blog() {
  return (
    <div className="min-h-[85.7vh] bg-gray-100">
    {/* Header */}


    {/* Main Content */}
    <main className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">All Blog Posts</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="src/assets/blog11.webp" alt="Post" className="w-full h-48 object-cover"/>
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-800">Web Designing</h2>
            <p className="text-gray-700 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="#" className="text-indigo-600 hover:text-indigo-800 mt-4 block">Read more</a>
          </div>
        </article>
        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="src/assets/blog12.jpeg" alt="Post" className="w-full h-48 object-cover"/>
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-800">Web Development</h2>
            <p className="text-gray-700 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="#" className="text-indigo-600 hover:text-indigo-800 mt-4 block">Read more</a>
          </div>
        </article>
        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="src/assets/blog13.png" alt="Post" className="w-full h-48 object-cover"/>
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-800">Python Development</h2>
            <p className="text-gray-700 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="#" className="text-indigo-600 hover:text-indigo-800 mt-4 block">Read more</a>
          </div>
        </article>
        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="src/assets/bolg14.jpeg" alt="Post" className="w-full h-48 object-cover"/>
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-800">Cyber Security</h2>
            <p className="text-gray-700 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="#" className="text-indigo-600 hover:text-indigo-800 mt-4 block">Read more</a>
          </div>
        </article>
        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="src/assets/blog15.png" alt="Post" className="w-full h-48 object-cover"/>
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-800">Marketing</h2>
            <p className="text-gray-700 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="#" className="text-indigo-600 hover:text-indigo-800 mt-4 block">Read more</a>
          </div>
        </article>
        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="src/assets/bolg16.jpeg" alt="Post" className="w-full h-48 object-cover"/>
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-800">Word Press</h2>
            <p className="text-gray-700 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="#" className="text-indigo-600 hover:text-indigo-800 mt-4 block">Read more</a>
          </div>
        </article>
      </div>
    </main>
  </div>
  )
}
