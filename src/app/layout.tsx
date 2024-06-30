import type { Metadata } from "next";
import { Inter,Roboto,Poppins } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });
const roboto = Poppins({ subsets: ["latin"],weight:[
  '100',
  '300',
  '400'
] });


export const metadata: Metadata = {
  title: "Furqan Ahmad",
  description: "A Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} dark:bg-gray-900`}>
        <Providers>

          {children}
        </Providers>
      </body>
    </html>
  );
}
