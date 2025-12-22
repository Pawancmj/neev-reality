import Navbar from "@/app/reusable_components/navbar/navbar";
import Footer from "@/app/reusable_components/footer/footer";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>  {/* Renders page content */}
      <Footer />
    </div>
  );
}
