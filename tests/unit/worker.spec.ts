import { SimpleWorker } from "../../src/worker/worker";
import { expect } from "chai";

describe("Worker", () => {
  it("SimpleWorker should return records as-is", async () => {
    const worker = new SimpleWorker<number>();
    const inputRecords = [1, 2, 3, 4, 5];
    const outputRecords = await worker.work(inputRecords);
    expect(outputRecords).to.deep.equal(inputRecords);
  });
});
