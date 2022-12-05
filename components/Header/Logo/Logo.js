import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 text-2xl font-bold">
      <Image src="/logo.svg" width={33} height={33} alt="logo-lavagna" />
      Lavagna
    </Link>
  );
}
