const { heroes, villains } = require("../db/data");

const resolvers = {
  Query: {
    heroes: () => heroes,
    villains: () => villains,
    heroById: (_, { id }) => heroes.find((hero) => hero.id == id),
    villainById: (_, { id }) => villains.find((villain) => villain.id == id),
  },
  Villains: {
    archenemy(parent) {
      return heroes.filter((hero) => {
        return parent.archenemy.find((a) => a == hero.id);
      });
    },
  },
  Heroes: {
    archenemy(parent) {
      return villains.filter((villain) => {
        return parent.archenemy.find((a) => a == villain.id);
      });
    },
  },
};
module.exports = { resolvers };
