import { List } from "@registry/components/react/data-display/list";

export function ListDefault() {
  return (
    <List className="w-72">
      <List.Row>
        <List.ColGrow>
          <p className="font-semibold">Inbox</p>
          <p className="text-xs text-base-content/60">3 new messages</p>
        </List.ColGrow>
        <span className="badge badge-primary badge-sm">3</span>
      </List.Row>
      <List.Row>
        <List.ColGrow>
          <p className="font-semibold">Drafts</p>
          <p className="text-xs text-base-content/60">1 unsaved draft</p>
        </List.ColGrow>
        <span className="badge badge-ghost badge-sm">1</span>
      </List.Row>
      <List.Row>
        <List.ColGrow>
          <p className="font-semibold">Sent</p>
          <p className="text-xs text-base-content/60">12 messages</p>
        </List.ColGrow>
      </List.Row>
    </List>
  );
}
