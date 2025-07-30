import { signIn } from "@/auth";

export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github");
      }}
    >
      <button
        type="submit"
        className="px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg cursor-pointer"
      >
        Signin with GitHub
      </button>
    </form>
  );
}
