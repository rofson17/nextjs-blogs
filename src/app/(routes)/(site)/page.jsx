import Link from "next/link";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[89vh] bg-gradient-to-b from-white to-gray-100 text-gray-800 px-4">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center">
        Welcome to Our Blog
      </h1>
      <p className="text-lg mt-4 text-center max-w-2xl">
        Discover insightful articles, tutorials, and the latest updates from our expert writers.
      </p>
      <div className="mt-6 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <Link href="/blog" className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition text-lg">
          Read Blog
        </Link>
        <Link href="/about" className="px-6 py-3 bg-gray-600 text-white rounded-lg shadow hover:bg-gray-700 transition text-lg">
          About Us
        </Link>
      </div>
    </div>
  );
};

export default Home;