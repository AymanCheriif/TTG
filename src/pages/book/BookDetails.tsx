import React from "react";
import { useParams } from "react-router-dom";
import bookCover from "../../assets/book.webp";
import authorImg from "../../assets/feedback.png";
import feedback from "../../assets/feedback.png";
import FAQSection from "../landing/layouts/FAQ section/FAQSection";
import DiscordSection from "../landing/layouts/discord section/discord_section";
import HeroSection from "./layouts/hero section/heroSection";
import HighlightsSection from "./layouts/highlights section/highlightsSection";
import OverviewSection from "./layouts/overview section/overviewSection";
import StudentsSection from "./layouts/students section/studentsSection";

interface BookTestimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  rating: number;
  image?: string;
}

interface BookOverview {
  title: string;
  items: string[];
}

interface BookDetail {
  id: number;
  title: string;
  author: string;
  authorId: number;
  authorBio: string;
  authorImage: string;
  description: string;
  fullDescription: string;
  coverImage: string;
  publishYear: string;
  pages: number;
  language: string;
  category: string;
  highlights: {
    title: string;
    description: string;
  }[];
  previewUrl?: string;
  price?: number;
  rating?: number;
  reviews?: number;
  subtitle?: string;
  keyPoints?: string[];
  overview?: BookOverview[];
  testimonials?: BookTestimonial[];
  communitySize?: number;
  limitedSupply?: boolean;
}

