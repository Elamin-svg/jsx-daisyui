import Link from "@registry/components/react/navigation/link";

export function LinkInText() {
  return (
    <p>
      Tailwind CSS resets the style of links by default.
      <br />
      Add the <code>link</code> class to make it look like a{" "}
      <Link href="#">normal link</Link> again.
    </p>
  );
}
