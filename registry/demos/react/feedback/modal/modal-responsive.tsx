"use client";
import { Modal, useModal } from "@registry/components/react/feedback/modal";
import Button from "@registry/components/react/forms/button";

export function ModalResponsive() {
  const { ref, open, close } = useModal();

  return (
    <>
      <Button onClick={open}>Open modal</Button>

      <Modal ref={ref} onClose={close} responsive>
        <Modal.Box>
          <Modal.Header
            title="Responsive modal"
            description="Opens at bottom on mobile, center on desktop."
          />
          <Modal.Actions>
            <form method="dialog">
              <Button color="primary">Accept</Button>
            </form>
          </Modal.Actions>
        </Modal.Box>
      </Modal>
    </>
  );
}
