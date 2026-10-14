export default function EmployerPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-3xl px-6 py-12">
        <div className="rounded-2xl bg-white p-8 shadow-sm">
          <h1 className="text-3xl font-bold text-black">
            Vakansiya joylashtirish
          </h1>

          <div className="mt-8 space-y-5">
            <input
              placeholder="Lavozim nomi"
              className="w-full rounded-lg border px-4 py-3 text-black"
            />

            <input
              placeholder="Kompaniya nomi"
              className="w-full rounded-lg border px-4 py-3 text-black"
            />

            <input
              placeholder="Shahar"
              className="w-full rounded-lg border px-4 py-3 text-black"
            />

            <input
              placeholder="Maosh"
              className="w-full rounded-lg border px-4 py-3 text-black"
            />

            <select className="w-full rounded-lg border px-4 py-3 text-black">
              <option>IT</option>
              <option>Marketing</option>
              <option>Dizayn</option>
              <option>Ta'lim</option>
            </select>

            <textarea
              placeholder="Vakansiya haqida..."
              rows={6}
              className="w-full rounded-lg border px-4 py-3 text-black"
            />

            <button className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white">
              Vakansiyani joylashtirish
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}