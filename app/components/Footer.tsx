
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Logo */}
          <div>
            <Link
              href="/"
              className="text-3xl font-black text-blue-500"
            >
              IshTop
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">
              O'zingizga mos ishni toping va karyerangizni yangi
              bosqichga olib chiqing.
            </p>

            {/* Social */}
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 transition hover:bg-blue-600"
              >
                Telegram
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 transition hover:bg-blue-600"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Sayt */}
          <div>
            <h3 className="mb-4 text-lg font-bold">
              IshTop
            </h3>

            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <Link
                  href="/"
                  className="transition hover:text-white"
                >
                  Bosh sahifa
                </Link>
              </li>

              <li>
                <Link
                  href="/jobs"
                  className="transition hover:text-white"
                >
                  Vakansiyalar
                </Link>
              </li>

              <li>
                <Link
                  href="/register"
                  className="transition hover:text-white"
                >
                  Ro'yxatdan o'tish
                </Link>
              </li>

              <li>
                <Link
                  href="/login"
                  className="transition hover:text-white"
                >
                  Kirish
                </Link>
              </li>
            </ul>
          </div>

          {/* Ish beruvchilar */}
          <div>
            <h3 className="mb-4 text-lg font-bold">
              Ish beruvchilar
            </h3>

            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <Link
                  href="/post-job"
                  className="transition hover:text-white"
                >
                  Vakansiya joylash
                </Link>
              </li>

              <li>
                <Link
                  href="/dashboard"
                  className="transition hover:text-white"
                >
                  Ish beruvchi kabineti
                </Link>
              </li>

              <li>
                <a
                  href="mailto:info@ishtop.uz"
                  className="transition hover:text-white"
                >
                  Biz bilan bog'lanish
                </a>
              </li>
            </ul>
          </div>

          {/* Aloqa */}
          <div>
            <h3 className="mb-4 text-lg font-bold">
              Aloqa
            </h3>

            <ul className="space-y-3 text-sm text-slate-400">
              <li>📍 Toshkent, O'zbekiston</li>

              <li>
                📧{" "}
                <a
                  href="admin:ish-top"
                  className="hover:text-white"
                >
                  admin:@ish-top
                </a>
              </li>

              <li>
                📞{" "}
                <a
                  href="tel:+998972988788"
                  className="hover:text-white"
                >
                  +998 97 298 87 88
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-slate-800 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-500 md:flex-row">

            <p>
              © {new Date().getFullYear()} IshTop.
              Barcha huquqlar himoyalangan.
            </p>

            <div className="flex gap-5">
              <Link
                href="/privacy"
                className="hover:text-white"
              >
                Maxfiylik
              </Link>

              <Link
                href="/terms"
                className="hover:text-white"
              >
                Foydalanish shartlari
              </Link>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}