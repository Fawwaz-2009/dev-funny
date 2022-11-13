import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      <h1 className="text-center text-9xl text-white">
        Welcome to{" "}
        <Link href="https://nextjs.org" className="text-blue-600">
          Next.js!
        </Link>
      </h1>
    </main>
  );
}
