import "../globals.css"

export const metadata = {
    title: "Nextjs Blogs -Dashboard",
    description: "nextjs blog dashboard",
};

export default function DashboardLayout({ children }) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}