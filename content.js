/* =====================================================================
   content.js  -  THE ONLY FILE YOU NEED TO EDIT
   ---------------------------------------------------------------------
   Rules:
   1. Keep every text inside "double quotes".
      If your text itself has a double quote, write \" instead.
   2. Every block { ... } must end with a comma  ,  (except you may skip
      it after the very last block).
   3. To add something new: copy one whole block { ... }, paste it
      right below, change the text.
   4. To delete something: delete the whole block { ... } .
   ===================================================================== */


/* ---------- 1. YOUR PROFILE (top of the Home page) ---------- */
const SITE = {
  name: "Chayan Kundu",
  title: "PhD Candidate · Exercise & Space Physiology",
  affiliation: "Ramakrishna Mission Vivekananda Educational and Research Institute, West Bengal, India",
  photo: "photo.jpg",     // put your photo in the images folder with this name
  about: "I am a PhD candidate working in the field of Exercise and Space Physiology, focused on understanding human physiological adaptations to extreme environments. I have been working on cardiorespiratory and neurocognitive changes due to simulated microgravity using 6° head-down tilt. Curious by nature, I enjoy exploring ideas beyond traditional academics and connecting research with real-world impact.",

  /* Links: paste the full web address between the quotes.
     Leave "" (empty) and that button stays hidden. */
  links: {
    email: "kunduchayan28@gmail.com",
    linkedin: "https://www.linkedin.com/in/chayan-kundu-69347a226/",
    scholar: "https://scholar.google.com/citations?user=ubbpjwEAAAAJ&hl=en",
    orcid: "https://orcid.org/0009-0007-8105-5474"
  }
};


/* ---------- 2. RESEARCH INTERESTS (small tags) ---------- */
const INTERESTS = [
  "Sdsk",
  "Hdskh"
];


/* ---------- 3. EDUCATION ----------
   BLOCK SHAPE (used by Education, Teaching, Experience, Training,
   Conferences, Awards - copy any block to any of these lists):
   { title: "...", where: "...", when: "...", points: ["...", "..."] }
   Only "title" is required. Leave out what you don't need.        */
const EDUCATION = [
  {
    title: "Ph.D. Sports Science",
    where: "Ramakrishna Mission Vivekananda Educational and Research Institute, West Bengal, India",
    when: "2024 – present",
    points: [
      "Thesis title: Effect of Short-term Simulated Microgravity on Cardiorespiratory and Neuro-Cognitive Functions and its Influence on Exercise Responses and Recovery."
    ]
  },
  {
    title: "UGC NET",
    when: "June & December 2023",
    points: ["Qualified for Junior Research Fellowship and Assistant Professor."]
  },
  {
    title: "Master in Sports Science",
    where: "Ramakrishna Mission Vivekananda Educational and Research Institute",
    when: "2022 – 2024",
    points: [
      "CGPA: 8.28",
      "Exposed to Applied Sports Physiology, Exercise Physiology and Kinesiology, Strength and Conditioning, Sports Psychology and others."
    ]
  },
  {
    title: "B.Sc. Physiology (Honours)",
    where: "Calcutta University",
    when: "2019 – 2022",
    points: ["CGPA: 8.462 (1st Division)"]
  },
  {
    title: "Higher Secondary Examination (CBSE)",
    where: "Army Public School Barrackpore (PCMB)",
    when: "2018",
    points: ["82.2%"]
  }
];


/* ---------- 4. TEACHING ----------
   EXAMPLE ENTRY - edit the text to match your real teaching.      */
const TEACHING = [
  {
    title: "Applied Sports Physiology",
    where: "Postgraduate level · Ramakrishna Mission Vivekananda Educational and Research Institute",
    when: "2025 – present",
    points: [
      "Lectures on physiological responses and adaptations to exercise, and recovery.",
      "Example line: add practical sessions, topics or materials you teach here."
    ]
  }
];


/* ---------- 5. WORK EXPERIENCE (newest first) ---------- */
const EXPERIENCE = [
  {
    title: "Sports Science Intern",
    where: "Khelo India State Centre of Excellence, Kalinga Stadium, Odisha, India",
    when: "March – April 2024",
    points: [
      "Assisted sports science experts with scientific testing of athletes.",
      "Provided evidence-based recommendations to national and state level sprinters, middle and long distance runners, tennis, karate and para athletes for performance improvement."
    ]
  },
  {
    title: "Sports Science Intern",
    where: "Odisha Naval Tata Hockey High Performance Centre, Bhubaneshwar, India",
    when: "February 2024",
    points: [
      "Observed and assisted training of junior and sub-junior national level boys and girls.",
      "Hands-on experience using Statsports for load monitoring.",
      "Exposed to AMS (Halofit), periodic physiological testing, planning S&C and rehab sessions, psychological testing, video analysis and nutrition-diet planning."
    ]
  },
  {
    title: "Testing Assistant",
    where: "Bengal Tennis Association · Chandannagar Sporting Association, West Bengal, India",
    points: [
      "Assisted in physiological and psychological testing of U-17 tennis players and U-19 footballers."
    ]
  },
  {
    title: "Observer and Athlete Profiling",
    where: "Jharkhand State Sports Promotion Society (JSSPS)",
    points: ["Observed training across various Olympic sports and did athlete profiling."]
  }
];


