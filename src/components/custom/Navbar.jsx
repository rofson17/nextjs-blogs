"use client"
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaUser } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <nav className="bg-blue-600 p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-white text-xl font-bold">
                    NextJsBlogs
                </Link>

                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                <div className={`absolute top-16 left-0 w-full bg-blue-600 md:bg-transparent md:static md:flex md:items-center md:space-x-6 md:ml-auto md:justify-end ${isOpen ? "flex flex-col items-center py-4" : "hidden"}`}>
                    <div className="md:flex md:space-x-6">
                        <Link href="/about" className="text-white px-4 py-2 hover:bg-blue-700 md:hover:bg-transparent md:hover:text-gray-300 w-full text-center md:w-auto">About</Link>
                        <Link href="/contact" className="text-white px-4 py-2 hover:bg-blue-700 md:hover:bg-transparent md:hover:text-gray-300 w-full text-center md:w-auto">Contact</Link>
                        <Link href="/dashboard" className="text-white px-4 py-2 hover:bg-blue-700 md:hover:bg-transparent md:hover:text-gray-300 w-full text-center md:w-auto">Dashboard</Link>
                        <Link href="/profile" className="text-white px-4 py-2 hover:bg-blue-700 md:hover:bg-transparent md:hover:text-gray-300 w-full text-center md:w-auto flex justify-center md:justify-start">
                            <FaUser size={24} />
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar