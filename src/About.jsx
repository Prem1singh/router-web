import React from 'react'

export default function About() {
  return (
    <div className="h-[85.7vh] bg-gray-100">
      {/* Main Content */}
      <main className="h-[85.7vh] container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">About Me</h1>
        <div className="bg-white p-6 rounded-lg shadow-md h-[70vh]">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <img
                src="src/assets/profile.jpeg"
                alt="Author"
                className="rounded-lg shadow-md w-full h-[60vh] "
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Hello, I'm Prem Singh</h2>
              <p className="text-gray-700 mb-4">
                Welcome to my blog! I'm a passionate writer, avid traveler, and lifelong learner. I love to share my
                experiences and insights on a variety of topics including travel, lifestyle, and personal development.
              </p>
              <p className="text-gray-700 mb-4">
                Through this blog, I aim to inspire and motivate others to pursue their dreams and live their best lives.
                Whether you're looking for travel tips, personal growth strategies, or just some inspiration, you'll find
                it here.
              </p>
              <p className="text-gray-700">
                Thank you for visiting my blog. I hope you enjoy reading my posts as much as I enjoy writing them. Feel
                free to connect with me on social media or reach out via the contact page. Happy reading!
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
