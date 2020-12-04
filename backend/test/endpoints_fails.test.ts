import request from "supertest";
import redis from "redis-mock";
import app from "../src/app";
import { closeDb } from "../src/lib/mongodb";

jest.mock("redis", () => redis);

const _credentials = {
  email: "testfails@example.com",
  password: "asdf1234",
};

describe("Endpoints Fails", () => {
  afterAll(async () => {
    await closeDb();
  });

  it("Non-existent GET should fail", () => {
    return request(app).get("/foo").expect(404);
  });

  it("Non-existent POST should fail", () => {
    return request(app).post("/foo").expect(404);
  });

  it("API test endpoint should fail", () => {
    return request(app).get("/api/test").expect(401);
  });

  it("API user endpoint should fail", () => {
    return request(app).get("/api/user").expect(401);
  });

  it("Login should fail (user doesn't exist)", () => {
    return request(app).post("/auth/login").send(_credentials).expect(401);
  });
});
