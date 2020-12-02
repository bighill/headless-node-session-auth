import request from "supertest";
import app from "../src/app";
import { closeDb } from "../src/lib/mongodb";

const _credentials = {
  email: "testregistration@example.com",
  password: "asdf1234",
};

describe("Endpoints Fails : Registration", () => {
  afterAll(async () => {
    await closeDb();
  });

  /*
    Force duplicate registration
  */
  it("Registration should succeed", () => {
    return request(app).post("/auth/register").send(_credentials).expect(200);
  });

  it("Registration should fail (duplicate email)", () => {
    return request(app).post("/auth/register").send(_credentials).expect(400);
  });

  /*
    Bad registration POST requests
  */
  it("Registration should fail : missing credentials", () => {
    return request(app).post("/auth/register").send({}).expect(400);
  });

  it("Registration should fail : missing email", () => {
    return request(app)
      .post("/auth/register")
      .send({ password: _credentials.password })
      .expect(400);
  });

  it("Registration should fail : missing password", () => {
    return request(app)
      .post("/auth/register")
      .send({ email: _credentials.email })
      .expect(400);
  });

  it("Registration should fail : empty credentials", () => {
    return request(app)
      .post("/auth/register")
      .send({ email: "", password: "" })
      .expect(400);
  });

  it("Registration should fail : empty email", () => {
    return request(app)
      .post("/auth/register")
      .send({ email: "", password: _credentials.password })
      .expect(400);
  });

  it("Registration should fail : empty password", () => {
    return request(app)
      .post("/auth/register")
      .send({ email: _credentials.email, password: "" })
      .expect(400);
  });
});
