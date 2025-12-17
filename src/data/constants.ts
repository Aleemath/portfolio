// Portfolio Images - imports must be at top
import work1 from "../assets/images/work1.jpeg";
import work2 from "../assets/images/work2.jpeg";
import work3 from "../assets/images/work3.jpeg";
import work4 from "../assets/images/work4.jpeg";

// Personal Information
export const PERSONAL_INFO = {
  name: "Aleemath Ranseena",
  role: "Full Stack Developer",
  experience: "2+",
  phone: "+971 527989668",
  email: "aleemathranseenakk@gmail.com",
  address: "Kalpetta, Wayanad, Kerala",
  whatsappNumber: "971527989668", // Format without + for wa.me links
  cvPath: "/src/assets/pdf/aleemath-ranseena-fullstack-developer.pdf",
  profilePhoto: "/src/assets/images/photo.png",
} as const;

// Social Media Links
export const SOCIAL_LINKS = {
  facebook: "#",
  instagram: "https://www.instagram.com/aleemath__/",
  linkedin: "https://www.linkedin.com/in/aleemath-ranseena/",
  twitter: "#",
} as const;

// Navigation Links
export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Testimonial", href: "#testimonials" },
] as const;

// Stats Data
export interface StatItem {
  value: string;
  label: string;
}

export const STATS: StatItem[] = [
  { value: "10+", label: "Satisfied clients" },
  { value: "20+", label: "Projects completed" },
  { value: "6+", label: "Reviews given" },
];

// Skills Data - Note: Icon components should be imported in the component
export interface SkillItem {
  title: string;
  description: string;
  iconName: "FaGem" | "FaChartLine" | "FaGraduationCap"; // Icon component name from react-icons/fa
}

export const SKILLS_DATA: Omit<SkillItem, "iconName">[] = [
  {
    title: "Frontend Development",
    description:
      "Build responsive and interactive user interfaces with modern frameworks",
  },
  {
    title: "Backend Development",
    description:
      "Develop robust APIs and server-side applications with best practices",
  },
  {
    title: "Full Stack Solutions",
    description:
      "Create end-to-end applications from database design to deployment",
  },
];

// Icon mapping for skills
export const SKILL_ICONS = {
  FaGem: "FaGem",
  FaChartLine: "FaChartLine",
  FaGraduationCap: "FaGraduationCap",
} as const;

// Testimonials Data
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  rating: number;
  text: string;
  avatar: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Amir Uddin",
    role: "UX Designer",
    company: "",
    rating: 5,
    text: "We will also facilitate the business marketing of these products with our SEO experts so that they become a ready to use website & help sell product from company",
    avatar: "https://i.pravatar.cc/100?img=21",
  },
  {
    id: 2,
    name: "Salim Ahmed",
    role: "UI Designer",
    company: "",
    rating: 5,
    text: "The development work was exceptional. The team delivered a high-quality solution that exceeded our expectations and improved our business operations significantly.",
    avatar: "https://i.pravatar.cc/100?img=22",
  },
  {
    id: 3,
    name: "Guy Hawkins",
    role: "UX Designer",
    company: "",
    rating: 5,
    text: "Outstanding service and attention to detail. The application was built with modern technologies and best practices, making it scalable and maintainable.",
    avatar: "https://i.pravatar.cc/100?img=23",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "",
    rating: 5,
    text: "Working with this developer was a great experience. The code quality is excellent, and the project was delivered on time with all requirements met perfectly.",
    avatar: "https://i.pravatar.cc/100?img=24",
  },
  {
    id: 5,
    name: "Michael Chen",
    role: "Frontend Developer",
    company: "",
    rating: 5,
    text: "The full stack solution provided was exactly what we needed. Clean code, great documentation, and excellent communication throughout the project lifecycle.",
    avatar: "https://i.pravatar.cc/100?img=25",
  },
  {
    id: 6,
    name: "Emily Davis",
    role: "Marketing Director",
    company: "",
    rating: 5,
    text: "Professional, reliable, and skilled developer. The applications built have significantly improved our workflow efficiency and customer satisfaction rates.",
    avatar: "https://i.pravatar.cc/100?img=26",
  },
];

export const PORTFOLIO_IMAGES = [work1, work2, work3, work4] as const;

// WhatsApp Message Templates
export const WHATSAPP_MESSAGES = {
  hireMe: `Hello ${PERSONAL_INFO.name},

I'm interested in hiring you for my project. Let's discuss how you can help me.`,
  contactForm: (formData: {
    name: string;
    email: string;
    phone: string;
    budget: string;
    message: string;
  }) => `Hello ${PERSONAL_INFO.name},

I'm interested in your services. Here are my details:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Budget: ${formData.budget}

Message: ${formData.message}`,
} as const;

// Utility function to open WhatsApp
export const openWhatsApp = (message: string) => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${PERSONAL_INFO.whatsappNumber}?text=${encodedMessage}`;
  window.open(whatsappUrl, "_blank");
};
