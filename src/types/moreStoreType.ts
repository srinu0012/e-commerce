export default interface MoreStoreType {
  Products: Record<string, any>[];
  viewMore: (newproducts: Record<string, any>[]) => void;
}
