export const destinations = [
  {
    id: 1,
    name: "Mussoorie",
    slug: "mussoorie",
    image: "/images/destinations/mussoorie.webp",
    category: "Hill Station",
    description:
      "Mussoorie, known as the Queen of Hills, offers scenic views, pleasant weather, and colonial charm.",
    highlights: [
      "Kempty Falls",
      "Gun Hill",
      "Mall Road",
      "Camel’s Back Road"
    ],
    gallery :[
      "/images/Mussoorie/mussoorie_1.webp",
      "/images/Mussoorie/mussoorie_2.webp",
      "/images/Mussoorie/mussoorie_3.webp",
      "/images/Mussoorie/mussoorie_4.webp",
    ]
    ,similar: ["nainital", "rishikesh", "almora"]
  },
  {
    id: 2,
    name: "Nainital",
    slug: "nainital",
    image: "/images/destinations/nainital.webp",
    category: "Hill Station",
    description:
      "Nainital is a beautiful lake town surrounded by mountains, ideal for family and honeymoon trips.",
    highlights: [
      "Naini Lake",
      "Naina Devi Temple",
      "Snow View Point",
      "Mall Road"
    ],
    gallery :[
      "/images/Nainital/nainital_1.webp",
      "/images/Nainital/nainital_2.webp",
      "/images/Nainital/nainital_4.webp",
    ]
    ,similar: ["mussoorie", "almora", "rishikesh"]
  },
  {
    id: 3,
    name: "Rishikesh",
    slug: "rishikesh",
    image: "/images/destinations/rishikesh.webp",
    category: "Spiritual & Adventure",
    description:
      "Rishikesh is the yoga capital of the world, famous for spirituality, river rafting, and adventure sports.",
    highlights: [
      "Ganga Aarti",
      "Laxman Jhula",
      "River Rafting",
      "Yoga Ashrams"
    ],
    gallery :[
      "/images/Rishikesh/rishikesh_1.webp",
      "/images/Rishikesh/rishikesh_2.webp", 
      "/images/Rishikesh/rishikesh_3.webp",
      "/images/Rishikesh/rishikesh_4.webp"
    ]
    ,similar: ["haridwar", "mussoorie", "auli"]
  },
  {
    id: 4,
    name: "Haridwar",
    slug: "haridwar",
    image: "/images/destinations/haridwar.webp",
    category: "Spiritual",
    description:
      "Haridwar is one of the holiest cities in India, where the River Ganga descends from the Himalayas.",
    highlights: [
      "Har Ki Pauri",
      "Ganga Aarti",
      "Chandi Devi Temple",
      "Mansa Devi Temple"
    ],
    gallery :[
      "/images/Haridwar/haridwar1.webp",
      "/images/Haridwar/haridwar2.webp",
      "/images/Haridwar/haridwar3.webp",
      "/images/Haridwar/haridwar4.webp"
    ]
    ,similar: ["rishikesh", "kedarnath", "badrinath"]
  },
  {
    id: 5,
    name: "Auli",
    slug: "auli",
    image: "/images/destinations/auli.webp",
    category: "Adventure",
    description:
      "Auli is a famous skiing destination offering snow-covered slopes and panoramic Himalayan views.",
    highlights: [
      "Skiing Slopes",
      "Auli Ropeway",
      "Joshimath",
      "Snow Peaks"
    ],
    gallery :[
      "/images/Auli/auli_1.webp",
      "/images/Auli/auli_2.webp",
      "/images/Auli/auli_3.webp",
    ]
    ,similar: ["mussoorie", "rishikesh", "chopta"]
  },
  {
    id: 6,
    name: "Jim Corbett National Park",
    slug: "jim-corbett",
    image: "/images/destinations/corbett.webp",
    category: "Wildlife",
    description:
      "Jim Corbett National Park is India’s oldest national park, famous for tigers and jungle safaris.",
    highlights: [
      "Jeep Safari",
      "Tiger Reserve",
      "Garjia Temple",
      "River Ramganga"
    ],
    gallery :[
      "/images/Jim_Corbett_National_Park/Jim_Corbett_National_Park_1.webp",
      "/images/Jim_Corbett_National_Park/Jim_Corbett_National_Park_2.webp",
      "/images/Jim_Corbett_National_Park/Jim_Corbett_National_Park_4.webp",
    ]
    ,similar: ["nainital", "almora", "chopta"]
  },
  {
    id: 7,
    name: "Kedarnath",
    slug: "kedarnath",
    image: "/images/destinations/kedarnath.webp",
    category: "Spiritual",
    description:
      "Kedarnath is one of the Char Dham pilgrimage sites, dedicated to Lord Shiva and surrounded by snow peaks.",
    highlights: [
      "Kedarnath Temple",
      "Trekking Route",
      "Mandakini River",
      "Snowy Mountains"
    ],
    gallery :[
      "/images/Kedarnath/kedarnath_1.webp",
      "/images/Kedarnath/kedarnath_3.webp",
      "/images/Kedarnath/kedarnath_4.webp",
    ]
    ,similar: ["badrinath", "haridwar", "chopta"]
  },
  {
    id: 8,
    name: "Badrinath",
    slug: "badrinath",
    image: "/images/destinations/badrinath.webp",
    category: "Spiritual",
    description:
      "Badrinath is a sacred Char Dham site, dedicated to Lord Vishnu, located between Nar and Narayan peaks.",
    highlights: [
      "Badrinath Temple",
      "Tapt Kund",
      "Mana Village",
      "Alaknanda River"
    ],
    gallery :[
      "/images/Badrinath/badrinath_1.webp",
      "/images/Badrinath/badrinath_3.webp",
      "/images/Badrinath/badrinath_4.webp",
    ] 
    ,similar: ["kedarnath", "haridwar", "auli"]
  },
  {
    id: 9,
    name: "Chopta",
    slug: "chopta",
    image: "/images/destinations/chopta.webp",
    category: "Nature & Trekking",
    description:
      "Chopta, also known as Mini Switzerland of India, is a base for trekking to Tungnath and Chandrashila.",
    highlights: [
      "Tungnath Trek",
      "Chandrashila Peak",
      "Meadows",
      "Himalayan Views"
    ],
    gallery :[
      "/images/Chopta/chopta_1.webp",
      "/images/Chopta/chopta_2.webp",
      "/images/Chopta/chopta_3.webp",
      "/images/Chopta/chopta_4.webp",
    ]
    ,similar: ["auli", "kedarnath", "almora"]
  },
  {
    id: 10,
    name: "Almora",
    slug: "almora",
    image: "/images/destinations/almora.webp",
    category: "Culture & Hills",
    description:
      "Almora is known for its rich culture, scenic beauty, and peaceful Himalayan surroundings.",
    highlights: [
      "Bright End Corner",
      "Zero Point",
      "Local Markets",
      "Kumaoni Culture"
    ],
    gallery :[
      "/images/Almora/almora_1.webp",
      "/images/Almora/almora_2.webp",
      "/images/Almora/almora_3.webp",
      "/images/Almora/almora_4.webp",
    ]
    ,similar: ["nainital", "mussoorie", "chopta"]
  }
];

export default destinations;
