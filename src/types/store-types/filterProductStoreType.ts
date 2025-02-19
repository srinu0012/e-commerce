export default interface filterProductsType {
  filterProducts: Object[];
  setFilterProducts: (products: Record<string, any>[]) => void;
}
