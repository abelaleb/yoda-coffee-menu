import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-coffee-gold/30 bg-coffee-dark/95 backdrop-blur-sm sticky top-0 z-10">
        <div className="mx-auto max-w-5xl px-4 py-5 text-center">
          <h1 className="text-3xl font-bold tracking-wide text-coffee-cream sm:text-4xl">
            Yoda Coffee
          </h1>
          <p className="mt-1 text-sm text-coffee-gold/80">
            Premium Coffee Menu
          </p>
        </div>
      </header>

      <main className="flex-1 px-4 py-8 sm:py-12">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="overflow-hidden rounded-xl border border-coffee-gold/20 bg-coffee-medium/30 shadow-lg">
              <Image
                src="/images/picture1.jpg"
                alt="Yoda Coffee Menu — Page 1"
                width={800}
                height={1132}
                className="h-auto w-full object-contain"
                priority
              />
            </div>
            <div className="overflow-hidden rounded-xl border border-coffee-gold/20 bg-coffee-medium/30 shadow-lg">
              <Image
                src="/images/picture2.jpg"
                alt="Yoda Coffee Menu — Page 2"
                width={800}
                height={1132}
                className="h-auto w-full object-contain"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-coffee-gold/30 bg-coffee-dark/95">
        <div className="mx-auto max-w-5xl px-4 py-6 text-center text-sm text-coffee-cream/70">
          <p className="font-semibold text-coffee-gold">Yoda Coffee</p>
          <p className="mt-1">Open Daily · 7:00 AM – 9:00 PM</p>
          <p className="mt-4 text-xs text-coffee-cream/40">
            Scan QR for menu &middot; Made with ☕
          </p>
        </div>
      </footer>
    </div>
  );
}
