import Link from "next/link";
import { ThemeSwitch } from "ui.landing";

export default function Home() {
  return (
    <main>
      <ThemeSwitch />
      <Link href='/docs/get_started'>Go to docs</Link>
    </main>
  );
}
