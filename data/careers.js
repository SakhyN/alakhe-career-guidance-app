const careers = [
  {
    id: 1,
    name: "Software Developer",
    category: "Technology",
    description: "Design apps, websites, and digital systems.",
    interests: ["Technology"],
    subjects: ["Mathematics", "English"],
    helpfulSubjects: ["Science"],
    recommendedPassRate: {
      Mathematics: 60,
      English: 50
    },
    alternativeRoute: "Start with IT support, short coding courses, or digital skills programs.",
    futures: ["Using technology"],
    environments: ["Online / digital work"],
    paths: ["Professional in a career", "Both career and business owner"]
  },
  {
    id: 2,
    name: "Nurse",
    category: "Health",
    description: "Care for patients and support health services.",
    interests: ["Health"],
    subjects: ["Life Sciences", "English"],
    helpfulSubjects: ["Science"],
    recommendedPassRate: {
      "Life Sciences": 60,
      English: 50
    },
    alternativeRoute: "Consider health support work, caregiving, or health assistant pathways.",
    futures: ["Helping people"],
    environments: ["Hospital or care setting"],
    paths: ["Professional in a career"]
  },
  {
    id: 3,
    name: "Teacher",
    category: "Education",
    description: "Teach, guide, and support learners.",
    interests: ["Education"],
    subjects: ["Languages", "English"],
    helpfulSubjects: [],
    recommendedPassRate: {
      Languages: 55,
      English: 55
    },
    alternativeRoute: "Tutoring, youth mentoring, assistant teaching, or community education work.",
    futures: ["Teaching and guiding others", "Helping people"],
    environments: ["School or training environment"],
    paths: ["Professional in a career"]
  },
  {
    id: 4,
    name: "Accountant",
    category: "Business",
    description: "Manage finances, budgets, and financial records.",
    interests: ["Business"],
    subjects: ["Accounting", "Mathematics", "English"],
    helpfulSubjects: [],
    recommendedPassRate: {
      Accounting: 60,
      Mathematics: 50,
      English: 50
    },
    alternativeRoute: "Bookkeeping, office admin, small business finance, or accounting support roles.",
    futures: ["Running a business"],
    environments: ["Office or professional setting"],
    paths: ["Professional in a career", "Both career and business owner"]
  },
  {
    id: 5,
    name: "Agricultural Scientist",
    category: "Agriculture",
    description: "Improve farming systems, crops, and food production.",
    interests: ["Farming & Agriculture"],
    subjects: ["Agricultural Science", "Science", "English"],
    helpfulSubjects: [],
    recommendedPassRate: {
      "Agricultural Science": 60,
      Science: 50,
      English: 50
    },
    alternativeRoute: "Agricultural college, farm support training, or practical agriculture projects.",
    futures: ["Working with nature and food production"],
    environments: ["Outdoor / field work"],
    paths: ["Professional in a career"]
  },
  {
    id: 6,
    name: "Farm Manager",
    category: "Agriculture",
    description: "Manage crops, livestock, workers, and farm operations.",
    interests: ["Farming & Agriculture", "Business"],
    subjects: ["Agricultural Science", "English"],
    helpfulSubjects: ["Accounting"],
    recommendedPassRate: {
      "Agricultural Science": 50,
      English: 45
    },
    alternativeRoute: "Start with small-scale farming, practical farm work, or agribusiness training.",
    futures: ["Working with nature and food production", "Running a business"],
    environments: ["Outdoor / field work"],
    paths: ["Both career and business owner", "Business owner"]
  },
  {
    id: 7,
    name: "Civil Engineer",
    category: "Engineering",
    description: "Design and manage roads, bridges, and infrastructure.",
    interests: ["Technology"],
    subjects: ["Mathematics", "Science", "English"],
    helpfulSubjects: [],
    recommendedPassRate: {
      Mathematics: 65,
      Science: 60,
      English: 50
    },
    alternativeRoute: "Construction supervision, technical training, or civil engineering technician route.",
    futures: ["Building or fixing things"],
    environments: ["Outdoor / field work", "Office or professional setting"],
    paths: ["Professional in a career"]
  },
  {
    id: 8,
    name: "Graphic Designer",
    category: "Creative Arts",
    description: "Create visual designs for brands, media, and digital content.",
    interests: ["Creative Arts", "Technology"],
    subjects: ["Languages", "English"],
    helpfulSubjects: [],
    recommendedPassRate: {
      Languages: 50,
      English: 50
    },
    alternativeRoute: "Self-taught design, short courses, freelancing, or digital content creation.",
    futures: ["Using technology"],
    environments: ["Online / digital work"],
    paths: ["Both career and business owner", "Professional in a career"]
  },
  {
    id: 9,
    name: "Doctor",
    category: "Health & Medicine",
    description: "Diagnose illnesses, prescribe treatment, and help people recover their health.",
    interests: ["Health & Medicine"],
    subjects: ["Science", "Life Sciences", "English"],
    helpfulSubjects: ["Mathematics"],
    recommendedPassRate: {
      Science: 70,
      "Life Sciences": 75,
      English: 60
    },
    alternativeRoute: "Explore health support roles, clinic assisting, and science study pathways.",
    futures: ["Helping people"],
    environments: ["Hospital or care setting"],
    paths: ["Professional in a career"]
  },
  {
    id: 10,
    name: "Pharmacist",
    category: "Health & Medicine",
    description: "Dispense medication, advise patients, and support safe health treatment.",
    interests: ["Health & Medicine"],
    subjects: ["Science", "Life Sciences", "English"],
    helpfulSubjects: ["Mathematics"],
    recommendedPassRate: {
      Science: 70,
      "Life Sciences": 65,
      English: 60
    },
    alternativeRoute: "Pharmacy assistant training, health support roles, or technical pharmacy courses.",
    futures: ["Helping people"],
    environments: ["Pharmacy", "Hospital or care setting"],
    paths: ["Professional in a career"]
  },
  {
    id: 11,
    name: "Psychologist",
    category: "Social Services & Community",
    description: "Understand behavior, support mental health, and help people navigate life challenges.",
    interests: ["Social Services & Community"],
    subjects: ["English", "Life Sciences"],
    helpfulSubjects: ["Science"],
    recommendedPassRate: {
      English: 60,
      "Life Sciences": 65,
      Science: 60
    },
    alternativeRoute: "Counseling assistant, community services training, or mentorship programs.",
    futures: ["Helping people"],
    environments: ["Office or professional setting"],
    paths: ["Professional in a career"]
  },
  {
    id: 12,
    name: "Chef",
    category: "Hospitality & Tourism",
    description: "Prepare meals, manage kitchen teams, and create great food experiences.",
    interests: ["Hospitality & Tourism"],
    subjects: ["English"],
    helpfulSubjects: ["Life Sciences"],
    recommendedPassRate: {
      English: 50
    },
    alternativeRoute: "Cookery school, catering training, or hospitality apprenticeship.",
    futures: ["Working with nature and food production", "Running a business"],
    environments: ["Kitchen", "Hospitality setting"],
    paths: ["Business owner", "Professional in a career"]
  },
  {
    id: 13,
    name: "Hotel Manager",
    category: "Hospitality & Tourism",
    description: "Oversee hotel operations and ensure guests have a great stay.",
    interests: ["Hospitality & Tourism", "Business & Finance"],
    subjects: ["English", "Accounting"],
    helpfulSubjects: ["Mathematics"],
    recommendedPassRate: {
      English: 55,
      Accounting: 50
    },
    alternativeRoute: "Hospitality, tourism studies or practical hotel training.",
    futures: ["Working with nature and food production", "Running a business"],
    environments: ["Office or professional setting"],
    paths: ["Business owner", "Professional in a career"]
  },
  {
    id: 14,
    name: "Plumber",
    category: "Construction & Building",
    description: "Install and repair water systems, pipes, and sanitation fixtures.",
    interests: ["Construction & Building"],
    subjects: ["Mathematics", "English"],
    helpfulSubjects: ["Science"],
    recommendedPassRate: {
      Mathematics: 50,
      English: 45
    },
    alternativeRoute: "Plumbing apprenticeship, trade training, or technical college.",
    futures: ["Building or fixing things"],
    environments: ["Outdoor / field work"],
    paths: ["Business owner", "Professional in a career"]
  },
  {
    id: 15,
    name: "Carpenter",
    category: "Construction & Building",
    description: "Build and repair wooden structures, furniture, and frames.",
    interests: ["Construction & Building"],
    subjects: ["Mathematics", "English"],
    helpfulSubjects: ["Visual Arts"],
    recommendedPassRate: {
      Mathematics: 50,
      English: 45
    },
    alternativeRoute: "Carpentry apprenticeship, trade college, or practical training.",
    futures: ["Building or fixing things"],
    environments: ["Outdoor / field work"],
    paths: ["Business owner"]
  },
  {
    id: 16,
    name: "Electrician",
    category: "Construction & Building",
    description: "Install and maintain electrical systems in homes and businesses.",
    interests: ["Construction & Building", "Technology"],
    subjects: ["Mathematics", "Science", "English"],
    helpfulSubjects: ["Physical Science"],
    recommendedPassRate: {
      Mathematics: 50,
      Science: 50,
      English: 45
    },
    alternativeRoute: "Trade school, electrical apprenticeship, or technical training.",
    futures: ["Building or fixing things"],
    environments: ["Outdoor / field work", "Office or professional setting"],
    paths: ["Business owner", "Professional in a career"]
  },
  {
    id: 17,
    name: "Marketing Manager",
    category: "Business & Finance",
    description: "Plan campaigns and build brands to reach customers.",
    interests: ["Business & Finance"],
    subjects: ["English", "Accounting"],
    helpfulSubjects: ["Languages"],
    recommendedPassRate: {
      English: 60,
      Accounting: 55
    },
    alternativeRoute: "Marketing courses, digital media training, or business studies.",
    futures: ["Running a business"],
    environments: ["Office or professional setting"],
    paths: ["Business owner", "Professional in a career"]
  },
  {
    id: 18,
    name: "Data Analyst",
    category: "Technology",
    description: "Interpret numbers and trends to help businesses make decisions.",
    interests: ["Technology", "Business & Finance"],
    subjects: ["Mathematics", "Computer Studies", "English"],
    helpfulSubjects: ["Science"],
    recommendedPassRate: {
      Mathematics: 65,
      "Computer Studies": 60,
      English: 55
    },
    alternativeRoute: "IT support, data technician courses, or analytics training.",
    futures: ["Using technology"],
    environments: ["Online / digital work", "Office or professional setting"],
    paths: ["Professional in a career"]
  },
  {
    id: 19,
    name: "Social Worker",
    category: "Social Services & Community",
    description: "Support families, communities, and people in need through social programs.",
    interests: ["Social Services & Community"],
    subjects: ["English", "Life Sciences"],
    helpfulSubjects: ["History"],
    recommendedPassRate: {
      English: 55,
      "Life Sciences": 50
    },
    alternativeRoute: "Community development training, counseling support, or youth work.",
    futures: ["Helping people"],
    environments: ["Office or professional setting"],
    paths: ["Professional in a career"]
  },
  {
    id: 20,
    name: "Environmental Scientist",
    category: "Environmental & Conservation",
    description: "Study nature and help protect the environment and natural resources.",
    interests: ["Environmental & Conservation", "Science"],
    subjects: ["Life Sciences", "Science", "Geography"],
    helpfulSubjects: ["Mathematics"],
    recommendedPassRate: {
      "Life Sciences": 60,
      Science: 60,
      Geography: 55
    },
    alternativeRoute: "Environmental studies, conservation training, or field work.",
    futures: ["Working with nature and food production"],
    environments: ["Outdoor / field work"],
    paths: ["Professional in a career"]
  },
  {
    id: 21,
    name: "Sports Coach",
    category: "Sports & Recreation",
    description: "Train athletes and help people stay active and healthy.",
    interests: ["Sports & Recreation"],
    subjects: ["Life Orientation", "English"],
    helpfulSubjects: ["Life Sciences"],
    recommendedPassRate: {
      English: 45
    },
    alternativeRoute: "Sports coaching courses, fitness training, or school sport leadership.",
    futures: ["Helping people"],
    environments: ["Outdoor / field work"],
    paths: ["Professional in a career"]
  },
  {
    id: 22,
    name: "Event Manager",
    category: "Business & Finance",
    description: "Plan and manage events, gatherings, and experiences for people.",
    interests: ["Business & Finance", "Hospitality & Tourism"],
    subjects: ["English", "Accounting"],
    helpfulSubjects: ["Languages"],
    recommendedPassRate: {
      English: 55,
      Accounting: 50
    },
    alternativeRoute: "Events, hospitality, or project management training.",
    futures: ["Running a business"],
    environments: ["Office or professional setting"],
    paths: ["Business owner", "Professional in a career"]
  },
  {
    id: 23,
    name: "Fashion Designer",
    category: "Creative Arts & Design",
    description: "Create clothing, accessories, and fashion collections.",
    interests: ["Creative Arts & Design"],
    subjects: ["Visual Arts", "English"],
    helpfulSubjects: ["Mathematics"],
    recommendedPassRate: {
      "Visual Arts": 60,
      English: 50
    },
    alternativeRoute: "Fashion, textiles, and design training or portfolio building.",
    futures: ["Running a business"],
    environments: ["Office or professional setting"],
    paths: ["Business owner", "Professional in a career"]
  },
  {
    id: 24,
    name: "Agribusiness Owner",
    category: "Farming & Agriculture",
    description: "Run an agricultural business producing food, livestock, or crops.",
    interests: ["Farming & Agriculture", "Business & Finance"],
    subjects: ["Agricultural Science", "English", "Accounting"],
    helpfulSubjects: ["Mathematics"],
    recommendedPassRate: {
      "Agricultural Science": 50,
      English: 45,
      Accounting: 45
    },
    alternativeRoute: "Practical farm work, business training, and agricultural college.",
    futures: ["Working with nature and food production", "Running a business"],
    environments: ["Outdoor / field work"],
    paths: ["Business owner"]
  },
  {
    id: 25,
    name: "Auto Electrician",
    category: "Engineering & Technical Work",
    description: "Fix and maintain vehicle electrical systems and electronics.",
    interests: ["Engineering & Technical Work", "Technology"],
    subjects: ["Mathematics", "Science", "English"],
    helpfulSubjects: ["Physical Science"],
    recommendedPassRate: {
      Mathematics: 55,
      Science: 50,
      English: 45
    },
    alternativeRoute: "Technical college, apprenticeship, or mechanical training.",
    futures: ["Building or fixing things"],
    environments: ["Outdoor / field work"],
    paths: ["Professional in a career"]
  },
  {
    id: 26,
    name: "Music Teacher",
    category: "Creative Arts & Design",
    description: "Teach music, instruments, singing, and music appreciation.",
    interests: ["Creative Arts & Design"],
    subjects: ["Music", "English"],
    helpfulSubjects: ["Languages"],
    recommendedPassRate: {
      Music: 60,
      English: 50
    },
    alternativeRoute: "Perform in music groups, teach private lessons, or join music workshops.",
    futures: ["Creative arts", "Teaching and guiding others"],
    environments: ["School or training environment", "Online / digital work"],
    paths: ["Professional in a career", "Both career and business owner"]
  },
  {
    id: 27,
    name: "Sound Engineer",
    category: "Technology",
    description: "Record, mix, and produce audio for music, events, and media.",
    interests: ["Creative Arts & Design", "Technology"],
    subjects: ["Music", "Computer Studies", "English"],
    helpfulSubjects: ["Science"],
    recommendedPassRate: {
      Music: 55,
      "Computer Studies": 55,
      English: 50
    },
    alternativeRoute: "Start with audio courses, media studies, or studio assistant roles.",
    futures: ["Using technology", "Creative arts"],
    environments: ["Online / digital work", "Studio or media setting"],
    paths: ["Professional in a career"]
  },
  {
    id: 28,
    name: "Musician",
    category: "Creative Arts & Design",
    description: "Create and perform music on stage, in studio, or online.",
    interests: ["Creative Arts & Design"],
    subjects: ["Music", "English"],
    helpfulSubjects: ["Languages"],
    recommendedPassRate: {
      Music: 55,
      English: 45
    },
    alternativeRoute: "Build a portfolio, play in bands, join music programs, or publish online.",
    futures: ["Creative arts", "Running a business"],
    environments: ["Studio or performance venue", "Online / digital work"],
    paths: ["Both career and business owner", "Professional in a career"]
  }
];