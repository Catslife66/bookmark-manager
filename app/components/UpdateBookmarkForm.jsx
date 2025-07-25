import React from "react";

export default function UpdateBookmarkForm({
  url,
  notes,
  bookmark,
  setUrl,
  setNotes,
}) {
  return (
    <form className="w-full px-4 mt-8 md:w-1/2">
      <h2 className="text-2xl py-4 font-bold">{bookmark.title}</h2>
      <div className="grid gap-4 mb-4 grid-cols-2 md:grid-cols-4">
        <div className="col-span-2 md:col-span-4">
          <label
            htmlFor="url"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            url
            <span className="text-xs text-red-600">* required</span>
          </label>
          <input
            type="text"
            name="url"
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
            }}
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="col-span-2 md:col-span-4">
          <label
            htmlFor="notes"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            notes
          </label>
          <textarea
            type="text"
            name="notes"
            value={notes}
            onChange={(e) => {
              setNotes(e.target.value);
            }}
            rows="4"
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="col-span-2 text-sm text-gray-500">
          Created at:{" "}
          {new Date(bookmark.createdAt).toLocaleDateString().split("T")[0]}
        </div>
        <div className="col-span-2 text-sm text-gray-500 text-end">
          Updated at:{" "}
          {new Date(bookmark.updatedAt).toLocaleDateString().split("T")[0]}
        </div>
      </div>
    </form>
  );
}
