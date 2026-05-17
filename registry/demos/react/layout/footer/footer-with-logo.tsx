import { Footer } from "@registry/components/react/layout/footer";

export function FooterWithLogo() {
  return (
    <Footer className="sm:footer-horizontal bg-base-200 text-base-content p-10 rounded-box">
      <Footer.Aside>
        <div className="flex items-center gap-2">
          <div className="size-8 rounded-full bg-primary" />
          <span className="text-lg font-bold">Acme</span>
        </div>
        <p className="text-sm text-base-content/60 max-w-xs">
          Building tools that help teams ship faster since 2018.
        </p>
      </Footer.Aside>
      <Footer.Nav>
        <Footer.Title>Product</Footer.Title>
        <a className="link link-hover">Features</a>
        <a className="link link-hover">Pricing</a>
        <a className="link link-hover">Docs</a>
      </Footer.Nav>
      <Footer.Nav>
        <Footer.Title>Company</Footer.Title>
        <a className="link link-hover">About</a>
        <a className="link link-hover">Blog</a>
        <a className="link link-hover">Careers</a>
      </Footer.Nav>
    </Footer>
  );
}
