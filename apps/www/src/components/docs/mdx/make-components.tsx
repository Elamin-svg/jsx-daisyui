import { getRegistryComponent } from "@/server/get-registry-comp";
import { InstallationClient } from "../installation/installation-client";

export function makeComponents(
  id: string,
  registryComp: ReturnType<typeof getRegistryComponent>,
) {
  let injected = false;
  return {
    h1: ({ children }: any) => (
      <h1 className="text-4xl font-semibold">{children}</h1>
    ),
    p: ({ children }: any) => {
      if (registryComp && !injected) {
        injected = true;
        return (
          <>
            <p className="leading-relaxed text-base-content/70 my-3 [.btn_&]:my-0 [.preview_&]:my-0">
              {children}
            </p>
            <InstallationClient source={registryComp.source} name={id} />
          </>
        );
      }
      return (
        <p className="leading-relaxed [.btn_&]:my-0 mt-2 text-base-content/70 [.preview_&]:my-0">
          {children}
        </p>
      );
    },
  };
}
