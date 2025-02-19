export default interface CartStoreType {
  cartProducts: Record<string, any>[];
  countProducts: Record<string, number>;
  orderedProducts: Record<string, any>[];
  countOrderedProducts: Record<string, number>;
  buyNow: () => void;
  setProducts: (product: Record<string, any>) => void;
}
