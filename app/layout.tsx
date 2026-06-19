import type { Metadata } from "next";
import "./globals.scss";
import NavBar from "./components/NavBar";

export const metadata: Metadata = {
  title: "Gideon-Grey | Portfolio",
  description: "Senior Frontend Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="particles" aria-hidden="true">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particleSquare"></div>
          <div className="particleSquare"></div>
          <div className="particleSquare"></div>
          <div className="particleSquare"></div>
          <div className="particleSquare"></div>
          <div className="particleSquare"></div>
          <div className="particleSquare"></div>
        </div>

        <div className="content">
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}