const careerClusters = [
  {
    keyword: "mechanic",
    cluster: "Engineering & Technical Work",
    description: "Hands-on careers working with cars, engines, machines, repairs, and tools.",
    careers: [
      "Motor Mechanic",
      "Diesel Mechanic",
      "Auto Electrician",
      "Welder",
      "Boilermaker"
    ]
  },
  {
    keyword: "cars",
    cluster: "Engineering & Technical Work",
    description: "Careers linked to vehicles, transport systems, and repairing machines.",
    careers: [
      "Motor Mechanic",
      "Diesel Mechanic",
      "Auto Electrician"
    ]
  },
  {
    keyword: "engine",
    cluster: "Engineering & Technical Work",
    description: "Careers that focus on engines, machinery, maintenance, and technical systems.",
    careers: [
      "Motor Mechanic",
      "Diesel Mechanic",
      "Boilermaker"
    ]
  },
  {
    keyword: "electrician",
    cluster: "Engineering & Technical Work",
    description: "Careers that involve wiring, power systems, electrical repairs, and technical installations.",
    careers: [
      "Electrician",
      "Auto Electrician",
      "Boilermaker"
    ]
  },
  {
    keyword: "welder",
    cluster: "Engineering & Technical Work",
    description: "Careers focused on metalwork, repairs, welding, building, and fabrication.",
    careers: [
      "Welder",
      "Boilermaker",
      "Motor Mechanic"
    ]
  },
  {
    keyword: "welding",
    cluster: "Engineering & Technical Work",
    description: "Careers linked to welding, fabrication, metal joining, and technical building work.",
    careers: [
      "Welder",
      "Boilermaker",
      "Motor Mechanic"
    ]
  },
  {
    keyword: "police",
    cluster: "Police / Law Enforcement",
    description: "Careers focused on public safety, justice, discipline, and protecting communities.",
    careers: [
      "Police Officer",
      "Detective",
      "Traffic Officer",
      "Crime Scene Investigator",
      "Correctional Services Officer"
    ]
  },
  {
    keyword: "security",
    cluster: "Police / Law Enforcement",
    description: "Careers that focus on safety, protection, crime prevention, and community support.",
    careers: [
      "Police Officer",
      "Correctional Services Officer",
      "Traffic Officer"
    ]
  },
  {
    keyword: "law",
    cluster: "Police / Law Enforcement",
    description: "Careers linked to law, justice, investigation, and legal systems.",
    careers: [
      "Police Officer",
      "Detective",
      "Crime Scene Investigator"
    ]
  },
  {
    keyword: "nurse",
    cluster: "Health",
    description: "Careers focused on health care, patient support, healing, and helping people.",
    careers: [
      "Nurse",
      "Caregiver",
      "Community Health Worker",
      "Paramedic",
      "Health Assistant"
    ]
  },
  {
    keyword: "doctor",
    cluster: "Health",
    description: "Careers linked to hospitals, clinics, treatment, patient support, and health services.",
    careers: [
      "Nurse",
      "Paramedic",
      "Community Health Worker",
      "Health Assistant"
    ]
  },
  {
    keyword: "health",
    cluster: "Health",
    description: "Careers that involve caring for people, treatment support, community health, and wellness.",
    careers: [
      "Nurse",
      "Caregiver",
      "Community Health Worker",
      "Health Assistant",
      "Paramedic"
    ]
  },
  {
    keyword: "clinic",
    cluster: "Health",
    description: "Careers linked to patient care, health support, and community-based medical services.",
    careers: [
      "Nurse",
      "Community Health Worker",
      "Health Assistant"
    ]
  },
  {
    keyword: "teacher",
    cluster: "Education",
    description: "Careers focused on teaching, guiding learners, tutoring, and supporting education.",
    careers: [
      "Teacher",
      "Tutor",
      "Education Assistant",
      "Lecturer"
    ]
  },
  {
    keyword: "teaching",
    cluster: "Education",
    description: "Careers for people who enjoy helping others learn, grow, and succeed.",
    careers: [
      "Teacher",
      "Tutor",
      "Education Assistant"
    ]
  },
  {
    keyword: "school",
    cluster: "Education",
    description: "Careers linked to classrooms, learning, school support, and education systems.",
    careers: [
      "Teacher",
      "Education Assistant",
      "Tutor"
    ]
  },
  {
    keyword: "farming",
    cluster: "Agriculture",
    description: "Careers linked to growing food, raising animals, farming systems, and agriculture business.",
    careers: [
      "Agricultural Scientist",
      "Agribusiness Owner",
      "Farm Manager",
      "Crop Production Officer",
      "Livestock Officer"
    ]
  },
  {
    keyword: "agriculture",
    cluster: "Agriculture",
    description: "Careers in crops, animals, food systems, farming science, and agricultural production.",
    careers: [
      "Agricultural Scientist",
      "Agribusiness Owner",
      "Farm Manager",
      "Crop Production Officer",
      "Livestock Officer"
    ]
  },
  {
    keyword: "livestock",
    cluster: "Agriculture",
    description: "Careers that involve animals, farming, agricultural care, and rural production systems.",
    careers: [
      "Livestock Officer",
      "Farm Manager",
      "Agribusiness Owner"
    ]
  },
  {
    keyword: "crops",
    cluster: "Agriculture",
    description: "Careers linked to planting, crop growth, food production, and farming systems.",
    careers: [
      "Crop Production Officer",
      "Agricultural Scientist",
      "Farm Manager"
    ]
  },
  {
    keyword: "poultry",
    cluster: "Agriculture",
    description: "Careers and business paths linked to chickens, egg production, and small-scale farming.",
    careers: [
      "Agribusiness Owner",
      "Farm Manager",
      "Livestock Officer"
    ]
  },
  {
    keyword: "business",
    cluster: "Business & Finance",
    description: "Careers linked to money, entrepreneurship, administration, planning, and selling.",
    careers: [
      "Accountant",
      "Entrepreneur",
      "Bookkeeper",
      "Office Administrator",
      "Sales Consultant"
    ]
  },
  {
    keyword: "money",
    cluster: "Business & Finance",
    description: "Careers for learners interested in finance, budgeting, bookkeeping, and business growth.",
    careers: [
      "Accountant",
      "Bookkeeper",
      "Entrepreneur"
    ]
  },
  {
    keyword: "accounting",
    cluster: "Business & Finance",
    description: "Careers focused on financial records, budgets, business reporting, and money management.",
    careers: [
      "Accountant",
      "Bookkeeper",
      "Office Administrator"
    ]
  },
  {
    keyword: "shop",
    cluster: "Business & Finance",
    description: "Careers linked to selling, stock, customer service, and business management.",
    careers: [
      "Entrepreneur",
      "Sales Consultant",
      "Office Administrator"
    ]
  },
  {
    keyword: "computer",
    cluster: "Technology",
    description: "Careers linked to computers, digital tools, coding, websites, and technology support.",
    careers: [
      "Software Developer",
      "IT Support",
      "Web Designer",
      "Cybersecurity Analyst",
      "Data Capturer"
    ]
  },
  {
    keyword: "computers",
    cluster: "Technology",
    description: "Careers linked to systems, software, websites, computer support, and digital services.",
    careers: [
      "Software Developer",
      "IT Support",
      "Web Designer",
      "Cybersecurity Analyst",
      "Data Capturer"
    ]
  },
  {
    keyword: "technology",
    cluster: "Technology",
    description: "Careers focused on software, digital systems, coding, and technical problem-solving.",
    careers: [
      "Software Developer",
      "IT Support",
      "Web Designer",
      "Cybersecurity Analyst"
    ]
  },
  {
    keyword: "coding",
    cluster: "Technology",
    description: "Careers linked to writing code, building apps, websites, and digital solutions.",
    careers: [
      "Software Developer",
      "Web Designer",
      "Cybersecurity Analyst"
    ]
  },
  {
    keyword: "app",
    cluster: "Technology",
    description: "Careers focused on building digital tools, apps, systems, and user technology experiences.",
    careers: [
      "Software Developer",
      "Web Designer",
      "IT Support"
    ]
  },
  {
    keyword: "website",
    cluster: "Technology",
    description: "Careers linked to building, designing, and managing digital platforms and websites.",
    careers: [
      "Web Designer",
      "Software Developer",
      "IT Support"
    ]
  },
  {
    keyword: "driving",
    cluster: "Transport & Practical Work",
    description: "Careers linked to vehicles, movement, transport support, and hands-on mobility services.",
    careers: [
      "Motor Mechanic",
      "Traffic Officer",
      "Diesel Mechanic"
    ]
  },
  {
    keyword: "driver",
    cluster: "Transport & Practical Work",
    description: "Careers linked to transport, vehicles, road systems, and practical movement work.",
    careers: [
      "Traffic Officer",
      "Motor Mechanic",
      "Diesel Mechanic"
    ]
  },
  {
    keyword: "fixing",
    cluster: "Engineering & Technical Work",
    description: "Careers for learners who like repairing, building, solving faults, and working with tools.",
    careers: [
      "Motor Mechanic",
      "Electrician",
      "Welder",
      "Boilermaker"
    ]
  },
  {
    keyword: "building",
    cluster: "Engineering & Technical Work",
    description: "Careers linked to construction, repair, technical work, and practical problem-solving.",
    careers: [
      "Welder",
      "Boilermaker",
      "Electrician"
    ]
  },
  {
    keyword: "doctor",
    cluster: "Health",
    description: "Careers in medicine, diagnosis, patient care, and health services.",
    careers: [
      "Doctor",
      "Nurse",
      "Pharmacist",
      "Paramedic"
    ]
  },
  {
    keyword: "pharmacist",
    cluster: "Health",
    description: "Careers focused on medicine, pharmacy, and safe use of drugs.",
    careers: [
      "Pharmacist",
      "Health Assistant",
      "Community Health Worker"
    ]
  },
  {
    keyword: "chef",
    cluster: "Hospitality & Tourism",
    description: "Careers linked to cooking, food service, kitchen work, and hospitality.",
    careers: [
      "Chef",
      "Hotel Manager",
      "Event Manager"
    ]
  },
  {
    keyword: "psychologist",
    cluster: "Social Services & Community",
    description: "Careers that help people with mental health, counselling, and life guidance.",
    careers: [
      "Psychologist",
      "Social Worker",
      "Counselor"
    ]
  },
  {
    keyword: "marketing",
    cluster: "Business & Finance",
    description: "Careers focused on selling, branding, and business growth.",
    careers: [
      "Marketing Manager",
      "Accountant",
      "Event Manager"
    ]
  },
  {
    keyword: "environment",
    cluster: "Environmental & Conservation",
    description: "Careers linked to nature, sustainability, and protecting the planet.",
    careers: [
      "Environmental Scientist",
      "Agribusiness Owner",
      "Farm Manager"
    ]
  },
  {
    keyword: "music",
    cluster: "Creative Arts & Design",
    description: "Careers linked to music, performing arts, instruments, and audio production.",
    careers: [
      "Musician",
      "Music Teacher",
      "Sound Engineer"
    ]
  },
  {
    keyword: "sound",
    cluster: "Technology",
    description: "Careers in audio recording, sound systems, and media production.",
    careers: [
      "Sound Engineer",
      "Musician",
      "Music Teacher"
    ]
  }
];