const BookDetails: React.FC = () => {
  const { bookId } = useParams<{ bookId: string }>();

  // Static book data - no dynamic loading
  const booksData: Record<string, BookDetail> = {
    "1": {
      id: 1,
      title: "The Crypto Trader's Handbook",
      author: "Ahmed Ben Salah",
      authorId: 1,
      authorBio:
        "Crypto trading expert with over 10 years of experience in financial markets. Ahmed has helped thousands of traders develop profitable strategies.",
      authorImage: authorImg,
      description:
        "The ultimate guide for anyone looking to understand cryptocurrency trading.",
      fullDescription:
        "The ultimate guide for anyone looking to understand cryptocurrency trading. From basic concepts to advanced strategies, this book covers everything you need to navigate the crypto market with confidence. Learn to analyze market trends, manage risk effectively, and build a profitable trading portfolio.",
      coverImage: bookCover,
      publishYear: "2023",
      pages: 342,
      language: "English",
      category: "trading",
      price: 29.99,
      rating: 4.8,
      reviews: 124,
      subtitle: "Complete guide to make money with crypto",
      highlights: [
        {
          title: "Fundamental analysis techniques",
          description:
            "Learn how to analyze market fundamentals including project tokenomics, team credentials, and real-world use cases.",
        },
        {
          title: "Technical chart patterns",
          description:
            "Master essential chart patterns like support/resistance, head and shoulders, and Fibonacci retracements for accurate predictions.",
        },
        {
          title: "Risk management strategies",
          description:
            "Develop a disciplined approach to position sizing, stop-loss placement, and portfolio allocation to protect your capital.",
        },
        {
          title: "Portfolio diversification",
          description:
            "Create a balanced crypto portfolio across different asset classes, market caps, and use cases to optimize returns.",
        },
      ],
      keyPoints: [
        "9+ years of experience in one book",
        "Exclusive custom made strategies",
        "Best trading book in Tunisia",
        "Limited supply",
      ],
      overview: [
        {
          title: "Comprehensive Learning",
          items: [
            "Discover the essentials of crypto trading",
            "Reading charts and understanding trends",
            "Mastering risk management",
            "Maximizing profits",
          ],
        },
        {
          title: "Step-by-step guidance",
          items: [
            "Step-by-step strategies for beginners and experts",
            "Market analysis techniques",
            "Proven methods for consistent gains",
            "Comprehensive risk management",
          ],
        },
      ],
      testimonials: [
        {
          id: 1,
          name: "Mohamed Ali",
          role: "Crypto Investor",
          text: "This book transformed my approach to trading. The strategies are easy to understand and implement.",
          rating: 5,
          image: feedback,
        },
        {
          id: 2,
          name: "Amira Ben Salem",
          role: "Day Trader",
          text: "I've been trading for years but still learned valuable techniques from this book. Highly recommended!",
          rating: 5,
          image: feedback,
        },
        {
          id: 3,
          name: "Youssef Karim",
          role: "Beginner Trader",
          text: "Perfect for beginners like me. Everything is explained clearly with practical examples.",
          rating: 4,
          image: feedback,
        },
      ],
      communitySize: 4000,
      limitedSupply: true,
    },
    "2": {
      id: 2,
      title: "UI/UX Design Principles",
      author: "Sami Mejri",
      authorId: 2,
      authorBio:
        "Award-winning UI/UX designer and educator. Sami has worked with major tech companies and shares his expertise through books and workshops.",
      authorImage: authorImg,
      description:
        "A comprehensive guide to creating intuitive digital experiences.",
      fullDescription:
        "A comprehensive guide to creating intuitive digital experiences. Learn how to design interfaces that users love through practical examples and proven methodologies. Master the art of user-centered design and create products that truly resonate with your audience.",
      coverImage: bookCover,
      publishYear: "2022",
      pages: 286,
      language: "English",
      category: "design",
      price: 34.99,
      rating: 4.7,
      reviews: 89,
      subtitle: "Create interfaces users love",
      highlights: [
        {
          title: "User research methods",
          description:
            "Learn effective techniques for understanding your users' needs, behaviors, and pain points through interviews, surveys, and usability testing.",
        },
        {
          title: "Wireframing techniques",
          description:
            "Master the art of creating clear, functional wireframes that serve as the blueprint for exceptional user experiences.",
        },
        {
          title: "Interaction design patterns",
          description:
            "Discover proven interaction patterns that enhance usability and create intuitive digital experiences.",
        },
        {
          title: "Usability testing",
          description:
            "Implement comprehensive testing strategies to validate your design decisions and improve user satisfaction.",
        },
        {
          title: "Design systems",
          description:
            "Build scalable design systems that ensure consistency and efficiency across your digital products.",
        },
      ],
      keyPoints: [
        "Industry-proven methodologies",
        "Real-world case studies",
        "Step-by-step tutorials",
        "Expert insights and tips",
      ],
      overview: [
        {
          title: "Design Fundamentals",
          items: [
            "Understanding user psychology",
            "Design thinking process",
            "Visual hierarchy principles",
            "Color theory and typography",
          ],
        },
        {
          title: "Practical Application",
          items: [
            "Prototyping techniques",
            "User testing methods",
            "Design system creation",
            "Cross-platform considerations",
          ],
        },
      ],
      testimonials: [
        {
          id: 1,
          name: "Sarah Johnson",
          role: "Product Designer",
          text: "This book completely changed how I approach design. The practical examples are incredibly valuable.",
          rating: 5,
          image: feedback,
        },
        {
          id: 2,
          name: "Mark Chen",
          role: "UX Designer",
          text: "Excellent resource for both beginners and experienced designers. Love the detailed case studies!",
          rating: 5,
          image: feedback,
        },
      ],
      communitySize: 2500,
      limitedSupply: false,
    },
    "3": {
      id: 3,
      title: "Web Development Fundamentals",
      author: "Leila Trabelsi",
      authorId: 3,
      authorBio:
        "Full-stack developer and educator with expertise in modern web technologies. Leila has mentored hundreds of developers in their journey to mastering web development.",
      authorImage: authorImg,
      description:
        "Build your foundation in web development with this essential guide.",
      fullDescription:
        "Build your foundation in web development with this essential guide covering HTML, CSS, JavaScript and modern frameworks. From basic concepts to advanced techniques, this comprehensive resource will take you from beginner to proficient web developer.",
      coverImage: bookCover,
      publishYear: "2023",
      pages: 412,
      language: "English",
      category: "development",
      price: 39.99,
      rating: 4.9,
      reviews: 156,
      subtitle: "Master modern web technologies",
      highlights: [
        {
          title: "Frontend basics",
          description:
            "Master HTML, CSS, and JavaScript fundamentals with hands-on projects and real-world examples.",
        },
        {
          title: "Responsive design principles",
          description:
            "Learn to create websites that work perfectly on all devices using modern CSS techniques and frameworks.",
        },
        {
          title: "JavaScript fundamentals",
          description:
            "Understand JavaScript from the ground up, including ES6+ features, async programming, and DOM manipulation.",
        },
        {
          title: "API integration",
          description:
            "Learn how to work with REST APIs, handle data fetching, and integrate third-party services into your applications.",
        },
        {
          title: "Performance optimization",
          description:
            "Discover techniques to optimize your websites for speed, accessibility, and search engine rankings.",
        },
      ],
      keyPoints: [
        "Hands-on coding projects",
        "Modern development practices",
        "Industry best practices",
        "Career guidance included",
      ],
      overview: [
        {
          title: "Core Technologies",
          items: [
            "HTML5 semantic markup",
            "CSS3 and modern layouts",
            "JavaScript ES6+ features",
            "Version control with Git",
          ],
        },
        {
          title: "Advanced Concepts",
          items: [
            "React.js fundamentals",
            "API development with Node.js",
            "Database integration",
            "Deployment strategies",
          ],
        },
      ],
      testimonials: [
        {
          id: 1,
          name: "Ahmed Khalil",
          role: "Junior Developer",
          text: "Perfect for beginners! I landed my first developer job after completing this book.",
          rating: 5,
          image: feedback,
        },
      ],
      communitySize: 3200,
      limitedSupply: false,
    },
    "4": {
      id: 4,
      title: "Digital Marketing Mastery",
      author: "Mohamed Karim",
      authorId: 4,
      authorBio:
        "Digital marketing expert with over 8 years of experience helping businesses grow their online presence. Mohamed has worked with startups and Fortune 500 companies.",
      authorImage: authorImg,
      description:
        "Strategic approaches to building an effective online presence.",
      fullDescription:
        "Strategic approaches to building an effective online presence and growing your digital footprint. Learn proven marketing techniques that drive real results and build sustainable business growth in the digital age.",
      coverImage: bookCover,
      publishYear: "2023",
      pages: 324,
      language: "English",
      category: "marketing",
      price: 27.99,
      rating: 4.6,
      reviews: 92,
      subtitle: "Grow your digital footprint",
      highlights: [
        {
          title: "SEO techniques",
          description:
            "Master search engine optimization strategies to improve your website's visibility and organic traffic.",
        },
        {
          title: "Social media strategy",
          description:
            "Develop effective social media campaigns that engage your audience and drive conversions.",
        },
        {
          title: "Content marketing",
          description:
            "Create compelling content that attracts, engages, and converts your target audience.",
        },
        {
          title: "Analytics and measurement",
          description:
            "Learn to track, measure, and optimize your marketing efforts using data-driven insights.",
        },
        {
          title: "Conversion optimization",
          description:
            "Implement proven techniques to increase your conversion rates and maximize ROI.",
        },
      ],
      keyPoints: [
        "Proven marketing strategies",
        "Real campaign examples",
        "Analytics and tracking",
        "ROI optimization techniques",
      ],
      overview: [
        {
          title: "Strategy Development",
          items: [
            "Market research techniques",
            "Audience targeting methods",
            "Brand positioning strategies",
            "Competitive analysis",
          ],
        },
        {
          title: "Implementation",
          items: [
            "Campaign planning and execution",
            "Multi-channel marketing",
            "Budget optimization",
            "Performance measurement",
          ],
        },
      ],
      testimonials: [
        {
          id: 1,
          name: "Fatima Bouali",
          role: "Marketing Manager",
          text: "This book helped me double our online sales within 6 months. Highly practical and actionable.",
          rating: 5,
          image: feedback,
        },
      ],
      communitySize: 1800,
      limitedSupply: false,
    },
  };

  // Get current book data or default to book 1
  const book = booksData[bookId || "1"] || booksData["1"];

  return (
    <>
      <HeroSection book={book} />
      <OverviewSection book={book} />
      <HighlightsSection book={book} />
      <DiscordSection />
      <StudentsSection book={book} />
      <FAQSection />
    </>
  );
};

export default BookDetails;
