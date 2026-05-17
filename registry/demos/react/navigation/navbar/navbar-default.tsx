import { Navbar } from "@registry/components/react/navigation/navbar";
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
