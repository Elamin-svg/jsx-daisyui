import Link from "next/link";
import Image from "next/image";
import Button from "@registry/components/react/forms/button";
import { ArrowRight } from "lucide-react";
import Badge from "@registry/components/react/data-display/badge";
import DaisyuiLogo from "../../public/logos/daisyui.svg";
import SolidjsLogo from "../../public/logos/solidjs.webp";
import ReactLogo from "../../public/logos/react.svg";

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-80px)] bg-base-100 flex flex-col container mx-auto pt-20 md:pt-24  pb-6 ">
      <section className="flex items-center justify-center px-6 text-left md:text-center gap-5">
        <div className="flex flex-col justify-center items-center">
          <div className="flex items-center gap-8 mb-10 mr-auto md:mx-auto">
            <Image
              src={ReactLogo}
              alt="React"
              width={96}
              height={96}
              loading="eager"
              className="size-16 md:size-24"
            />{" "}
            <div className="relative flex flex-col items-center gap-1.5">
              <Image
                src={SolidjsLogo}
                alt="SolidJS"
                width={96}
                height={96}
                loading="eager"
                className="size-16 mt-2 md:size-24 opacity-40  grayscale"
              />
              <Badge size="xs" variant="soft">
                Coming Soon
              </Badge>
            </div>
            <Image
              src={DaisyuiLogo}
              alt="DaisyUI"
              width={96}
              height={96}
              loading="eager"
              className="size-16 md:size-24"
            />
          </div>

          <div className="flex flex-col gap-5 max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-medium tracking-tight">
              Beautiful DaisyUI components, made for React
            </h1>
            <p className="text-base-content/60 text-xl mx-auto max-w-xl leading-relaxed">
              jsx-daisyui is a React component library built on top of DaisyUI,
              providing a seamless way to use DaisyUI's design system in your
              projects. SolidJS support is on the roadmap — stay tuned!
            </p>
          </div>

          <div className="mt-6 flex w-full sm:w-fit sm:flex-row flex-col gap-2 sm:gap-4 mr-auto md:mx-auto">
            <Link href="/docs/introduction">
              <Button size="lg" wide color="primary">
                Get Started <ArrowRight />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
