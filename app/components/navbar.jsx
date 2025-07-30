"use client";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <header className="fixed top-0 left-0 w-full h-16 bg-white z-50 px-8">
      <nav className="flex justify-between items-center p-4 gap-4">
        <Link href="/" className="font-bold">
          Bookmarks
        </Link>

        {session?.user ? (
          <div className="flex flex-row items-center space-x-4">
            <div>Hi, {session.user.name}</div>
            <button
              onClick={() => signOut({ redirectTo: "/" })}
              className="cursor-pointer px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <button
            onClick={() => signIn()}
            className="cursor-pointer px-5 py-3 text-base font-medium text-center text-white border border-blue-600 bg-blue-600 rounded-lg hover:bg-blue-800"
          >
            Sign In
          </button>
        )}
      </nav>
    </header>
  );
}
