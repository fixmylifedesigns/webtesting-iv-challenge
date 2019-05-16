const request = require("supertest");

const server = require("./server.js");

describe("server", () => {
  it("sets the environment to testing", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });

  //open client make request and expect response
  describe("GET /", () => {
    it("should return 200 ok", () => {
      return request(server)
        .get("/")
        .expect(200);
    });
    // using async and await
    it("using the sqaud (async/await)", async () => {
      const res = await request(server).get("/");
      expect(res.status).toBe(200);
    });

    it("using the sqaud (async/await)", async () => {
      const res = await request(server).get("/");
      expect(res.type).toBe("application/json"); // content-type
    });

    it("should return JSON using done callback", done => {
      // using the done callback
      request(server)
        .get("/")
        .then(res => {
          expect(res.type).toBe("application/json"); // Content-Type
          done();
        });
    });

    it('should return {api:"up"}', () => {
      return request(server)
        .get("/")
        .then(res => {
          const { body } = res;
          expect(body.api).toBe("up");
        });
    });

    it('should return {api:"up"}', () => {
      expected = { api: "up" };
      return request(server)
        .get("/")
        .then(res => {
          expect(res.body).toEqual(expected);
        });
    });
    describe("Del /", () => {
      it("should return 204 ok", () => {
        return request(server)
          .delete("/1")
          .expect(204);
      });
    });
  });
});
