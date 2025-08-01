import Link from "next/link";
import { auth } from "@/auth";
import { findUserBookmarks } from "@/app/lib/actions";
import AddBookmarkForm from "@/app/components/AddBookmarkForm";

export default async function page() {
  const session = await auth();
  const bookmarks = await findUserBookmarks(session.user.userId);

  return (
    <div className="max-w-screen-lg mx-auto pt-32">
      <h1 className="font-bold text-4xl text-center py-8">My bookmarks</h1>
      <div className="grid grid-cols-3 gap-8">
        <AddBookmarkForm />
        {bookmarks.map((bookmark, idx) => (
          <Link
            key={idx}
            href={`/bookmarks/${bookmark.id}`}
            className="flex flex-col items-center justify-center border border-gray-200 rounded-lg p-8 space-y-2 cursor-pointer"
          >
            <div className="bg-sky-300 p-4 rounded-full mb-4">
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6.03v13m0-13c-2.819-.831-4.715-1.076-8.029-1.023A.99.99 0 0 0 3 6v11c0 .563.466 1.014 1.03 1.007 3.122-.043 5.018.212 7.97 1.023m0-13c2.819-.831 4.715-1.076 8.029-1.023A.99.99 0 0 1 21 6v11c0 .563-.466 1.014-1.03 1.007-3.122-.043-5.018.212-7.97 1.023"
                />
              </svg>
            </div>
            <div className="font-bold">{bookmark.title}</div>
            <div className="text-gray-400">{bookmark.notes.slice(0, 20)}</div>
            <div className="text-sm">
              Created at: {bookmark.createdAt.toLocaleString().split(",")[0]}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
