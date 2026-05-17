import { sources } from "@registry/previews/react/__sources__";
import { Preview } from "./preview";

type Props = React.ComponentProps<typeof Preview>;

export function PreviewServer({ name, code, ...props }: Props) {
  const resolvedCode = code ?? (name ? sources[name] : undefined);
  return <Preview name={name} code={resolvedCode} {...props} />;
}
