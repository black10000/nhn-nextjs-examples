"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";

interface MenuItem {
  label: string;
  href: string;
  isActive?: boolean;
  id: string;
}

const SideBar = () => {
  const pathName = usePathname() || "/";
  const paths = pathName.substring(pathName.indexOf("/") + 1).split("/");
  const selectedMenu = paths.length > 0 ? paths[0] : "dashboard";

  const menuItems: MenuItem[] = [
    { label: "Dashboard", href: "/dashboard", id: "dashboard" },
    { label: "About", href: "/about", id: "about" },
  ].map((item) => ({ ...item, isActive: selectedMenu === item.id }));

  const segment = useSelectedLayoutSegment();

  return (
    <aside className="w-56 bg-blue-300 text-slate-100">
      <div className="h-20"></div>
      <div className="border-b border-slate-300" />
      <div className="px-4 mt-4">
        {!!menuItems.length ? (
          <nav className="menu">
            {menuItems?.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  "mb-2 p-2 rounded-lg flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                  item.isActive? "bg-yellow-500":"",
                  item.href.startsWith(`/${segment}`)
                    ? "text-foreground"
                    : "text-foreground/60"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        ) : null}
      </div>
    </aside>
  );
};

export default SideBar;
