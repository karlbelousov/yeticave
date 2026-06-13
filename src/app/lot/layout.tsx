import { Suspense } from "react";
import NavListSceleton from "@/components/sceletons/NavListSceleton";
import NavList from "@/components/ui/NavList";

export default function LotsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <nav className="nav">
        <Suspense fallback={<NavListSceleton />}>
          <NavList />
        </Suspense>
      </nav>
      {children}
    </main>
  );
}
