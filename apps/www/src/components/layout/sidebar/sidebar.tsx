"use client";

import { docsByGroup } from "@/lib/docs";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const isActive = (slug: string) => pathname.endsWith(slug);

  return (
    <div className="flex-col z-1 md:flex hidden fixed bg-base-100 pb-24 pt-4 p-2   items-end justify-start overflow-y-auto h-screen">
      <ul className="menu gap-1 menu-horizontal md:max-w-46 lg:max-w-74 w-full h-fit">
        {docsByGroup.map(({ key, label, items }) => (
          <li key={key} className="w-full">
            <span className="menu-title text-xs uppercase tracking-widest text-base-content/40 px-3 pt-3 pb-1">
              {label}
            </span>
            <ul className="w-full">
              {items.map((doc) => (
                <li key={doc.slug} className="w-full">
                  <Link
                    href={doc.slug}
                    prefetch={false}
                    onMouseEnter={() => router.prefetch(doc.slug)}
                    className={`w-full text-base ${isActive(doc.slug) ? "bg-primary text-primary-content" : ""}`}
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
  );
}
