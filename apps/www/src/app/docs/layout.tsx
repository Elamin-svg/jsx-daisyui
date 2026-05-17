import { Sidebar } from "@/components/layout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen relative mx-auto container max-w-7xl w-full">
      <Sidebar />
      <section className="flex-1 container mx-auto md:ml-56 lg:ml-78 w-full py-6 px-4 pt-12 xl:p-12">
        {children}
      </section>
    </div>
  );
}
