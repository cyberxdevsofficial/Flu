import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "DTZ API HUB",
  description: "DarkTech Zone API Hub",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}