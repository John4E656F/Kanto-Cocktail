'use client';
import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full text-center p-4 bg-black">
      <p className="text-white pb-2">Enjoy responsibly. All cocktails designed for Kanto Cocktail.</p>
      <p className="text-sm font-bold text-red-500 pb-6">Warning: May cause spontaneous karaoke sessions.</p>
        <Image
            className="w-full mx-auto"
            src="/videoke.gif"
            alt="Kanto Cocktail logo"
            width={500}
            height={100}
            priority
          />
    </footer>
  );
}
