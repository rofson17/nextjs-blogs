"use client"
import { useRouter } from "next/navigation";

const NotFoundPage = () => {
    const router = useRouter();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-800">
            <svg
                className="w-32 h-32 text-gray-500 animate-bounce"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
            >
                <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm1 15h-2v-2h2zm0-4h-2V7h2z" />
            </svg>
            <h1 className="text-6xl font-bold">404</h1>
            <p className="text-xl mt-4 text-center px-4 md:px-0">
                Oops! The page you're looking for doesn't exist.
            </p>
            <div className="mt-6 flex space-x-4">
                <button
                    onClick={() => router.back()}
                    className="px-4 py-2 bg-gray-600 text-white rounded-lg shadow hover:bg-gray-700 transition"
                >
                    Go Back
                </button>
                <a
                    href="/"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
                >
                    Go Home
                </a>
            </div>
        </div>
    );
};

export default NotFoundPage;
