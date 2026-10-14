import { jobs } from "@/app/data/jobs";
import Link from "next/link";

export default async function JobDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const job = jobs.find((item) => item.id === id);

  if (!job) {
    return (
      <main className="mx-auto max-w-4xl px-6 py-20">
        <h1 className="text-3xl font-bold">
          Vakansiya topilmadi
        </h1>

        <Link
          href="/jobs"
          className="mt-5 inline-block text-blue-600"
        >
          ← Vakansiyalarga qaytish
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-4xl px-6 py-12">
        <div className="rounded-2xl bg-white p-8 shadow-sm">
          <span className="rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">
            {job.category}
          </span>

          <h1 className="mt-5 text-4xl font-bold">
            {job.title}
          </h1>

          <p className="mt-2 text-xl text-gray-500">
            {job.company}
          </p>

          <div className="my-8 grid gap-4 rounded-xl bg-gray-50 p-5 md:grid-cols-3">
            <div>
              <p className="text-sm text-gray-500">Joylashuv</p>
              <p className="font-semibold">📍 {job.location}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Maosh</p>
              <p className="font-semibold">💰 {job.salary}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Ish turi</p>
              <p className="font-semibold">🕐 {job.type}</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold">
            Vakansiya haqida
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            {job.description}
          </p>

          <button className="mt-8 w-full rounded-xl bg-blue-600 py-4 font-bold text-white hover:bg-blue-700">
            Ariza topshirish
          </button>
        </div>
      </div>
    </main>
  );
} 