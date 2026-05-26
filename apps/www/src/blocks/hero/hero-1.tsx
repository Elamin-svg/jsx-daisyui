function Block() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Welcome to DaisyUI React</h1>
      <p className="text-lg text-base-content/70 mb-6">
        DaisyUI React is a collection of reusable React components built with
        jsx-daisyui and designed to be used together to build pages. These are
        not documented as standalone components, but rather as a collection of
        components that can be used together to build pages.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  );
}

export default {
  block: Block,
  name: "Hero 1",
  category: "hero",
  description: "A hero block with a title, description, and call to action.",
} as const;
