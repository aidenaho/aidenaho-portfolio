import Link from "next/link";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <Container className="pt-24">
      <h1 className="text-3xl font-semibold tracking-tight">Page not found</h1>
      <p className="mt-3 text-muted">That page doesn&apos;t exist, or it moved.</p>
      <Link href="/" className="link mt-6 inline-block">
        Go to the home page
      </Link>
    </Container>
  );
}