/* ---------- 6. TRAINING & CERTIFICATIONS ---------- */
const TRAINING = [
  {
    title: "ISAK Accredited Level 2 Anthropometrist",
    where: "International Society for the Advancement of Kinanthropometry"
  },
  {
    title: "Fundamentals of Sports Training, Load Management and Recovery (8 weeks)",
    where: "IIT Madras",
    when: "April 2024"
  },
  {
    title: "Strength and Conditioning for Indian Population (12 weeks)",
    where: "IIT Madras",
    when: "April 2024"
  },
  {
    title: "Writing in the Sciences (8 weeks)",
    where: "Stanford University",
    when: "January 2024"
  },
  {
    title: "Foundations of Sports Analytics: Data, Representation, and Models in Sports (4 weeks)",
    where: "University of Michigan",
    when: "September 2023"
  },
  {
    title: "Anti-Doping E-Learning for Medical Professionals",
    where: "World Anti-Doping Agency (WADA)",
    when: "2023"
  }
];

/* Skills (small tags) */
const SKILLS = [
  "SPSS",
  "Python",
  "Anthropometry (ISAK Level 2)",
  "Load monitoring (Statsports)",
  "English · Hindi · Bengali"
];


/* ---------- 7. CONFERENCES & WORKSHOPS ATTENDED (newest first) ---------- */
const CONFERENCES = [
  {
    title: "2026 NASA Human Research Program Investigators' Workshop (virtual)",
    when: "7 – 9 April 2026"
  },
  {
    title: "3rd International Conference of the Indian Society of Sports and Exercise Medicine (ISSEMCON 2026)",
    where: "In collaboration with Indian Federation of Sports Medicine and VMMC & Safdarjung Hospital, New Delhi, India",
    when: "11 April 2026"
  },
  {
    title: "Webinar: Biomanufacturing in Space: India's Road to the Next Frontier",
    where: "Center of Excellence (CoE) Space Tech Foundation, Bangalore, with Association of Biotechnology Led Enterprises (ABLE)",
    when: "27 March 2026"
  },
  {
    title: "2nd International Conference of the Indian Society of Sports and Exercise Medicine (ISSEMCON 2024)",
    where: "Dept. of Physiology, IMS, Banaras Hindu University, Varanasi, India",
    when: "15 – 16 November 2024"
  },
  {
    title: "ISSEMCON 2024 pre-conference workshops: Exercise & Fitness Testing; Doping and Biochemical Analysis in Sports; Biomechanical Movement and Gait Analysis",
    where: "Banaras Hindu University, Varanasi, India",
    when: "12 – 14 November 2024"
  },
  {
    title: "Workshop: Talent Identification and Talent Development in Sports",
    where: "Dept. of Sports Science and Yoga, RKMVERI, West Bengal, India",
    when: "2 – 3 October 2023"
  },
  {
    title: "Symposium cum Workshop: Sports Medicine and Rehabilitation",
    where: "Dept. of Sports Science and Yoga, RKMVERI, West Bengal, India",
    when: "11 – 12 March 2023"
  },
  {
    title: "Workshop: Adapted Sports and Sports Biomechanics",
    where: "Dept. of Sports Science and Yoga, RKMVERI, West Bengal, India",
    when: "28 November – 3 December 2022"
  },
  {
    title: "APPICON 2022 pre-conference workshop: Assessing exercise induced stress on cardiorespiratory & neuro cognitive response",
    where: "Dept. of Sports Science and Yoga, RKMVERI, West Bengal, India",
    when: "2022"
  },
  {
    title: "National Conference on Science & Technology: Rural Development",
    where: "Indian Science Congress Association",
    when: "2020"
  }
];


