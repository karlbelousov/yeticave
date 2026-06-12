import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="main-header__logo">
      <Image
        src="/img/logo.svg"
        width={160}
        height={39}
        alt="Логотип компании YetiCave"
        loading="eager"
      />
    </Link>
  );
}
