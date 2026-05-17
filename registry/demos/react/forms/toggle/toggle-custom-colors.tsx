import Toggle from "@registry/components/react/forms/toggle";

export function ToggleCustomColors() {
  return (
    <Toggle
      defaultChecked
      className="border-indigo-600 bg-indigo-500 checked:bg-orange-400 checked:text-orange-800 checked:border-orange-500"
    />
  );
}
