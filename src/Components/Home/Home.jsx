 





import React from "react";
import { Link } from "react-router-dom";
import SlidingText from '../SlidingText/SlidingText';
import ImageSlider from '../ImageSlider/ImageSlider'; // Adjust the path as needed

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <SlidingText />
      <ImageSlider />

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />

      <section id="new-features" className="py-8 bg-white sm:py-10 lg:py-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl">
              
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8">
              Enhance your workflow with advanced features
            </p>
          </div>
          <div
            className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24"
          >

            {/* <!-- Feature 1 --> */}
            <div className="md:p-8 lg:p-14 flex flex-col justify-center items-center transition-transform transform hover:scale-105 hover:shadow-lg">
              <div className="w-14 h-14 rounded-full bg-purple-200 flex justify-center items-center">
                <i className="fa-solid fa-arrow-trend-up"></i>
              </div>
              <h3 className="mt-12 text-xl font-bold text-gray-900">Sell</h3>
              <p className="mt-5 text-base text-gray-600">
                Track and analyze your data with powerful analytics tools. Gain valuable insights for better decision-making.
              </p>
            </div>

            {/* <!-- Feature 2 --> */}
            <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 flex flex-col justify-center items-center transition-transform transform hover:scale-105 hover:shadow-lg">
              <div className="w-14 h-14 rounded-full bg-teal-200 flex justify-center items-center">
                <i className="fa-solid fa-arrow-trend-down"></i>
              </div>
              <h3 className="mt-12 text-xl font-bold text-gray-900">Buy</h3>
              <p className="mt-5 text-base text-gray-600">
                Seamlessly integrate with your existing tools and systems for a smooth workflow experience.
              </p>
            </div>

            {/* <!-- Feature 3 --> */}
            <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 flex flex-col justify-center items-center transition-transform transform hover:scale-105 hover:shadow-lg">
              <div className="w-14 h-14 rounded-full bg-yellow-200 flex justify-center items-center">
                <i className="fa-solid fa-question"></i>
              </div>
              <h3 className="mt-12 text-xl font-bold text-gray-900">Issues</h3>
              <p className="mt-5 text-base text-gray-600">
                Ensure the safety of your data with top-notch security features. Your privacy is our priority.
              </p>
            </div>

            {/* <!-- Feature 4 --> */}
            <div className="md:p-8 lg:p-14 md:border-t md:border-gray-200 flex flex-col justify-center items-center transition-transform transform hover:scale-105 hover:shadow-lg">
              <div className="w-14 h-14 rounded-full bg-red-200 flex justify-center items-center">
                <i className="fa-solid fa-users"></i>
              </div>
              <h3 className="mt-12 text-xl font-bold text-gray-900">Account</h3>
              <p className="mt-5 text-base text-gray-600">
                Access your data from anywhere with seamless cloud integration. Work without boundaries.
              </p>
            </div>

            {/* <!-- Feature 5 --> */}
            <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t flex flex-col justify-center items-center transition-transform transform hover:scale-105 hover:shadow-lg">
              <div className="w-14 h-14 rounded-full bg-green-200 flex justify-center items-center">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <h3 className="mt-12 text-xl font-bold text-gray-900">Contect Us</h3>
              <p className="mt-5 text-base text-gray-600">
                Organize your workflow with efficient task management features. Stay on top of your projects effortlessly.
              </p>
            </div>

            {/* <!-- Feature 6 --> */}
            <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t flex flex-col justify-center items-center transition-transform transform hover:scale-105 hover:shadow-lg">
              <div className="w-14 h-14 rounded-full bg-orange-200 flex justify-center items-center">
                <i class="fa-solid fa-gear"></i>
              </div>
              <h3 className="mt-12 text-xl font-bold text-gray-900">Treaning</h3>
              <p className="mt-5 text-base text-gray-600">
                Monitor and measure your performance with comprehensive metrics. Optimize your processes for maximum efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section for embedding YouTube video and title */}
      <div className="flex flex-col sm:flex-row justify-between items-center sm:mt-20">
        {/* Title */}
        <div className="sm:w-1/2 w-full text-center sm:text-left px-4 mt-10 sm:mt-0">
          <h2 className="text-2xl sm:text-3xl font-medium">
            <b>Multilayer Farming</b>
          </h2>
          <p>How can a small farmer earn Rs 15 lakh from multilayer farming?</p>
        </div>

        {/* YouTube Video */}
        <div className="sm:w-1/2 w-full px-4 hover:scale-105">
          <iframe
            width="100%"
            height="300"
            style={{
              marginBottom: '50px', // Added margin bottom
              float: 'right', // Align to the right
              borderRadius: '12px',
              overflow: 'hidden'
            }}
            src="https://www.youtube.com/embed/FyOzeO6fQwI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Section for embedding YouTube video and title */}
      <div className="flex flex-col sm:flex-row justify-between items-center sm:mt-20">
        {/* Title */}
        <div className="sm:w-1/2 w-full text-center sm:text-left px-4 mt-10 sm:mt-0">
          <h2 className="text-2xl sm:text-3xl font-medium">
            <b>"Introducing Kishan Samadhan: Revolutionizing Agriculture with Technology | Project Overview"</b>
          </h2>
          <p>Kishan Samadhan aims to revolutionize agriculture by offering a comprehensive suite of tools and resources for farmers. Here’s what you’ll find in our platform</p>
        </div>

        {/* YouTube Video */}
        <div className="sm:w-1/2 w-full px-4 hover:scale-105">
          <iframe
            width="100%"
            height="300"
            style={{
              marginBottom: '50px', // Added margin bottom
              float: 'right', // Align to the right
              borderRadius: '12px',
              overflow: 'hidden'
            }}
            src="https://www.youtube.com/embed/FyOzeO6fQwI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
