"use client"
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import NavLink from "./NavLink";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <nav className="bg-gray-100 p-2 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-xl font-semibold flex justify-around items-center">
                    <Image src="/logo.png" alt="logo" height={48} width={48} />
                    Blogs
                </Link>

                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                <div className={`absolute top-13 left-0 w-full bg-gray-300 md:bg-transparent md:static md:flex md:items-center md:space-x-6 md:ml-auto md:justify-end ${isOpen ? "flex flex-col items-center py-3" : "hidden"}`}>
                    <div className="md:flex md:space-x-6">
                        <NavLink label="Blogs" href="/blogs" />
                        <NavLink label="About" href="/about" />
                        <NavLink label="Contact" href="/contact" />

                        <Link href="/dashboard/users" className="px-4 py-2 md:hover:bg-transparent hover:text-blue-600 w-full text-center md:w-auto">Dashboard</Link>
                        <Link href="/profile/rofson" className="px-4 py-2 md:hover:bg-transparent hover:text-blue-600 w-full text-center md:w-auto flex justify-center md:justify-start">
                            <Image src="/profile.jpg" alt="" height={35} width={35} className="bg-cover rounded-full border-2 border-blue-600" />
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar