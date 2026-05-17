import Alert from "@registry/components/react/feedback/alert";

export function AlertStyles() {
  return (
    <div className="flex flex-col gap-3 w-full max-w-sm">
      <Alert variant="info" style="solid"><span>Solid style alert</span></Alert>
      <Alert variant="info" style="soft"><span>Soft style alert</span></Alert>
      <Alert variant="info" style="outline"><span>Outline style alert</span></Alert>
      <Alert variant="info" style="dash"><span>Dash style alert</span></Alert>
    </div>
  );
}
