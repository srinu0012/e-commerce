export default interface globalStoreType {
  globalProducts: Record<string,any>; 
  setGlobalProducts: (
    username: string,
    products: Record<string, any>[]
  ) => void; 
}