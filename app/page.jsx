import { auth } from "@clerk/nextjs/server";
import { SignInButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";

export default async function Home() {
  const { userId } = await auth();

  return (
    <section className="h-screen w-full flex justify-center items-center dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Lorem ipsum dolor sit amet.
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nobis
            ad magnam perspiciatis porro molestiae.
          </p>
          {userId ? (
            <Link
              href="/bookmarks"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              View my bookmarks
            </Link>
          ) : (
            <SignInButton>
              <button className="cursor-pointer inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Sign in
              </button>
            </SignInButton>
          )}
          <Link
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Add a bookmark
          </Link>
        </div>
        <div className="hidden relative lg:mt-0 lg:col-span-5 lg:flex">
          <Image
            src={"/images/heroImg.png"}
            alt="bookmarks"
            fill={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={true}
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </section>
  );
}
