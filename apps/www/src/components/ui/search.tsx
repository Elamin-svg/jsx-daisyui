"use client";
import { Doc } from "@/lib/docs";
import { search } from "@/lib/search";
import { Modal, useModal } from "@registry/components/react/feedback/modal";
import { Clock1, SearchIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Search() {
  const { ref, open, close } = useModal();
  const inputRef = useRef<HTMLInputElement>(null);

  const [searchValue, setSearchValue] = useState("");
  const [recentlyViewed, setRecentlyViewed] = useState<Doc[]>([]);
  const results = searchValue ? search(searchValue) : [];
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("recentlyViewed");
      if (stored) setRecentlyViewed(JSON.parse(stored));
    } catch {
      // ignore malformed data
    }
    setInitialized(true);
  }, []);

  useEffect(() => {
    if (!initialized) return;
    localStorage.setItem("recentlyViewed", JSON.stringify(recentlyViewed));
  }, [recentlyViewed, initialized]);

  function handleOpen() {
    open();
    requestAnimationFrame(() => inputRef.current?.focus());
  }

  function handleDocClick(doc: Doc) {
    setRecentlyViewed((prev) => {
      const deduped = prev.filter((d) => d.slug !== doc.slug);
      return [doc, ...deduped].slice(0, 5);
    });
    close();
  }

  return (
    <>
      <button onClick={handleOpen} className="btn btn-ghost btn-square btn-sm">
        <SearchIcon className="size-4.5 cursor-pointer" />
      </button>

      <Modal responsive ref={ref} onClose={close}>
        <Modal.Box className="h-100 overflow-y-auto">
          <Modal.Close />
          <input
            value={searchValue}
            ref={inputRef}
            onChange={(e) => setSearchValue(e.target.value)}
            className="text-lg input input-ghost w-full bg-transparent! outline-0! border-b-base-300 border-b input-lg"
            placeholder="Search"
          />
          <ul className="menu menu-lg mt-2 *:motion-preset-fade gap-1 menu-horizontal w-full">
            {searchValue === "" ? (
              recentlyViewed.length > 0 ? (
                <>
                  <p className="flex font-mono items-center mb-1 text-xs gap-0.5 text-base-content/65">
                    <Clock1 className="size-3 mr-1" />
                    Recently viewed
                  </p>
                  {recentlyViewed.map((doc, i) => (
                    <li className="w-full" key={i}>
                      <Link
                        onClick={() => handleDocClick(doc)}
                        className="w-full flex-col flex items-start gap-0"
                        href={doc.slug}
                      >
                        {doc.title}
                        <span className="text-xs text-base-content/60">
                          {doc.group}
                        </span>
                      </Link>
                    </li>
                  ))}
                </>
              ) : (
                <p className="text-sm text-base-content/50">
                  No recently viewed docs
                </p>
              )
            ) : results.length > 0 ? (
              results.map((doc, i) => (
                <li className="w-full flex flex-col" key={i}>
                  <Link
                    className="w-full flex-col flex items-start gap-0"
                    href={doc.slug}
                    onClick={() => handleDocClick(doc)}
                  >
                    {doc.title}
                    <span className="text-xs text-base-content/60">
                      {doc.group}
                    </span>
                  </Link>
                </li>
              ))
            ) : (
              <p>No results found</p>
            )}
          </ul>
        </Modal.Box>
      </Modal>
    </>
  );
}
