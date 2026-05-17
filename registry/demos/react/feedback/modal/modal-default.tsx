"use client";
import { Modal, useModal } from "@registry/components/react/feedback/modal";
import Button from "@registry/components/react/forms/button";

export function ModalDefault() {
  const { ref, open, close } = useModal();

  return (
    <>
      <Button onClick={open}>Open modal</Button>

      <Modal ref={ref} onClose={close}>
        <Modal.Box>
          <Modal.Close />
          <Modal.Header title="Hello!" description="Press ESC key or click outside to close" />
          <Modal.Actions>
            <form method="dialog">
              <Button>Close</Button>
            </form>
          </Modal.Actions>
        </Modal.Box>
      </Modal>
    </>
  );
}
