import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

// import { LoginForm } from "";
import { authOptions } from "@/lib/auth";
import { LoginForm } from "./_components/login-form";

const demoUserEmail = process.env.DEMO_USER_EMAIL ?? "demo@example.com";
const demoUserPassword = process.env.DEMO_USER_PASSWORD ?? "demo123";

export default async function LoginPage() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/");
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-6">
      <LoginForm />
      <p className="mt-4 text-sm text-zinc-600">
        Demo credentials: {demoUserEmail} / {demoUserPassword}
      </p>
    </main>
  );
}
