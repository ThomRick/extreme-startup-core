export interface Sender<T> {
  send(question: T): Promise<T>
}
