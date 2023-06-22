export interface CategoryItemInterface {
  id: string;
  label: string;
  path: string;
  child?: CategoryItemInterface[];
}
