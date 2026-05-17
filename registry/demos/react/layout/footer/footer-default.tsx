import { Footer } from "@registry/components/react/layout/footer";

export function FooterDefault() {
  return (
    <Footer className="sm:footer-horizontal bg-base-200 text-base-content p-10 rounded-box">
      <Footer.Nav>
        <Footer.Title>Product</Footer.Title>
        <a className="link link-hover">Features</a>
        <a className="link link-hover">Pricing</a>
        <a className="link link-hover">Changelog</a>
        <a className="link link-hover">Roadmap</a>
      </Footer.Nav>
      <Footer.Nav>
        <Footer.Title>Company</Footer.Title>
        <a className="link link-hover">About</a>
        <a className="link link-hover">Blog</a>
        <a className="link link-hover">Careers</a>
        <a className="link link-hover">Press</a>
      </Footer.Nav>
      <Footer.Nav>
        <Footer.Title>Legal</Footer.Title>
        <a className="link link-hover">Terms</a>
        <a className="link link-hover">Privacy</a>
        <a className="link link-hover">Cookies</a>
      </Footer.Nav>
    </Footer>
  );
}
