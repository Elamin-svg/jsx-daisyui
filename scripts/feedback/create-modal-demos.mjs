import fs from "fs";
import path from "path";

const ROOT = process.cwd();

function write(filePath, content) {
  const full = path.join(ROOT, filePath);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, content, "utf-8");
  console.log(`✓  ${filePath}`);
}

write(
  "registry/demos/react/feedback/modal/modal-default.tsx",
  `"use client";
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
`,
);

write(
  "registry/demos/react/feedback/modal/modal-with-actions.tsx",
  `"use client";
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
`,
);

write(
  "registry/demos/react/feedback/modal/modal-responsive.tsx",
  `"use client";
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
`,
);



console.log("\nDone!");