import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons'; // Import the chat icon

export default function Footer() {
    const [chatOpen, setChatOpen] = useState(false);

    const toggleChat = () => {
        setChatOpen(!chatOpen);
    };



    return (
        <footer className="bg-white border-y">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link to="/" className="flex items-center">
                            <div className="flex items-center">
                                <span className="text-black text-2xl font-bold mr-2">Kishan</span>
                                <span className="text-red-600 text-2xl font-bold">Bazaar</span>
                            </div>
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="hover:underline">
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow us</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <a
                                        href="https://github.com/Thakurabhaypratap"
                                        className="hover:underline"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Github
                                    </a>
                                </li>
                                <li>
                                    <Link to="/" className="hover:underline">
                                        Discord
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <Link to="#" className="hover:underline">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:underline">
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>







                <hr className=" border-gray-200 sm:mx-auto lg:" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center">
                        © 2024 ThakurAbhay. All Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                        {/* Social icons */}
                    </div>
                </div>
            </div>
            {/* Chatbox Icon */}
            <Link to="/chat" className="fixed right-5 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600">
                <FontAwesomeIcon icon={faCommentDots} size="lg" /> {/* FontAwesome chat icon */}
                <span className="sr-only">Chat</span>
            </Link>

















           
            
            {/* Chatbox Icon */}
            <button
                onClick={toggleChat}
                className="fixed bottom-5 right-5 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none"
            >
                <FontAwesomeIcon icon={faCommentDots} size="lg" />
                <span className="sr-only">Chat</span>
            </button>

            {/* Chatbox */}
            {chatOpen && (
                <div className="fixed bottom-20 right-5 w-80 bg-white border border-gray-300 rounded-lg shadow-lg">
                    <div className="bg-blue-500 text-white p-4 rounded-t-lg">
                        <h3 className="font-semibold">Chat with us</h3>
                    </div>
                    <div className="p-4 max-h-60 overflow-y-auto">
                        {/* Chat messages */}
                        <div className="text-gray-700 mb-2">Hello! How can we help you today?</div>
                        {/* Add more messages as needed */}
                    </div>
                    <div className="p-4 border-t border-gray-300">
                        <input
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none"
                            placeholder="Type your message..."
                        />
                    </div>
                </div>
            )}














        </footer>
    );
}
