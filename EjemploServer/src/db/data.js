const heroes = [
  {
    id: "1",
    name: "Superman",
    height: 1.91,
    alias: "Clark Kent",
    powers: ["Super strength", "Flight", "Heat vision"],
    team: "Justice League",
    archenemy: [1,2],
  },
  {
    id: "2",
    name: "Batman",
    height: 1.88,
    alias: "Bruce Wayne",
    powers: ["Master detective", "Wealth"],
    team: "Justice League",
    archenemy: [2,3],
  },
  {
    id: "3",
    name: "Spider-Man",
    height: 1.78,
    alias: "Peter Parker",
    powers: ["Spider-sense", "Web-slinging", "Super strength"],
    team: "Avengers",
    archenemy: [1,3],
  },
];

const villains = [
  {
    id: "1",
    name: "Lex Luthor",
    height: 1.85,
    alias: "Lex Luthor",
    powers: ["Super intelligence"],
    archenemy: [1,2],
  },
  {
    id: "2",
    name: "Joker",
    height: 1.83,
    alias: "Joker",
    powers: ["Insanity"],
    archenemy: [2,3]
  },
  {
    id: "3",
    name: "Green Goblin",
    height: 1.91,
    alias: "Green Goblin",
    powers: ["Super intelligence", "Goblin glider"],
    archenemy: [1,3]
  },
  {
    id: "4",
    name: "Otto",
    height: 1.91,
    alias: "Dr. Octopus",
    powers: ["Super intelligence", "Squire"],
    archenemy: [1,3]
  },
];

module.exports = { heroes, villains };
