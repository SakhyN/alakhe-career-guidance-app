/* =========================
   BURSARY & FUNDING DATA
   Tags match the values used in screens/profile.js (#interest)
   so funding can be matched to a learner's profile automatically.
========================= */
const bursaries = [
  {
    id: "nsfas",
    name: "NSFAS",
    fullName: "National Student Financial Aid Scheme",
    type: "Government Bursary",
    isGeneral: true,
    tags: [],
    summary: "South Africa's main government funding scheme. Covers the widest range of study fields at public universities and TVET colleges, so most learners should check this one first.",
    whoQualifies: [
      "South African citizen with a valid ID",
      "Household income below the NSFAS threshold (the exact amount changes each year, so check the portal)",
      "Accepted, or in the process of applying, to a public university or TVET college"
    ],
    covers: [
      "Tuition fees",
      "Accommodation or a living allowance",
      "Books and learning materials",
      "Some transport and personal care costs"
    ],
    howToApply: "Apply online once a year through the NSFAS portal. New applicants usually apply between September and November for the following academic year. Returning students who already qualify do not need to reapply.",
    website: "https://www.nsfas.org.za",
    tip: "Start here first, even if you are also applying for a sector bursary below. Many students combine NSFAS with a top-up bursary."
  },
  {
    id: "funza-lushaka",
    name: "Funza Lushaka Bursary",
    fullName: "Funza Lushaka Bursary Programme",
    type: "Government Bursary",
    provider: "Department of Basic Education",
    tags: ["Education"],
    summary: "Funds a Bachelor of Education (B.Ed.) degree for students who commit to teaching priority subjects in public schools after graduating.",
    whoQualifies: [
      "South African citizen, generally under 30 years old if applying for the first time",
      "Accepted into a B.Ed. degree at a public university",
      "Willing to specialise in priority subjects (commonly Mathematics, Science, Technology, and African languages)",
      "Clean criminal record"
    ],
    covers: [
      "Tuition fees",
      "Accommodation and meals",
      "Books and teaching practice costs",
      "A small monthly living allowance"
    ],
    howToApply: "Apply online via www.funzalushaka.doe.gov.za or the government e-Services portal. Applications usually open around October for the following year.",
    website: "https://www.funzalushaka.doe.gov.za",
    tip: "In return, you commit to teaching at a public school for one year for every year you were funded."
  },
  {
    id: "dept-health",
    name: "Provincial Department of Health Bursaries",
    fullName: "Provincial Department of Health Bursary Schemes",
    type: "Government Bursary",
    provider: "Provincial Departments of Health",
    tags: ["Health"],
    summary: "Each province runs its own bursary scheme for health science studies such as nursing, medicine, pharmacy, and allied health, usually for residents of that province.",
    whoQualifies: [
      "South African citizen residing in the province you are applying to",
      "Accepted, or applying, to study a health science qualification (nursing, medicine, pharmacy, and similar fields)",
      "Often awarded on a sliding scale based on household income"
    ],
    covers: [
      "Tuition, often on a sliding scale linked to household income",
      "Accommodation and meals in many cases",
      "Books in many cases"
    ],
    howToApply: "Application forms are usually obtained directly from your Provincial Department of Health, local hospitals, or your municipality rather than one national online system. Contact your province's Department of Health to ask about the current intake.",
    tip: "This comes with a work-back obligation: you usually have to work in that province's public health system for the same number of years you were funded."
  },
  {
    id: "saica-thuthuka",
    name: "SAICA Thuthuka Bursary",
    fullName: "SAICA Thuthuka Bursary Fund",
    type: "Sector Bursary",
    provider: "South African Institute of Chartered Accountants (SAICA)",
    tags: ["Business"],
    summary: "Funds a BCom Accounting (CA stream) degree for Black African and Coloured students aiming to become Chartered Accountants, plus academic and mentorship support.",
    whoQualifies: [
      "South African citizen who is Black African or Coloured",
      "In Grade 12, or out of school for no more than two years with Matric",
      "At least 60% for Mathematics (not Maths Literacy) in Grade 11",
      "Family unable to fully fund tertiary study",
      "Accepted, or applying, to a SAICA-accredited BCom Accounting degree"
    ],
    covers: [
      "Tuition fees",
      "Accommodation and meals",
      "Books",
      "Academic support, tutoring, and mentorship from qualified CAs"
    ],
    howToApply: "Apply through SAICA directly once you have applied to a SAICA-accredited university offering the Thuthuka programme.",
    website: "https://www.saica.org.za",
    tip: "Strong in Mathematics? This is one of the most comprehensive bursaries available for an accounting and finance career path."
  },
  {
    id: "engineering-sector",
    name: "Sasol, Eskom & Transnet Bursaries",
    fullName: "Corporate Engineering & Technical Bursary Programmes",
    type: "Corporate Bursary",
    provider: "Sasol, Eskom, Transnet and similar companies",
    tags: ["Engineering & Technical Work", "Technology", "Construction & Building", "Transportation & Logistics"],
    summary: "Large South African companies fund engineering, technical, and IT-related degrees and diplomas in exchange for a guaranteed work-back period after graduation.",
    whoQualifies: [
      "Strong marks in Mathematics and Physical Science (often 60-70%+)",
      "South African citizen",
      "Studying or applying for fields such as Electrical, Mechanical, Civil, Chemical or Industrial Engineering, or related technical and IT fields"
    ],
    covers: [
      "Full tuition",
      "Accommodation and meals",
      "Books and, in some programmes, a laptop",
      "A monthly stipend"
    ],
    howToApply: "Apply directly through each company's careers page when their bursary window opens (commonly between April and October, varying by company).",
    tip: "These are competitive and usually require a one year work-back commitment for every year funded, often including vacation work while you study."
  },
  {
    id: "agriseta",
    name: "AgriSETA Bursary",
    fullName: "Agricultural Sector Education and Training Authority Bursary",
    type: "SETA Bursary",
    provider: "AgriSETA",
    tags: ["Farming & Agriculture"],
    summary: "Supports full-time or part-time students studying agriculture-related diplomas, degrees, or certificates at accredited institutions.",
    whoQualifies: [
      "South African citizen",
      "Studying, or accepted to study, an agriculture-related qualification at a university, university of technology, or accredited college",
      "Short courses are not funded"
    ],
    covers: [
      "Tuition fees and textbooks",
      "Up to roughly R39,750 a year for undergraduate study, or around R63,600 for postgraduate study (amounts are reviewed yearly)"
    ],
    howToApply: "Applications usually need to be made through an accredited training provider or employer on your behalf, between August and September each year.",
    website: "https://www.agriseta.co.za",
    tip: "Preference is often given to students studying in agricultural fields with a recognised skills shortage."
  },
  {
    id: "cathsseta",
    name: "CATHSSETA Bursaries",
    fullName: "Culture, Arts, Tourism, Hospitality and Sport SETA Bursary",
    type: "SETA Bursary",
    provider: "CATHSSETA",
    tags: ["Hospitality & Tourism", "Creative Arts", "Sports & Recreation"],
    summary: "Funds study in tourism, hospitality, culture, the arts, and sport, alongside learnerships and internships in the same sectors.",
    whoQualifies: [
      "South African citizen",
      "Enrolled, or about to enrol, at a public university, university of technology, or TVET college",
      "Studying a qualification linked to tourism, hospitality, culture, arts, or sport"
    ],
    covers: [
      "Tuition and study fees",
      "Textbooks",
      "Accommodation if you study away from home",
      "Meals and other study-related costs"
    ],
    howToApply: "Apply through CATHSSETA directly; intake periods are usually announced early in the year.",
    website: "https://cathsseta.org.za",
    tip: "Worth checking even if you are more drawn to entrepreneurship — many graduates in this sector go on to start their own tourism, catering, or events businesses."
  },
  {
    id: "saps-bursary",
    name: "SAPS Bursary Programme",
    fullName: "South African Police Service Bursary Programme",
    type: "Government Bursary",
    provider: "South African Police Service",
    tags: ["Police / Law Enforcement"],
    summary: "Funds selected fields of study linked to policing and law enforcement, with priority fields changing from year to year based on SAPS needs.",
    whoQualifies: [
      "South African citizen",
      "Generally needs to be in good health and pass medical, psychometric, and security screening",
      "Available fields of study vary each year depending on SAPS staffing needs"
    ],
    covers: [
      "Varies by year and field, but commonly includes tuition and a service agreement after graduation"
    ],
    howToApply: "Application forms are released through SAPS recruitment offices and the official SAPS website when the bursary window opens.",
    tip: "Because available fields change yearly, check directly with your nearest SAPS recruitment office for what's open right now."
  },
  {
    id: "dffe-bursary",
    name: "Department of Forestry, Fisheries and the Environment Bursary",
    fullName: "DFFE Bursary Programme",
    type: "Government Bursary",
    provider: "Department of Forestry, Fisheries and the Environment",
    tags: ["Environmental & Conservation"],
    summary: "Funds study in environmental fields such as conservation, biodiversity, forestry, oceans and coasts, and climate-related sciences.",
    whoQualifies: [
      "South African citizen",
      "Grade 12 or already enrolled in a relevant higher education programme",
      "Studying, or planning to study, an environmental, conservation, or natural resource management field",
      "Not currently employed"
    ],
    covers: [
      "A bursary amount toward tuition and study costs (the maximum amount is reviewed yearly)"
    ],
    howToApply: "Watch for the department's bursary announcement, usually mid-year, and apply directly to the Department of Forestry, Fisheries and the Environment.",
    tip: "Conservation organisations such as wildlife trusts and colleges sometimes offer additional scholarships in this field too — it's worth asking your school's career guidance teacher about local options."
  },
  {
    id: "dsd-bursary",
    name: "Department of Social Development Bursary",
    fullName: "National & Provincial Department of Social Development Bursaries",
    type: "Government Bursary",
    provider: "Department of Social Development",
    tags: ["Social Services & Community"],
    summary: "Supports students studying Social Work and related community-focused fields such as Psychology, Community Development, and Youth Work, which are recognised scarce skills.",
    whoQualifies: [
      "South African citizen",
      "Meets the university's minimum entry requirements",
      "Studying, or planning to study, Social Work or a closely related social sciences field",
      "Resident of the province you are applying to (you generally apply within your own province)"
    ],
    covers: [
      "Tuition, registration, and prescribed textbooks",
      "Accommodation in many cases",
      "A monthly allowance in many cases"
    ],
    howToApply: "Application forms are usually available from your university's Social Work faculty or your Provincial Department of Social Development. Applications commonly open mid-year for the following intake.",
    tip: "Because Social Work is an officially recognised scarce skill, these bursaries carry a service-back obligation rather than heavy competition for limited spots."
  },
  {
    id: "nyda-grant",
    name: "NYDA Grant Programme",
    fullName: "National Youth Development Agency Grant Programme",
    type: "Business Funding (Grant, not a study bursary)",
    provider: "National Youth Development Agency (NYDA)",
    tags: ["Business", "Farming & Agriculture", "Technology"],
    relevantGoals: ["Business", "Both"],
    summary: "A non-repayable grant for young South Africans who want to start or grow their own small business, paired with mentorship and free business training.",
    whoQualifies: [
      "South African citizen aged 18 to 35",
      "Business is, or will be, 100% youth-owned",
      "Involved in the day-to-day running of the business",
      "Annual turnover under roughly R750,000 (R1 million for co-operatives)",
      "Completed NYDA's free Business Management Training (or willing to)"
    ],
    covers: [
      "Grants from around R1,000 for early-stage ideas up to R100,000+ for growing businesses",
      "Up to roughly R250,000-R300,000 for agriculture or technology businesses specifically",
      "Free mentorship, business training, and help finding customers or markets"
    ],
    howToApply: "Register on the NYDA's online portal, complete the free Business Management Training, then submit a grant application with your business details and a short business pitch.",
    website: "https://www.nyda.gov.za",
    tip: "This is real start-up capital, not a loan — but it does require a genuine, viable business idea and a willingness to commit to the programme for at least two years."
  }
];
