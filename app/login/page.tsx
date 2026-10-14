import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="flex min-h-[80vh] items-center justify-center bg-gray-50 px-6">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-sm text-black">
        <h1 className="text-3xl font-bold">Kirish</h1>

        <div className="mt-6 space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-lg border px-4 py-3 text-black"
          />

          <input
            type="password"
            placeholder="Parol"
            className="w-full rounded-lg border px-4 py-3 text-black"
          />

          <Link href={'/'}>
            <button className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white">
              Kirish
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}