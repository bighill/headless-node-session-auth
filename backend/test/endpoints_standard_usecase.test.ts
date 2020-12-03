import request from "supertest";
import app from "../src/app";
import { closeDb } from "../src/lib/mongodb";

let cookie: string;

const _credentials = {
  email: "teststandard@example.com",
  password: "asdf1234",
};

describe("Endpoints : Standard usecase", () => {
  afterAll(async () => {
    await closeDb();
  });

  it("Registration should succeed", () => {
    return request(app).post("/auth/register").send(_credentials).expect(200);
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

  it("API user endpoint should succeed", () => {
    return request(app).get("/api/user").set("Cookie", cookie).expect(200);
  });

  it("Logout should succeed", () => {
    return request(app).get("/auth/logout").expect(200);
  });
});
