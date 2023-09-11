import NavBar from "@/components/nav-bar";
import SideBar from "@/components/side-bar";


export default async function ConsoleLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="flex flex-row flex-1 min-h-screen">
      <SideBar />
      <main className="bg-red-300 w-full">
        <NavBar />
        <div className="max-w-screen-xl">
          <div className="p-4">{children}</div>
        </div>
      </main>
    </div>
  );
}
