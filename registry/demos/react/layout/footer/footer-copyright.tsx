import { Footer } from "@registry/components/react/layout/footer";

export function FooterCopyright() {
  return (
    <Footer center className="bg-base-300 text-base-content p-4 rounded-box">
      <Footer.Aside>
        <p className="text-sm text-base-content/60">
          © {new Date().getFullYear()} Acme Inc. All rights reserved.
        </p>
      </Footer.Aside>
    </Footer>
  );
}
