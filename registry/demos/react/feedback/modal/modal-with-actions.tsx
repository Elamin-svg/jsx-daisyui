"use client";
import { Modal, useModal } from "@registry/components/react/feedback/modal";
import Button from "@registry/components/react/forms/button";

export function ModalWithActions() {
  const { ref, open, close } = useModal();

  return (
    <>
      <Button onClick={open}>Open modal</Button>

      <Modal ref={ref} onClose={close}>
        <Modal.Box>
          <Modal.Close />
          <Modal.Header
            title="Are you sure?"
            description="This action cannot be undone. This will permanently delete your account."
          />
          <Modal.Actions>
            <form method="dialog">
              <Button>Cancel</Button>
            </form>
            <Button color="error">Delete account</Button>
          </Modal.Actions>
        </Modal.Box>
      </Modal>
    </>
  );
}
