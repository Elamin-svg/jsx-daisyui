import { Footer } from "@registry/components/react/layout/footer";

export default function FooterSection() {
  return (
    <Footer className="container mx-auto p-4  ">
      <Footer.Aside className="text-center mx-auto">
        <p className="text-sm   text-base-content/60">
          © {new Date().getFullYear()} jsx-daisyui. All rights reserved. | Built
          with DaisyUI and React.
        </p>
      </Footer.Aside>
    </Footer>
  );
}
