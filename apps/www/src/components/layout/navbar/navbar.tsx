"use client";

import { docsByGroup } from "@/lib/docs";
import GithubIcon from "@/components/icons/github";
import Button from "@registry/components/react/forms/button";
import Divider from "@registry/components/react/layout/divider";
import { Drawer, useDrawer } from "@registry/components/react/layout/drawer";
import { Menu, Paperclip } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Search from "../../ui/search";
import ThemeController from "../../ui/theme-controller";

export default function Navbar() {
  return (
    <header className="border-b border-base-200 fixed top-0 z-9999 left-0 w-screen bg-base-100 md:px-4">
      <div className="navbar max-w-7xl container mx-auto bg-base-100">
        <div className="navbar-start md:hidden">
          <DrawerNavbar />
        </div>

        <div className="navbar-center md:navbar-start">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-sm font-bold tracking-widest">
              jsx daisyUI
            </span>
          </Link>
        </div>

        <div className="navbar-end gap-1">
          <NavDocsLink />
          <Divider
            direction="horizontal"
            className="h-8 mx-0 my-auto hidden md:inline-flex"
          />
          <Search />
          <div className="hidden md:flex gap-1">
            <ThemeController />
            <GithubIcon />
          </div>
        </div>
      </div>
    </header>
  );
}

// desktop only
function NavDocsLink() {
  return (
    <div className="hidden md:flex">
      <Link href="/docs">
        <Button size="sm" variant="ghost" className="text-sm font-normal">
          <Paperclip className="size-3.5 mr-1" />
          Docs
        </Button>
      </Link>
    </div>
  );
}

export function DrawerNavbar() {
  const pathname = usePathname();
  const drawer = useDrawer();

  const isActive = (slug: string) => pathname.endsWith(slug);

  return (
    <Drawer
      open={drawer.open}
      onOpen={drawer.openDrawer}
      onClose={drawer.close}
      onToggle={drawer.toggle}
      className="md:hidden!"
    >
      {/* Trigger */}
      <Drawer.Content>
        <Button
          onClick={drawer.toggle}
          variant="ghost"
          className="btn-square btn-sm"
        >
          <Menu className="size-5" />
        </Button>
      </Drawer.Content>

      <Drawer.Side>
        <div className="bg-base-100 min-h-full is-drawer-open:w-64">
          <div className="flex gap-1.5 px-5 py-2 border-b border-base-200">
            <ThemeController />
            <GithubIcon />
          </div>

          <ul className="menu pt-3 gap-1 w-full pr-8">
            {docsByGroup.map(({ key, label, items }) => (
              <li key={key}>
                <span className="menu-title text-xs uppercase tracking-widest text-base-content/40 px-3 pt-3 pb-1">
                  {label}
                </span>
                <ul className="w-full">
                  {items.map((doc) => (
                    <li key={doc.slug} className="w-full">
                      <Link
                        href={doc.slug}
                        onClick={drawer.close}
                        className={`text-base ${isActive(doc.slug) ? "bg-primary text-primary-content" : ""}`}
                      >
                        {doc.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </Drawer.Side>
    </Drawer>
  );
}
