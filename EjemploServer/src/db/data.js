const heroes = [
  {
      "id": "1",
      "name": "Superman",
      "height": 1.91,
      "alias": "Clark Kent",
      "powers": ["Super strength", "Flight", "Heat vision"],
      "team": "Justice League",
      "archenemy": [2]
  },
  {
      "id": "2",
      "name": "Batman",
      "height": 1.88,
      "alias": "Bruce Wayne",
      "powers": ["Master detective", "Wealth"],
      "team": "Justice League",
      "archenemy": [1]
  },
  {
      "id": "3",
      "name": "Spider-Man",
      "height": 1.78,
      "alias": "Peter Parker",
      "powers": ["Spider-sense", "Web-slinging", "Super strength"],
      "team": "Avengers",
      "archenemy": [3,4]
  },
  {
      "id": "4",
      "name": "Wonder Woman",
      "height": 1.75,
      "alias": "Diana Prince",
      "powers": ["Super strength", "Flight", "Lasso of Truth"],
      "team": "Justice League",
      "archenemy": [5,6]
  },
   {
      "id": "5",
      "name": "Iron Man",
      "height": 1.88,
      "alias": "Tony Stark",
      "powers": ["Super intelligence", "Powered suit"],
      "team": "Avengers",
      "archenemy": [7,8]
  },
  {
      "id": "6",
      "name": "Captain America",
      "height": 1.88,
      "alias": "Steve Rogers",
      "powers": ["Super strength", "Superhuman agility"],
      "team": "Avengers",
      "archenemy": [8,9]
  },
  {
      "id": "7",
      "name": "The Flash",
      "height": 1.85,
      "alias": "Barry Allen",
      "powers": ["Super speed", "Time travel"],
      "team": "Justice League",
      "archenemy": [1,10]
  },
  {
      "id": "8",
      "name": "Thor",
      "height": 1.98,
      "alias": "Thor Odinson",
      "powers": ["Super strength", "Lightning control", "Mjolnir"],
      "team": "Avengers",
      "archenemy": [1,8]
  },
  {
      "id": "9",
      "name": "Hulk",
      "height": 2.44,
      "alias": "Bruce Banner",
      "powers": ["Super strength", "Regeneration"],
      "team": "Avengers",
      "archenemy": [5,3,7]
  },
  {
      "id": "10",
      "name": "Black Panther",
      "height": 1.83,
      "alias": "T'Challa",
      "powers": ["Enhanced strength", "Vibranium suit"],
      "team": "Avengers",
      "archenemy": [10]
  }
  
]

const villains = [
  {
      "id": "1",
      "name": "Joker",
      "height": 1.85,
      "alias": "Unknown",
      "powers": ["High intelligence", "Expert chemist", "Skilled fighter"],
      "team": "Injustice League",
      "archenemy": [2]
  },
  {
      "id": "2",
      "name": "Magneto",
      "height": 1.88,
      "alias": "Max Eisenhardt",
      "powers": ["Magnetic manipulation", "Flight", "Force field generation"],
      "team": "Brotherhood of Mutants",
      "archenemy": [1,2]
  },
  {
      "id": "3",
      "name": "Loki",
      "height": 1.93,
      "alias": "God of Mischief",
      "powers": ["Illusion projection", "Teleportation", "Cryokinesis"],
      "team": "Avengers",
      "archenemy": [2,3]
  },
  {
      "id": "4",
      "name": "Green Goblin",
      "height": 1.8,
      "alias": "Norman Osborn",
      "powers": ["Superhuman strength", "Expert scientist", "Goblin formula"],
      "team": "Sinister Six",
      "archenemy": [2,4]
  },
  {
      "id": "5",
      "name": "Thanos",
      "height": 2.01,
      "alias": "the Mad Titan",
      "powers": ["Superhuman strength", "Energy projection", "Immortality"],
      "team": "Black Order",
      "archenemy": [8]
  },
  {
      "id": "6",
      "name": "Doctor Doom",
      "height": 1.91,
      "alias": "Victor Von Doom",
      "powers": ["Genius intellect", "Technopathy", "Mystical abilities"],
      "team": "Legion of Doom",
      "archenemy": [9,10]
  },
  {
      "id": "7",
      "name": "Harley Quinn",
      "height": 1.7,
      "alias": "Dr. Harleen Frances Quinzel",
      "powers": ["Acrobatics", "Superhuman agility", "Skilled fighter"],
      "team": "Suicide Squad",
      "archenemy": [7,1]
  },
  {
      "id": "8",
      "name": "Venom",
      "height": 2.13,
      "alias": "Eddie Brock",
      "powers": ["Symbiote suit", "Superhuman strength", "Web-slinging"],
      "team": "Sinister Six",
      "archenemy": [10]
  },
  {
      "id": "9",
      "name": "Ra's al Ghul",
      "height": 1.88,
      "alias": "the Demon's Head",
      "powers": ["Extended longevity", "Genius intellect", "Master strategist"],
      "team": "League of Assassins",
      "archenemy": [8,1]
  },
  {
      "id": "10",
      "name": "Dormammu",
      "height": "Variable",
      "alias": "the Dread One",
      "powers": ["Dimensional manipulation", "Reality warping", "Energy projection"],
      "team": "the Faltine",
      "archenemy": [5,6,7]

  }
]
module.exports = { heroes, villains };

