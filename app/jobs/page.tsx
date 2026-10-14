"use client";

import { useState } from "react";
import Link from "next/link";
import { jobs } from "../data/jobs";

export default function JobsPage() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase());

    const matchesLocation =
      !location || job.location === location;

    const matchesCategory =
      !category || job.category === category;

    return matchesSearch && matchesLocation && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <h1 className="text-4xl font-bold text-gray-900">
          Vakansiyalar
        </h1>

        <div className="mt-8 grid gap-3 rounded-2xl bg-white p-5 shadow-sm md:grid-cols-4 text-black">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Kasb yoki kompaniya..."
            className="rounded-lg border px-4 py-3 outline-none focus:border-blue-500"
          />

          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="rounded-lg border px-4 py-3 text-black"
          >
            <option value="">Barcha shaharlar</option>
            <option value="Toshkent">Toshkent</option>
            <option value="Samarqand">Samarqand</option>
          </select>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="rounded-lg border px-4 py-3 text-black"
          >
            <option value="">Barcha kategoriyalar</option>
            <option value="IT">IT</option>
            <option value="Marketing">Marketing</option>
            <option value="Dizayn">Dizayn</option>
          </select>

          <button
            onClick={() => {
              setSearch("");
              setLocation("");
              setCategory("");
            }}
            className="rounded-lg bg-gray-900 px-4 py-3 font-semibold text-white"
          >
            Tozalash
          </button>
        </div>

        <p className="mt-8 text-gray-600">
          {filteredJobs.length} ta vakansiya topildi
        </p>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {filteredJobs.map((job) => (
            <Link
              key={job.id}
              href={`/jobs/${job.id}`}
              className="rounded-2xl border bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-xl font-bold">
                    {job.title}
                  </h2>

                  <p className="mt-1 text-gray-500">
                    {job.company}
                  </p>
                </div>

                <span className="rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">
                  {job.category}
                </span>
              </div>

              <div className="mt-5 space-y-2 text-gray-600">
                <p>📍 {job.location}</p>
                <p>💰 {job.salary}</p>
                <p>🕐 {job.type}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}