const db = require("../data/dbConfig.js");
const Hobbits = require("./hobbitsModel.js");

describe("hobbits model", () => {
  // beforeAll(async () => {
//   beforeEach(async () => {
    afterEach(async () => {
    await db("hobbits").truncate();
  });

  describe("insert()", () => {
    it("should insert provided hobbit", async () => {
      await Hobbits.insert({ name: "gaffer" });

      const hobbits = await db("hobbits");

      expect(hobbits).toHaveLength(1);
    });

    it("should insert provided hobbit", async () => {
      let hobbit = await Hobbits.insert({ name: "gaffer" });
      expect(hobbit.name).toBe("gaffer");

      hobbit = await Hobbits.insert({ name: "sam" });
      expect(hobbit.name).toBe("sam");

      const hobbits = await db("hobbits");

      expect(hobbits).toHaveLength(2);
    });
  });
});

describe("remove()", () => {
    it("should remove provided hobbit", async () => {
      await Hobbits.remove({ id: 1 });

      const hobbits = await db("hobbits");

      expect(hobbits).toHaveLength(0);
    });

    it("should remove provided hobbit", async () => {
        await Hobbits.remove({ id: 2 });
  
        const hobbits = await db("hobbits");
  
        expect(hobbits).toHaveLength(0);
      });

      it("should remove provided hobbit", async () => {
        await Hobbits.remove({ id: 5 });
  
        const hobbits = await db("hobbits");
  
        expect(hobbits).toHaveLength(0);
      });

});
