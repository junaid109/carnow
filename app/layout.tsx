import "./globals.css";

import { Footer, NavBar } from "@components";

export const metadata = {
  title: "Car Hub 2024",
  description: "Discover world's best car's",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='relative'>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