/* ---------- 8. AWARDS & ACHIEVEMENTS ---------- */
const AWARDS = [
  {
    title: "Best oral presentation award, Physical Therapy & Allied Health Sciences category",
    where: "ISSEMCON 2024, Institute of Medical Sciences, Banaras Hindu University, Varanasi, India",
    when: "2024"
  },
  {
    title: "Represented the university in football at the All India University Games (South Zone)",
    when: "2022"
  },
  {
    title: "Winner, Photo Film Competition: \"Science Through My Eyes\"",
    where: "Indian National Science Academy with SERB, DST",
    when: "2020"
  },
  {
    title: "Participant, National Level Karate (Kumite) Competition",
    when: "2012"
  }
];


/* =====================================================================
   PUBLICATIONS PAGE
   ===================================================================== */

/* ---------- 9. PUBLICATIONS (newest first) ----------
   doi: paste ONLY the DOI, e.g. "10.1016/j.lssr.2025.01.001"
        (no https://). The site turns it into a link. "" = no link.
   Your name is made bold automatically if written "Chayan Kundu". */
const PUBLICATIONS = [
  {
    authors: "Adhikari R., Clarke A., Kamath S., Godase S., Chayan Kundu, Easow J., Pullinger S. A., Edwards B. J.",
    title: "From stigma to strength: Menstrual health awareness, practices and beliefs in Indian female athletes",
    journal: "International Journal of Sports Science & Coaching, 21(4), 2201-2212",
    year: "2026",
    doi: ""
  },
  {
    authors: "Adhikari R., Chayan Kundu, Giacomoni M., Johnson K., Kamath S., Edwards B. J., Pullinger S. A.",
    title: "Menstrual Cycle Length Variability and Its Physiological Correlates in Indian Combat Athletes: An Observational Study",
    journal: "Women in Sport and Physical Activity Journal, 34(1)",
    year: "2026",
    doi: ""
  },
  {
    authors: "Chayan Kundu, Sharma S., Ghosh T., Deepak K. K., Das A.",
    title: "Short-term 6° head-down tilt bed rest simulating microgravity ameliorates blood pressure and heart rate variability: A quasi-experimental study on healthy adults",
    journal: "Life Sciences in Space Research",
    year: "2025",
    doi: ""
  },
  {
    authors: "Adhikari R., Ghosh S., Chayan Kundu, Kamath S.",
    title: "Weight class comparison of physical and physiological parameters in Indian female judokas",
    journal: "International Journal of Kinanthropometry, 4(3), 44-56",
    year: "2024",
    doi: ""
  }
];


/* ---------- 10. CONFERENCE PRESENTATIONS (newest first) ----------
   type: "Oral presentation", "Poster", etc.                        */
const PRESENTATIONS = [
  {
    type: "Oral presentation",
    title: "Acute effect of short-term 6° head-down tilt bed rest on cardiopulmonary responses during post-exercise recovery",
    event: "3rd International Conference of the Indian Society of Sports and Exercise Medicine (ISSEMCON 2026), New Delhi, India",
    when: "11 April 2026"
  },
  {
    type: "Oral presentation (Best oral presentation award)",
    title: "Immediate Effect of Simulated Microgravity Exposure on Cardiac Autonomic Functions of Healthy Adults",
    event: "2nd International Conference of the Indian Society of Sports and Exercise Medicine (ISSEMCON 2024), Banaras Hindu University, Varanasi, India",
    when: "18 November 2024"
  },
  {
    type: "Oral presentation",
    title: "Analysis of growth and performance parameters among sports participants belonging to Multi Event Stage under Jharkhand State Sports Promotion Society",
    event: "National Conference on Sports Science: A Multi Disciplinary Approach to enhance sports performance, RKMVERI, GAPEY",
    when: "February 2023"
  }
];


/* =====================================================================
   ARTICLES PAGE  (your weekly section)
   ---------------------------------------------------------------------
   Add one block per week. Order does not matter: the site sorts by date,
   newest first. Date format: "YYYY-MM-DD".
   tags: the filter buttons are made automatically from your tags.
   link: where "Read more" goes (the paper, DOI link, or your own post).
   ===================================================================== */
const ARTICLES = [
  {
    date: "2026-10-26",
    title: "Sample article 3 - replace me",
    summary: "Write 2-3 lines here explaining the research in simple words: what was studied, what was found and why it matters.",
    tags: ["Microgravity", "Sample"],
    link: "#"
  },
  {
    date: "2026-10-19",
    title: "Sample article 2 - replace me",
    summary: "Write 2-3 lines here explaining the research in simple words: what was studied, what was found and why it matters.",
    tags: ["Recovery", "Sample"],
    link: "#"
  },
  {
    date: "2026-10-12",
    title: "Sample article 1 - replace me",
    summary: "Write 2-3 lines here explaining the research in simple words: what was studied, what was found and why it matters.",
    tags: ["HRV", "Sample"],
    link: "#"
  }
];
