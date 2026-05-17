import Join from "@registry/components/react/layout/join";
import Button from "@registry/components/react/forms/button";

export function JoinVertical() {
  return (
    <Join >
        <Button className="join-item">Top</Button>
        <Button className="join-item">Middle</Button>
        <Button className="join-item">Bottom</Button>
    </Join>
  );
}
