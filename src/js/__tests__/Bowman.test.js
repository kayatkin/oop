import Bowman from "../Bowman";

test("should create Character for type Bowman", () => {
  const result = new Bowman("Bowman");

  expect(result).toEqual({
    name: "Bowman",
    type: "Bowman",
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});
