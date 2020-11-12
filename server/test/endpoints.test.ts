import request from "supertest";
import app from "../src/app";

describe("Endpoints", () => {
  it("Should not find non-existent GET", () => {
    return request(app).get("/foo").expect(404);
  });

  it("Should not find non-existent POST", () => {
    return request(app).post("/foo").expect(404);
  });

  it("API test endpoint should fail", () => {
    return request(app).get("/api/test").expect(401);
  });
});
