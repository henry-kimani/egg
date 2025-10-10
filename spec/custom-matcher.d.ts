
interface CustomFirestoreMatchers<T> {
  toDenyFirestore(actual?: any): Promise<{ pass: boolean, message: ()=> string }>
  toAllowFirestore(actual?: any): Promise<{ pass: boolean, message: ()=> string }>
}

declare module "bun:test" {
  interface Matchers<T> extends CustomFirestoreMatchers<T> {}
}
