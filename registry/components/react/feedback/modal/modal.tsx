"use client";

import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";

export function useModal() {
  const ref = React.useRef<HTMLDialogElement>(null);
  const [isOpen, setIsOpen] = React.useState(false);

  const open = React.useCallback(() => {
    ref.current?.showModal();
    setIsOpen(true);
  }, []);

  const close = React.useCallback(() => {
    ref.current?.close();
    setIsOpen(false);
  }, []);

  const toggle = React.useCallback(() => {
    ref.current?.open ? close() : open();
  }, [open, close]);

  return { ref, isOpen, open, close, toggle };
}

const modalVariants = tv({
  slots: {
    root: "modal",
    box: "modal-box relative",
    header: "mb-4",
    title: "font-bold text-lg",
    desc: "text-base-content/70 text-sm mt-1",
    action: "modal-action",
    backdrop: "modal-backdrop",
    close: "btn btn-sm btn-circle btn-ghost absolute right-2 top-2",
  },
  variants: {
    placement: {
      top: { root: "modal-top" },
      middle: { root: "modal-middle" },
      bottom: { root: "modal-bottom" },
      start: { root: "modal-start" },
      end: { root: "modal-end" },
    },
    responsive: {
      true: { root: "modal-bottom sm:modal-middle" },
    },
  },
});

type ModalVariants = VariantProps<typeof modalVariants>;

export type ModalProps = Omit<React.ComponentProps<"dialog">, "open"> &
  ModalVariants & {
    closeOnBackdrop?: boolean;
  };

const Modal = React.forwardRef<HTMLDialogElement, ModalProps>(
  (
    {
      placement,
      responsive,
      closeOnBackdrop = true,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const { root, backdrop } = modalVariants({
      placement: responsive ? undefined : (placement ?? "middle"),
      responsive,
    });

    return (
      <dialog ref={ref} className={root({ className })} {...props}>
        {children}
        {closeOnBackdrop && (
          <form method="dialog" className={backdrop()}>
            <button tabIndex={-1}>close</button>
          </form>
        )}
      </dialog>
    );
  },
);

Modal.displayName = "Modal";

export type ModalBoxProps = Omit<React.ComponentProps<"div">, "color">;

const ModalBox = React.forwardRef<HTMLDivElement, ModalBoxProps>(
  ({ className, ...props }, ref) => {
    const { box } = modalVariants();
    return <div ref={ref} className={box({ className })} {...props} />;
  },
);
ModalBox.displayName = "ModalBox";

export type ModalHeaderProps = Omit<React.ComponentProps<"div">, "color"> & {
  title: string;
  description?: string;
};

const ModalHeader = React.forwardRef<HTMLDivElement, ModalHeaderProps>(
  ({ title, description, className, ...props }, ref) => {
    const { header, title: titleCn, desc } = modalVariants();
    return (
      <div ref={ref} className={header({ className })} {...props}>
        <h3 className={titleCn()}>{title}</h3>
        {description && <p className={desc()}>{description}</p>}
      </div>
    );
  },
);
ModalHeader.displayName = "ModalHeader";

export type ModalBodyProps = Omit<React.ComponentProps<"div">, "color">;

const ModalBody = React.forwardRef<HTMLDivElement, ModalBodyProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={className} {...props} />
  ),
);
ModalBody.displayName = "ModalBody";

export type ModalActionsProps = Omit<React.ComponentProps<"div">, "color">;

const ModalActions = React.forwardRef<HTMLDivElement, ModalActionsProps>(
  ({ className, ...props }, ref) => {
    const { action } = modalVariants();
    return <div ref={ref} className={action({ className })} {...props} />;
  },
);
ModalActions.displayName = "ModalActions";

export type ModalCloseProps = Omit<React.ComponentProps<"button">, "color">;

const ModalClose = React.forwardRef<HTMLButtonElement, ModalCloseProps>(
  ({ className, onClick, children = "✕", ...props }, ref) => {
    const { close } = modalVariants();
    return (
      <form method="dialog">
        <button
          ref={ref}
          className={close({ className })}
          onClick={onClick}
          {...props}
        >
          {children}
        </button>
      </form>
    );
  },
);
ModalClose.displayName = "ModalClose";

const ModalComponent = Object.assign(Modal, {
  Box: ModalBox,
  Header: ModalHeader,
  Body: ModalBody,
  Actions: ModalActions,
  Close: ModalClose,
});

export { ModalComponent as Modal };
