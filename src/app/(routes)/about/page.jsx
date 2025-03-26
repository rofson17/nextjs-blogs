import Image from 'next/image';
import { FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

const About = () => {
    return (
        <>

            <div className="max-w-3xl mt-20 mx-auto p-6 text-center">
                <h1 className="text-4xl font-bold mb-4">About Us</h1>
                <div className="flex justify-center mb-4">
                    <Image
                        src="/sasuke.jpg"
                        alt="Profile Picture"
                        width={150}
                        height={150}
                        className="rounded-full"
                    />
                </div>
                <p className="text-lg text-gray-700 mb-4">
                    Welcome to <span className="font-semibold">NextJs Blog</span>, your go-to source for insightful articles and engaging content. We are passionate about sharing knowledge, experiences, and stories that inspire and inform.
                </p>
                <div className="flex justify-center space-x-4 mt-4">
                    <a href="mailto:example@email.com" target="_blank" rel="noopener noreferrer">
                        <FaEnvelope className="text-2xl text-red-600 hover:text-red-500" />
                    </a>
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-2xl text-gray-700 hover:text-gray-900" />
                    </a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="text-2xl text-gray-700 hover:text-gray-900" />
                    </a>
                </div>
            </div>
        </>
    );
};

export default About;
