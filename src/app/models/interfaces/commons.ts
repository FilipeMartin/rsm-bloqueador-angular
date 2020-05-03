export interface Hierarchical<T> {
  children: Array<T>;
}

export interface Pagination<T> {
  data: Array<T>;
  page: number;
  perPage: number;
  totalPages: number;
  totalItems: number;
}
