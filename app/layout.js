import { Poppins, Roboto } from "next/font/google";
import "./globals.css";
import { BlogsProvider } from "@/Context/blogcontext"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/next"

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Specify the weights you need
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Specify the weights you need
});

export const metadata = {
  title: "Fashion Mane | Fashion Blog & Trends",
  description: "Fashion Mane is a modern blogging website sharing the latest in fashion, style, and trends. Discover outfits, hairstyles, and more!",
  keywords: [
    "fashionmane",
    "fashion mane",
    "fashion blog",
    "style",
    "trends",
    "outfits",
    "hairstyles",
    "blogging",
    "modern fashion",
    "latest fashion",
    "fashion news"
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
 

      <body
        className={`${poppins.variable} ${roboto.variable}  antialiased`}

      >
        <Analytics />
        <Navbar />
        <BlogsProvider>

          {children}
        </BlogsProvider>
        <Footer />

      </body>
    </html>
  );
}
