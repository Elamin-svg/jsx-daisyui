import { Footer } from "@registry/components/react/layout/footer";
import {Input} from "@registry/components/react/forms/input";
import Button from "@registry/components/react/forms/button";

export function FooterWithNewsletter() {
  return (
    <Footer className="sm:footer-horizontal bg-base-200 text-base-content p-10 rounded-box">
      <Footer.Nav>
        <Footer.Title>Product</Footer.Title>
        <a className="link link-hover">Features</a>
        <a className="link link-hover">Pricing</a>
        <a className="link link-hover">Changelog</a>
      </Footer.Nav>
      <Footer.Nav>
        <Footer.Title>Company</Footer.Title>
        <a className="link link-hover">About</a>
        <a className="link link-hover">Careers</a>
        <a className="link link-hover">Press</a>
      </Footer.Nav>
      <Footer.Nav>
        <Footer.Title>Newsletter</Footer.Title>
        <p className="text-sm text-base-content/60">Get updates delivered to your inbox.</p>
        <div className="join mt-1">
          <Input
            type="email"
            placeholder="you@example.com"
            className="join-item w-52"
          />
          <Button color="primary" className="join-item">Subscribe</Button>
        </div>
      </Footer.Nav>
    </Footer>
  );
}
