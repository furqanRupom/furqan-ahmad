import type { Metadata } from "next";
import { Inter,Roboto,Poppins,Baloo_2,Lato } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import CustomCursor from "@/animation/custom/Cursor";
import SmoothScroll from "@/animation/hooks/smoothScroll";
import {Toaster} from "sonner"

const inter = Inter({ subsets: ["latin"] });
const roboto = Poppins({ subsets: ["latin"],weight:[
  '100',
  '300',
  '400'
] });

const baloo = Baloo_2({
  subsets: ["latin"], weight: [
    '500',
    '700',
    '400'
  ]
});
const lato = Lato({
  subsets: ["latin"], weight: [
    '100',
    '700',
    '400'
  ]
})


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
    <html   lang="en" className="scroll-smooth" >
      <body className={`${baloo.className} dark:bg-gray-900`}>
          <Providers>
            {children}
          <Toaster position="top-center" toastOptions={{
            style: {
              border: '1px solid transparent'
            },
            classNames: {
              toast: 'dark:bg-gray-900 bg-gray-200 bg-opacity-10',
              title: 'text-red-400',
              icon: 'dark:text-white',
            }
          }} />
          </Providers>
      </body>
    </html>
  );
}
