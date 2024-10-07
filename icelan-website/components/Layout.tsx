"use client";
import { useState } from "react";
import Navigation from "./Navigation";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <html lang="en">
      { /* Note: head is added automatically with specified metadata */ }
      <body className={`${menuOpen ? "no-scroll" : ""}`}>
        <Navigation
          isOpen={menuOpen}
          toggleMenu={toggleMenu}
        />
        <main>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}