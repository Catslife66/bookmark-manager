"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logout from "./logoutBtn";
import Login from "./loginBtn";

export default function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function getUser() {
      try {
        const res = await axios.get("/api/auth");
        setUser(res.data.user);
      } catch (e) {
        setUser(null);
      }
    }
    getUser();
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full h-20 bg-white z-50 px-8">
      <nav className="flex justify-between items-center p-4 gap-4">
        <Link href="/" className="font-bold">
          Bookmarks
        </Link>
        {user ? (
          <div className="flex flex-row justify-center items-center space-x-2">
            <div className="text-sm text-gray-800 font-bold">
              Hi, {user.email}
            </div>
            <div>
              <Logout />
            </div>
          </div>
        ) : (
          <Login />
        )}
      </nav>
    </header>
  );
}
