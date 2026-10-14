import Link from "next/link";

const jobs = [
  {
    title: "Frontend Developer",
    company: "IT Company",
    location: "Toshkent",
    salary: "8 000 000 - 12 000 000 so'm",
    type: "Full-time",
  },
  {
    title: "SMM Manager",
    company: "Digital Agency",
    location: "Toshkent",
    salary: "5 000 000 - 8 000 000 so'm",
    type: "Full-time",
  },
  {
    title: "Grafik Dizayner",
    company: "Creative Studio",
    location: "Samarqand",
    salary: "4 000 000 - 7 000 000 so'm",
    type: "Remote",
  },
  {
    title: "Backend Developer",
    company: "Tech Solutions",
    location: "Toshkent",
    salary: "10 000 000 - 16 000 000 so'm",
    type: "Full-time",
  },
  {
    title: "UI/UX Designer",
    company: "Design Studio",
    location: "Buxoro",
    salary: "6 000 000 - 10 000 000 so'm",
    type: "Remote",
  },
  {
    title: "Marketing Manager",
    company: "Business Group",
    location: "Toshkent",
    salary: "7 000 000 - 11 000 000 so'm",
    type: "Full-time",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-blue-600 px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-5xl font-bold">
            O'zingizga mos ishni toping
          </h1>

          <p className="mt-4 text-lg text-blue-100">
            O'zbekistondagi eng yaxshi vakansiyalarni bir joydan qidiring.
          </p>

          <div className="mt-8 flex max-w-4xl gap-3 rounded-xl bg-white p-3">
            <input
              className="flex-1 rounded-lg px-4 py-3 text-gray-800 outline-none"
              placeholder="Kasb yoki lavozim..."
            />

            <input
              className="w-56 rounded-lg px-4 py-3 text-gray-800 outline-none"
              placeholder="Shahar..."
            />

            <button className="rounded-lg bg-blue-600 px-7 py-3 font-semibold text-white">
              Qidirish
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-gray-900">
            Yangi vakansiyalar
          </h2>

          <Link
            href="/jobs"
            className="font-semibold text-blue-600"
          >
            Barchasini ko'rish →
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job) => (
            <Link
              href={`/jobs/${job.id}`}
              key={job.id}
              className="rounded-2xl border bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl">
                💼
              </div>

              <h3 className="text-xl font-bold text-gray-900">
                {job.title}
              </h3>

              <p className="mt-2 text-gray-500">
                {job.company}
              </p>

              <div className="mt-5 space-y-2 text-sm text-gray-600">
                <p>📍 {job.location}</p>
                <p>💰 {job.salary}</p>
                <p>🕐 {job.type}</p>
              </div>

              <div className="mt-6 rounded-lg bg-blue-50 py-3 text-center font-semibold text-blue-600">
                Batafsil ko'rish
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}