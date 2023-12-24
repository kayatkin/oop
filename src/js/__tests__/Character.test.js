import Character from "../Character";

// Наборы недействительных параметров
const invalidParams = [
  [150, "Bowman", "Передано некорректное значение имени персонажа"],
  ["A", "Bowman", "Передано некорректное значение имени персонажа"],
  ["ElevenLetters", "Bowman", "Передано некорректное значение имени персонажа"],
  ["Bowman", "Bo", "Передано некорректное значение типа персонажа"],
  ["Bowman", undefined, "Передано некорректное значение типа персонажа"],
  ["Bowman", 150, "Передано некорректное значение типа персонажа"],
];

test.each(invalidParams)(
  "should throw Error for invalid parameters %p",
  (name, type, errorMessage) => {
    expect(() => new Character(name, type)).toThrow(errorMessage);
  }
);

test('should create Character for name "String"', () => {
  const result = new Character("String", "Bowman");

  expect(result).toEqual({
    name: "String",
    type: "Bowman",
    health: 100,
    level: 1,
    attack: undefined,
    defence: undefined,
  });
});

test("should be Error for health <= 0 and level up", () => {
  expect(() => {
    const bowman = new Character("Bowman", "Bowman");
    bowman.attack = 25;
    bowman.defence = 25;
    bowman.damage(135); // health drops to 0
    bowman.levelUp();
  }).toThrow("Нельзя повысить уровень умершего");
});

test("should not decrease health when the character is already dead", () => {
  const deadBowman = new Character("Bowman", "Bowman");
  deadBowman.attack = 25;
  deadBowman.defence = 25;
  deadBowman.health = 0; // explicitly set the character's health to 0
  deadBowman.damage(50);
  expect(deadBowman.health).toBe(0);
});

test("should level, attack, defence, health up to 2, 30, 30, 100", () => {
  const user = new Character("String", "Bowman");
  user.attack = 25;
  user.defence = 25;
  user.levelUp();

  expect(user).toEqual({
    name: "String",
    type: "Bowman",
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  });
});

test("should health down to 97", () => {
  const user = new Character("String", "Bowman");
  user.attack = 25;
  user.defence = 25;
  user.damage(4);

  expect(user).toEqual({
    name: "String",
    type: "Bowman",
    health: 97,
    level: 1,
    attack: 25,
    defence: 25,
  });
});
