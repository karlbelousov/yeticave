import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import { ptSans400 } from "./fonts";
import "./normalize.min.css";
import "./global.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${ptSans400.className}`}>
        <div className="page-wrapper">
          <Header />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
