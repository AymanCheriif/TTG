import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./place_order.module.css";
import bookCover from "../../../assets/book.webp";
import authorImg from "../../../assets/feedback.png";
import OrderSummary from "./layouts/OrderSummary/OrderSummary";
import BillingForm from "./layouts/BillingForm/BillingForm";
import PlaceOrderButton from "./layouts/PlaceOrderButton/PlaceOrderButton";

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
  price?: number;
  rating?: number;
  reviews?: number;
  subtitle?: string;
  limitedSupply?: boolean;
}

interface OrderFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  paymentMethod: "card" | "paypal" | "crypto";
  cardNumber?: string;
  expiryDate?: string;
  cvv?: string;
  cardName?: string;
}

const PlaceOrder: React.FC = () => {
  const { bookId } = useParams<{ bookId: string }>();
  const navigate = useNavigate();

  const [formData, setFormData] = useState<OrderFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    paymentMethod: "card",
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [errors, setErrors] = useState<Partial<OrderFormData>>({});

  // Static book data - matching BookDetails component
  const booksData: Record<string, BookDetail> = {
    "1": {
      id: 1,
      title: "The Crypto Trader's Handbook",
      author: "Ahmed Ben Salah",
      authorId: 1,
      authorBio:
        "Crypto trading expert with over 10 years of experience in financial markets.",
      authorImage: authorImg,
      description:
        "The ultimate guide for anyone looking to understand cryptocurrency trading.",
      fullDescription:
        "The ultimate guide for anyone looking to understand cryptocurrency trading. From basic concepts to advanced strategies, this book covers everything you need to navigate the crypto market with confidence.",
      coverImage: bookCover,
      publishYear: "2023",
      pages: 342,
      language: "English",
      category: "trading",
      price: 29.99,
      rating: 4.8,
      reviews: 124,
      subtitle: "Complete guide to make money with crypto",
      limitedSupply: true,
    },
    "2": {
      id: 2,
      title: "UI/UX Design Principles",
      author: "Sami Mejri",
      authorId: 2,
      authorBio: "Award-winning UI/UX designer and educator.",
      authorImage: authorImg,
      description:
        "A comprehensive guide to creating intuitive digital experiences.",
      fullDescription:
        "A comprehensive guide to creating intuitive digital experiences. Learn how to design interfaces that users love through practical examples and proven methodologies.",
      coverImage: bookCover,
      publishYear: "2022",
      pages: 286,
      language: "English",
      category: "design",
      price: 34.99,
      rating: 4.7,
      reviews: 89,
      subtitle: "Create interfaces users love",
      limitedSupply: false,
    },
    "3": {
      id: 3,
      title: "Web Development Fundamentals",
      author: "Leila Trabelsi",
      authorId: 3,
      authorBio:
        "Full-stack developer and educator with expertise in modern web technologies.",
      authorImage: authorImg,
      description:
        "Build your foundation in web development with this essential guide.",
      fullDescription:
        "Build your foundation in web development with this essential guide covering HTML, CSS, JavaScript and modern frameworks.",
      coverImage: bookCover,
      publishYear: "2023",
      pages: 412,
      language: "English",
      category: "development",
      price: 39.99,
      rating: 4.9,
      reviews: 156,
      subtitle: "Master modern web technologies",
      limitedSupply: false,
    },
    "4": {
      id: 4,
      title: "Digital Marketing Mastery",
      author: "Mohamed Karim",
      authorId: 4,
      authorBio: "Digital marketing expert with over 8 years of experience.",
      authorImage: authorImg,
      description:
        "Strategic approaches to building an effective online presence.",
      fullDescription:
        "Strategic approaches to building an effective online presence and growing your digital footprint. Learn proven marketing techniques that drive real results.",
      coverImage: bookCover,
      publishYear: "2023",
      pages: 324,
      language: "English",
      category: "marketing",
      price: 27.99,
      rating: 4.6,
      reviews: 92,
      subtitle: "Grow your digital footprint",
      limitedSupply: false,
    },
  };

  const book = booksData[bookId || "1"] || booksData["1"];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof OrderFormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<OrderFormData> = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.postalCode.trim())
      newErrors.postalCode = "Postal code is required";
    if (!formData.country.trim()) newErrors.country = "Country is required";

    if (formData.paymentMethod === "card") {
      if (!formData.cardNumber?.trim())
        newErrors.cardNumber = "Card number is required";
      if (!formData.expiryDate?.trim())
        newErrors.expiryDate = "Expiry date is required";
      if (!formData.cvv?.trim()) newErrors.cvv = "CVV is required";
      if (!formData.cardName?.trim())
        newErrors.cardName = "Cardholder name is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsProcessing(true);

    // Simulate order processing
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Here you would typically send the order to your backend
      console.log("Order submitted:", { book, formData });

      // Show success message or redirect
      alert(
        "Order placed successfully! You will receive an email confirmation shortly."
      );
      navigate("/");
    } catch (error) {
      console.error("Order submission failed:", error);
      alert("Order submission failed. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  const shippingCost = 5.99;
  const tax = (book.price || 0) * 0.1; // 10% tax
  const total = (book.price || 0) + shippingCost + tax;

  return (
    <div className={styles.container}>
      <div className={styles.order_section}>
        <div className={styles.section_container}>
          <h1 className={styles.page_title}>Complete Your Order</h1>

          <div className={styles.order_grid}>
            <OrderSummary
              book={book}
              shippingCost={shippingCost}
              tax={tax}
              total={total}
            />

            <div className={styles.order_form_container}>
              <form onSubmit={handleSubmit} className={styles.order_form}>
                <BillingForm
                  formData={formData}
                  errors={errors}
                  onInputChange={handleInputChange}
                />
                <PlaceOrderButton total={total} isProcessing={isProcessing} />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
