import { Worker } from "./base";

export class SimpleWorker<T> implements Worker<T, T> {
  async work(records: T[]): Promise<T[]> {
    // In this simple worker, we just return the records as-is
    return records;
  }
}
