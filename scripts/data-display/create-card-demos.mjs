// scripts/data-display/create-card-demos.mjs
import fs from "fs";
import path from "path";
const ROOT = process.cwd();
function write(filePath, content) {
  const full = path.join(ROOT, filePath);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, content, "utf-8");
  console.log(`✓  ${filePath}`);
}

write(
  "registry/demos/react/data-display/card/card-default.tsx",
  `import { Card } from "@registry/components/react/data-display/card";
import Button from "@registry/components/react/forms/button";

export function CardDefault() {
  return (
    <Card className="w-72">
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <p>A simple card with a title, body text, and action button.</p>
        <Card.Actions>
          <Button color="primary" size="sm">Buy Now</Button>
        </Card.Actions>
      </Card.Body>
    </Card>
  );
}
`,
);

write(
  "registry/demos/react/data-display/card/card-image.tsx",
  `import { Card } from "@registry/components/react/data-display/card";
import Button from "@registry/components/react/forms/button";

export function CardImage() {
  return (
    <Card className="w-72">
      <Card.Figure src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
      <Card.Body>
        <Card.Title>Classic Sneakers</Card.Title>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <Card.Actions>
          <Button color="primary">Buy Now</Button>
        </Card.Actions>
      </Card.Body>
    </Card>
  );
}
`,
);

write(
  "registry/demos/react/data-display/card/card-side.tsx",
  `import { Card } from "@registry/components/react/data-display/card";
import Button from "@registry/components/react/forms/button";

export function CardSide() {
  return (
    <Card side className="max-w-sm">
      <Card.Figure src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" className="w-32 h-full" />
      <Card.Body>
        <Card.Title>New Arrivals</Card.Title>
        <p>Click the button to listen on Spotiwhy app.</p>
        <Card.Actions>
          <Button color="primary" size="sm">Listen</Button>
        </Card.Actions>
      </Card.Body>
    </Card>
  );
}
`,
);

write(
  "registry/demos/react/data-display/card/card-variants.tsx",
  `import { Card } from "@registry/components/react/data-display/card";

export function CardVariants() {
  return (
    <div className="flex flex-wrap gap-4">
      <Card variant="shadow" className="w-48">
        <Card.Body><Card.Title>Shadow</Card.Title><p>Default shadow card.</p></Card.Body>
      </Card>
      <Card variant="border" className="w-48">
        <Card.Body><Card.Title>Border</Card.Title><p>Bordered card variant.</p></Card.Body>
      </Card>
      <Card variant="dash" className="w-48">
        <Card.Body><Card.Title>Dash</Card.Title><p>Dashed border card.</p></Card.Body>
      </Card>
    </div>
  );
}
`,
);

write(
  "registry/demos/react/data-display/card/card-centered.tsx",
  `import { Card } from "@registry/components/react/data-display/card";
import Button from "@registry/components/react/forms/button";

export function CardCentered() {
  return (
    <Card className="w-64 bg-primary text-primary-content">
      <Card.Body centered>
        <Card.Title>Congratulations!</Card.Title>
        <p>You have been selected for a special offer.</p>
        <Card.Actions>
          <Button>Claim now</Button>
        </Card.Actions>
      </Card.Body>
    </Card>
  );
}
`,
);



console.log("\nDone!");
