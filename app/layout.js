import { Geist, Geist_Mono } from "next/font/google";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bookmarks Manangement App",
  description: "create and manage your bookmarks here",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <header className="fixed top-0 left-0 w-full h-16 bg-white z-50 px-8">
            <nav className="flex justify-between items-center p-4 gap-4">
              <Link href="/" className="font-bold">
                Bookmarks
              </Link>
              <div className="flex flex-row space-x-4">
                <SignedOut>
                  <SignInButton>
                    <button className="bg-blue-700 text-white rounded-lg font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer mr-4">
                      Sign In
                    </button>
                  </SignInButton>

                  <SignUpButton>
                    <button className="bg-sky-500 text-white rounded-lg font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                      Sign Up
                    </button>
                  </SignUpButton>
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </div>
            </nav>
          </header>
          <main className="">{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
