import request from "supertest";
import app from "../src/app";

let cookie: string;

const _credentials = {
  email: "test@example.com",
  password: "asdf1234",
};

describe("Endpoints that should fail", () => {
  it("Non-existent GET should fail", () => {
    return request(app).get("/foo").expect(404);
  });

  it("Non-existent POST should fail", () => {
    return request(app).post("/foo").expect(404);
  });

  it("API test endpoint should fail", () => {
    return request(app).get("/api/test").expect(401);
  });

  it("Login should fail (user doesn't exist)", () => {
    return request(app).post("/auth/login").send(_credentials).expect(401);
  });

  it("Registration should succeed", () => {
    return request(app).post("/auth/register").send(_credentials).expect(200);
  });

  it("Registration should fail (duplicate email)", () => {
    return request(app).post("/auth/register").send(_credentials).expect(400);
  });

  it("Logout should succeed", () => {
    return request(app).get("/auth/logout").expect(200);
  });

  it("Login should succeed", () => {
    return request(app)
      .post("/auth/login")
      .send(_credentials)
      .expect(200)
      .then((res) => {
        cookie = res.headers["set-cookie"][0].split(";")[0];
      });
  });

  it("API test endpoint should succeed", () => {
    return request(app).get("/api/test").set("Cookie", cookie).expect(200);
  });
});
