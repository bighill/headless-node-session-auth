import request from "supertest";
import app from "../src/app";

const _credentials = {
  email: "testlogin@example.com",
  password: "asdf1234",
};

describe("Endpoints Fails : Login", () => {
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
