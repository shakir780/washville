import Navbar from "@/components/Navbar";
import "../styles/globals.css";
import Footer from "@/components/Footer";
import Logo from "../assets/dryCleaningLogo.png";
export const metadata = {
  title: "WashVille | Dry Cleaning Services",
  icons: [{ rel: "icon", url: Logo.src }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
