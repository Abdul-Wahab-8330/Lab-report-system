import React from 'react';
import Navbar from './Navbar';

const About = () => {
    return (
        <div className='dark:bg-slate-900 dark:text-white min-h-screen'>
            <div>
                <Navbar />
            </div>
            <br /><br /><br /><br />
            <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg dark:bg-slate-900 dark:text-white dark:border dark:border-slate-500">
                <h1 className="text-3xl font-bold text-center mb-4">About Us</h1>
                <p className="text-lg text-gray-700 dark:text-gray-300 text-center">
                    Welcome to our platform! We are dedicated to providing high-quality services and ensuring customer satisfaction. 
                    Our mission is to deliver innovative solutions with a focus on excellence and efficiency.
                </p>
                <br />
                <h2 className="text-xl font-semibold">Our Vision</h2>
                <p className="text-gray-700 dark:text-gray-300">
                    We strive to be a leader in our industry by leveraging technology and creativity to enhance user experiences.
                </p>
                <br />
                <h2 className="text-xl font-semibold">Our Team</h2>
                <p className="text-gray-700 dark:text-gray-300">
                    Our team consists of experienced professionals committed to delivering outstanding results and pushing boundaries in innovation.
                </p>
                <br />
                <h2 className="text-xl font-semibold">Get in Touch</h2>
                <p className="text-gray-700 dark:text-gray-300">
                    If you have any questions, feel free to <a href="https://wa.me/923231213637?text=Hello%2C%20I%20need%20some%20help!" className="text-blue-500 hover:underline">contact us</a>. We'd love to hear from you!
                </p>
            </div>
        </div>
    );
}

export default About;
