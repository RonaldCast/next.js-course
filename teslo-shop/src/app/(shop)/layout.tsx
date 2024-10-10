import { Footer, Sidebar, TopMenu } from "@/components";

export default function ShopLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <main className=" min-h-screen">
      <TopMenu></TopMenu>
      <Sidebar/>
      <div className="md:mx-6">
        {children}
      </div>
      <Footer/>
    </main>
  );
}