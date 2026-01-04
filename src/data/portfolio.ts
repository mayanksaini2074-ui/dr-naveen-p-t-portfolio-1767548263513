import { ResumeData, SectionConfig } from '@/types/portfolio';

export const portfolioData: ResumeData = {
  "personalInfo": {
    "name": "Dr. Naveen P. T.",
    "title": "Research Associate, Dept. of Mechanical Engineering",
    "email": "naveenpt.nitc@gmail.com",
    "phone": "8547637788",
    "linkedin": "",
    "github": "",
    "location": "Bengaluru, Karnataka, India",
    "summary": "Dr. Naveen P. T. is a dedicated Research Associate specializing in droplet dynamics and microfluidics, with extensive experience in academia and research. He has contributed significantly to the study of drop-surface interactions and evaporation, with numerous publications in esteemed journals."
  },
  "experience": [
    {
      "title": "Research Associate I",
      "company": "Indian Institute of Science",
      "dates": "2026 Jan. – Present",
      "description": "Conducting research on the dynamics of droplet impact and surface interactions.",
      "highlights": []
    },
    {
      "title": "Assistant Professor",
      "company": "Manipal University Jaipur",
      "dates": "2025 Aug. – 2025 Dec.",
      "description": "Taught and guided students in Mechanical Engineering.",
      "highlights": []
    },
    {
      "title": "Teaching Assistant",
      "company": "BITS Pilani, Pilani Campus",
      "dates": "2020 Nov. – 2025 Jul.",
      "description": "Assisted in teaching Thermodynamics, Workshop practice, Engine-Motors and mobility, Machining and Machine Tools.",
      "highlights": []
    },
    {
      "title": "Junior Research Fellow",
      "company": "BITS Pilani, Pilani Campus",
      "dates": "2020 Mar. – 2021 Dec.",
      "description": "Engaged in research for DST-SERB project (SRG/2019/001079).",
      "highlights": []
    },
    {
      "title": "Assistant Professor (Adhoc)",
      "company": "Government Engineering College, Thrissur",
      "dates": "2020 Jan. – 2020 Mar.",
      "description": "Taught Mechanical Engineering students.",
      "highlights": []
    },
    {
      "title": "Graduate Engineering Trainee",
      "company": "BAJAJ Auto Ltd",
      "dates": "2012 Aug. – 2013 Nov.",
      "description": "Worked in the Engineering, Management Information Service department.",
      "highlights": []
    }
  ],
  "education": [
    {
      "degree": "Ph.D. in Mechanical Engineering",
      "institution": "Birla Institute of Technology and Science Pilani",
      "years": "2020 Nov. – 2025 Oct.",
      "gpa": "10"
    },
    {
      "degree": "M.Tech in Propulsion Engineering",
      "institution": "College of Engineering Trivandrum, University of Kerala",
      "years": "2014 – 2018",
      "gpa": "8.04"
    },
    {
      "degree": "B.Tech in Mechanical Engineering",
      "institution": "National Institute of Technology, Calicut",
      "years": "2008 – 2012",
      "gpa": "6.81"
    },
    {
      "degree": "HSE (12th)",
      "institution": "Govt.H.S.S Kokkallur, Kozhikode, Kerala",
      "years": "2007",
      "gpa": "92.6%"
    },
    {
      "degree": "SSLC (10th)",
      "institution": "Govt.H.S.S Avidanallur, Kozhikode, Kerala",
      "years": "2005",
      "gpa": "93.3%"
    }
  ],
  "skills": {
    "frontend": [],
    "backend": [],
    "devops": [],
    "additional": []
  },
  "projects": []
};

export const sectionConfig: SectionConfig = {
  "hero": "falling-snow",
  "about": "split",
  "experience": "timeline",
  "projects": "grid",
  "skills": "tags",
  "skillsDisplay": "separate",
  "contact": "simple",
  "colorPalette": "slate"
};
