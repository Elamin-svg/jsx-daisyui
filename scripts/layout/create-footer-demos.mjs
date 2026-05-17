// scripts/layout/create-footer-demos.mjs
// Run: node scripts/layout/create-footer-demos.mjs

import fs from "fs";
import path from "path";

const ROOT = process.cwd();

function write(filePath, content) {
  const full = path.join(ROOT, filePath);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, content, "utf-8");
  console.log(`✓  ${filePath}`);
}

// ─── Demo files ───────────────────────────────────────────────────────────────

write(
  "registry/demos/react/layout/footer/footer-default.tsx",
  `import { Footer } from "@registry/components/react/layout/footer";

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
`,
);

write(
  "registry/demos/react/layout/footer/footer-with-logo.tsx",
  `import { Footer } from "@registry/components/react/layout/footer";

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
`,
);

write(
  "registry/demos/react/layout/footer/footer-with-newsletter.tsx",
  `import { Footer } from "@registry/components/react/layout/footer";
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
`,
);

write(
  "registry/demos/react/layout/footer/footer-with-social.tsx",
  `import { Footer } from "@registry/components/react/layout/footer";

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="fill-current">
    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
  </svg>
);

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="fill-current">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="fill-current">
    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
  </svg>
);

export function FooterWithSocial() {
  return (
    <Footer className="sm:footer-horizontal bg-neutral text-neutral-content p-10 rounded-box">
      <Footer.Aside>
        <div className="flex items-center gap-2">
          <div className="size-8 rounded-full bg-neutral-content/20" />
          <span className="text-lg font-bold">Acme</span>
        </div>
        <p className="text-sm text-neutral-content/60 max-w-xs">
          Providing reliable tech since 1992.
        </p>
      </Footer.Aside>
      <Footer.Nav>
        <Footer.Title>Product</Footer.Title>
        <a className="link link-hover">Features</a>
        <a className="link link-hover">Pricing</a>
        <a className="link link-hover">Docs</a>
      </Footer.Nav>
      <Footer.Nav>
        <Footer.Title>Follow us</Footer.Title>
        <div className="flex gap-4">
          <a className="hover:text-neutral-content/60 transition-colors"><TwitterIcon /></a>
          <a className="hover:text-neutral-content/60 transition-colors"><GithubIcon /></a>
          <a className="hover:text-neutral-content/60 transition-colors"><YoutubeIcon /></a>
        </div>
      </Footer.Nav>
    </Footer>
  );
}
`,
);

write(
  "registry/demos/react/layout/footer/footer-copyright.tsx",
  `import { Footer } from "@registry/components/react/layout/footer";

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
`,
);

write(
  "registry/demos/react/layout/footer/footer-centered.tsx",
  `import { Footer } from "@registry/components/react/layout/footer";

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="fill-current">
    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
  </svg>
);

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="fill-current">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

export function FooterCentered() {
  return (
    <Footer center horizontal className="bg-primary text-primary-content p-10 rounded-box">
      <Footer.Aside>
        <div className="flex items-center gap-2">
          <div className="size-8 rounded-full bg-primary-content/20" />
          <span className="text-xl font-bold">Acme</span>
        </div>
        <p className="font-medium">Building the future, one commit at a time.</p>
        <p className="text-sm text-primary-content/60">
          © {new Date().getFullYear()} Acme Inc. All rights reserved.
        </p>
      </Footer.Aside>
      <Footer.Nav>
        <div className="flex gap-4">
          <a className="hover:text-primary-content/60 transition-colors"><TwitterIcon /></a>
          <a className="hover:text-primary-content/60 transition-colors"><GithubIcon /></a>
        </div>
      </Footer.Nav>
    </Footer>
  );
}
`,
);

write(
  "registry/demos/react/layout/footer/footer-two-row.tsx",
  `import { Footer } from "@registry/components/react/layout/footer";

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="fill-current">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="fill-current">
    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
  </svg>
);

export function FooterTwoRow() {
  return (
    <div className="w-full rounded-box overflow-hidden">
      <Footer className="sm:footer-horizontal bg-base-200 text-base-content p-10">
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
      <Footer className="bg-base-200 text-base-content border-t border-base-300 px-10 py-4">
        <Footer.Aside className="grid-flow-col items-center">
          <div className="size-6 rounded-full bg-base-content/20" />
          <p className="text-sm text-base-content/60">
            © {new Date().getFullYear()} Acme Inc. All rights reserved.
          </p>
        </Footer.Aside>
        <Footer.Nav className="md:place-self-center md:justify-self-end">
          <div className="flex gap-4">
            <a className="hover:text-base-content/60 transition-colors"><TwitterIcon /></a>
            <a className="hover:text-base-content/60 transition-colors"><GithubIcon /></a>
          </div>
        </Footer.Nav>
      </Footer>
    </div>
  );
}
`,
);

console.log("\nDone!");
