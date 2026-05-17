// scripts/navigation/create-navbar-demos.mjs
import fs from "fs";
import path from "path";

const ROOT = process.cwd();

function write(filePath, content) {
  const full = path.join(ROOT, filePath);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, content, "utf-8");
  console.log(`✓  ${filePath}`);
}

write(
  "registry/demos/react/navigation/navbar/navbar-default.tsx",
  `import { Navbar } from "@registry/components/react/navigation/navbar";
import Button from "@registry/components/react/forms/button";

export function NavbarDefault() {
  return (
    <Navbar className="bg-base-100 shadow-sm rounded-box w-full max-w-2xl">
      <Navbar.Start>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </Navbar.Start>
      <Navbar.Center>
        <div className="flex gap-1">
          <a className="btn btn-ghost btn-sm">Home</a>
          <a className="btn btn-ghost btn-sm">About</a>
          <a className="btn btn-ghost btn-sm">Blog</a>
        </div>
      </Navbar.Center>
      <Navbar.End>
        <Button color="primary" size="sm">Get started</Button>
      </Navbar.End>
    </Navbar>
  );
}
`,
);

write(
  "registry/demos/react/navigation/navbar/navbar-with-dropdown.tsx",
  `import { Navbar } from "@registry/components/react/navigation/navbar";
import Button from "@registry/components/react/forms/button";

export function NavbarWithDropdown() {
  return (
    <Navbar className="bg-base-100 shadow-sm rounded-box w-full max-w-2xl">
      <Navbar.Start>
        <div className="dropdown">
          <Button variant="ghost" shape="circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </Button>
          <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><a>Homepage</a></li>
            <li><a>Portfolio</a></li>
            <li><a>About</a></li>
          </ul>
        </div>
      </Navbar.Start>
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <Navbar.End>
        <Button variant="ghost" shape="circle">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </Button>
      </Navbar.End>
    </Navbar>
  );
}
`,
);


console.log("\nDone!");
