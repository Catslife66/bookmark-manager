import { signOut } from "@/auth";

export function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button
        type="submit"
        className="px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg cursor-pointer"
      >
        Sign Out
      </button>
    </form>
  );
}
