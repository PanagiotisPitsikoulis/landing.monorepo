import Link from "next/link";
import { Button } from "ui.landing";

export default function Home() {
  return (
    <main>
      <Button>Click me</Button>
      <Link href='/docs/get_started'>Go to docs</Link>
    </main>
  );
}
