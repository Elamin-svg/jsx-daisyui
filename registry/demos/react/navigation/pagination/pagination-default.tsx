import { Pagination } from "@registry/components/react/navigation/pagination";

export function PaginationDefault() {
  return (
    <Pagination defaultValue={2}>
      <Pagination.Item value={1}>1</Pagination.Item>
      <Pagination.Item value={2}>2</Pagination.Item>
      <Pagination.Item value={3}>3</Pagination.Item>
      <Pagination.Item value={4}>4</Pagination.Item>
      <Pagination.Item value={5}>5</Pagination.Item>
    </Pagination>
  );
}
