import { Navbar } from "@/components";


export default function GeneralLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
     <Navbar/>
      <main className="flex justify-center flex-col items-center mt-10 text-4xl">
        <h1 className="text-xl">Hola</h1>
        {children}
      </main>
    </>
  );
}
