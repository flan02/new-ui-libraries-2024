//import Image from "next/image";

import Link from "next/link";

export default function Home() {
  return (
    <main className="grid place-content-center h-screen space-y-4">
      <h1 className="">New amazing UI libraries 2024</h1>
      <nav className="space-x-4">
        <Link href="/aceternity" className="underline">acerternity UI</Link>
        <Link href="/motion-primitives" className="underline">motion primitives</Link>
      </nav>
    </main>
  );
}
