import Link from "next/link";
import LoginForm from "../components/auth/LoginForm";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-6">
      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        {/* Back to Home */}
        <Link
          href="/"
          className="mb-6 inline-block text-sm font-medium text-gray-500 transition hover:text-gray-900"
        >
          ← Back to home
        </Link>

        <h1 className="text-2xl font-bold text-gray-900">Welcome back</h1>

        <p className="mt-2 mb-6 text-sm text-gray-500">
          Login to your TeamHub account.
        </p>

        <LoginForm />

        {/* Sign Up */}
        <p className="mt-6 text-center text-sm text-gray-500">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="font-semibold text-gray-900 transition hover:text-gray-600"
          >
            Sign up
          </Link>
        </p>
      </div>
    </main>
  );
}
