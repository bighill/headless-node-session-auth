import Reply from "../src/util/globalReply";

const _message = "test";
const _error = "error";
const _data = { id: "123qwe", n: 222, s: "testing" };

describe("Global Reply", () => {
  it("Should produce minimal reply", async (done) => {
    const input = { message: _message };
    const output = { message: _message, error: null, data: null };
    const reply = Reply(input);

    expect(reply).toEqual(output);
    done();
  });

  it("Should produce full reply", async (done) => {
    const input = { message: _message, error: _error, data: _data };
    const output = { message: _message, error: _error, data: _data };
    const reply = Reply(input);

    expect(reply).toEqual(output);
    done();
  });
});
