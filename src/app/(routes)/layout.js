import Navbar from "@/components/custom/Navbar";

export const metadata = {
    title: "Nextjs Blogs -Auth",
    description: "nextjs blog ",
};

export default function MainLayout({ children }) {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    );
}