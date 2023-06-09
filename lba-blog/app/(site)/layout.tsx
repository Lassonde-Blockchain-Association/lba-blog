import "../globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import CategoryTab from "./components/CategoryTab";
import FeaturedSidebar from "./components/FeaturedSidebar";
import Providers from "./providers";
import Head from "next/head";


export const metadata = {
  title: "Lassonde Blockchain Blog",
  description: "Generated by LasDevers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>
          <Providers>
            <Navbar />
            {children}
            <Footer />
          </Providers>
        </main>
      </body>
    </html>
  );
}