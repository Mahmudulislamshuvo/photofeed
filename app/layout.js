import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "PhotoFeed",
  description: "A Photo Feed app built with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Navbar />
        <div className="container my-4 lg:my-8">{children}</div>
      </body>
    </html>
  );
}
