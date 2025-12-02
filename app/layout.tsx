import type { Metadata } from "next";
import "./globals.css";
import HeaderWrapper from "./components/HeaderWrapper";  // ← Nouveau composant

export const metadata: Metadata = {
  title: "Adaverse",
  description: "Plateforme de projets Ada Tech School",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        {/* Header global */}
        <HeaderWrapper />
        {children}
      </body>
    </html>
  );
}
