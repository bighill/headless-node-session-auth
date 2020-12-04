import request from "supertest";
import redis from "redis-mock";
import app from "../src/app";
import { closeDb } from "../src/lib/mongodb";

jest.mock("redis", () => redis);

const _credentials = {
  email: "testlogin@example.com",
  password: "asdf1234",
};

describe("Endpoints Fails : Login", () => {
  afterAll(async () => {
    await closeDb();
  });

  it("Login should fail : missing credentials", () => {
    return request(app).post("/auth/login").send({}).expect(401);
  });

  it("Login should fail : missing email", () => {
    return request(app)
      .post("/auth/login")
      .send({ password: _credentials.password })
      .expect(401);
  });

  it("Login should fail : missing password", () => {
    return request(app)
      .post("/auth/login")
      .send({ email: _credentials.email })
      .expect(401);
  });

  it("Login should fail : empty credentials", () => {
    return request(app)
      .post("/auth/login")
      .send({ email: "", password: "" })
      .expect(401);
  });

  it("Login should fail : empty email", () => {
    return request(app)
      .post("/auth/login")
      .send({ email: "", password: _credentials.password })
      .expect(401);
  });

  it("Login should fail : empty password", () => {
    return request(app)
      .post("/auth/login")
      .send({ email: _credentials.email, password: "" })
      .expect(401);
  });
});
