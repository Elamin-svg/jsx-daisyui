import {
  CircleCheckIcon,
  InfoIcon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react";
import {
  Toaster as Sonner,
  toast as sonnerToast,
  type ToasterProps,
} from "sonner";

function Toaster({ position = "bottom-right", ...props }: ToasterProps) {
  return (
    <Sonner
      position={position}
      icons={{
        success: <CircleCheckIcon className="size-4" />,
        info: <InfoIcon className="size-4" />,
        warning: <TriangleAlertIcon className="size-4" />,
        error: <OctagonXIcon className="size-4" />,
      }}
      toastOptions={{
        unstyled: true,
        classNames: {
          toast: "alert w-72",
          success: " alert-success",
          error: " alert-error",
          warning: " alert-warning",
          info: " alert-info",
          loading: "       ",
          loader: " static! ",
          actionButton: "btn btn-sm btn-neutral ml-auto",
        },
      }}
      {...props}
    />
  );
}

Toaster.displayName = "Toaster";

export { Toaster, sonnerToast as toast };
