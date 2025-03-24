import "../globals.css"

export const metadata = {
    title: "Nextjs Blogs -Auth",
    description: "nextjs blog auth page",
};

export default function AuthLayout({ children }) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}