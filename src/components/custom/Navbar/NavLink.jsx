"use client"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation";

const NavLink = ({ href, label }) => {
    const pathname = usePathname();


    return (
        <Link
            href={href}
            className={cn(
                "px-4 py-2 md:hover:bg-transparent hover:text-blue-600 w-full text-center md:w-auto",
                pathname === href && "font-semibold"
            )}>
            {label}
        </Link >
    )
}

export default NavLink