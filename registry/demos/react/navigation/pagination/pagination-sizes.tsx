import { Pagination } from "@registry/components/react/navigation/pagination";

export function PaginationSizes() {
  return (
    <div className="flex flex-col items-start gap-3">
      <Pagination defaultValue={2}>
        <Pagination.Item value={1} size="xs">1</Pagination.Item>
        <Pagination.Item value={2} size="xs">2</Pagination.Item>
        <Pagination.Item value={3} size="xs">3</Pagination.Item>
      </Pagination>
      <Pagination defaultValue={2}>
        <Pagination.Item value={1} size="sm">1</Pagination.Item>
        <Pagination.Item value={2} size="sm">2</Pagination.Item>
        <Pagination.Item value={3} size="sm">3</Pagination.Item>
      </Pagination>
      <Pagination defaultValue={2}>
        <Pagination.Item value={1} size="md">1</Pagination.Item>
        <Pagination.Item value={2} size="md">2</Pagination.Item>
        <Pagination.Item value={3} size="md">3</Pagination.Item>
      </Pagination>
      <Pagination defaultValue={2}>
        <Pagination.Item value={1} size="lg">1</Pagination.Item>
        <Pagination.Item value={2} size="lg">2</Pagination.Item>
        <Pagination.Item value={3} size="lg">3</Pagination.Item>
      </Pagination>
    </div>
  );
}
