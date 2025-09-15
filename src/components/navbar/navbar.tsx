import { useState, useEffect, useRef } from "react";
import styles from "./navbar.module.css";
import logo from "../../assets/logo.png";
import CtaButton from "../ctabtn/ctabtn";
import btc from "../../assets/bitcoin.svg";
import dev from "../../assets/dev.svg";
import photoshopt from "../../assets/photoshop.svg";
import afterEffect from "../../assets/adobe after effect.svg";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);
  const [isBooksDropdownOpen, setIsBooksDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const booksDropdownRef = useRef<HTMLLIElement>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleCoursesDropdown = () => {
    setIsCoursesDropdownOpen(!isCoursesDropdownOpen);
  };

  const toggleBooksDropdown = () => {
    setIsBooksDropdownOpen(!isBooksDropdownOpen);
  };

  const courses = [
    {
      name: "Trading Master Class",
      icon: btc,
    },
    {
      name: "Web Development",
      icon: dev,
    },
    {
      name: "Video Editing",
      icon: afterEffect,
    },
    {
      name: "Graphic Design",
      icon: photoshopt,
    },
  ];

  const books = [
    {
      name: "The Crypto Trader's Handbook",
      icon: btc,
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsCoursesDropdownOpen(false);
      }
      if (
        booksDropdownRef.current &&
        !booksDropdownRef.current.contains(event.target as Node)
      ) {
        setIsBooksDropdownOpen(false);
      }
    };

    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <button className={styles.menuButton} onClick={toggleMobileMenu}>
        {!isMobileMenuOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z"
              fill="white"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z"
              fill="white"
            />
          </svg>
        )}
      </button>
      <Link className={styles.logo} to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <ul>
        <li className={styles.dropdown} ref={dropdownRef}>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              toggleCoursesDropdown();
            }}
            className={styles.dropdownToggle}
          >
            Courses
            <svg
              className={`${styles.dropdownArrow} ${
                isCoursesDropdownOpen ? styles.open : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path d="M7 10L12 15L17 10H7Z" fill="white" />
            </svg>
          </a>
          <ul
            className={`${styles.dropdownMenu} ${
              isCoursesDropdownOpen ? styles.show : ""
            }`}
          >
            {courses.map((course, index) => (
              <li key={index}>
                <a
                  href={`/courses/${course.name
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                >
                  <img src={course.icon} alt="course" />
                  {course.name}
                </a>
              </li>
            ))}
          </ul>
        </li>
        <li className={styles.dropdown} ref={booksDropdownRef}>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              toggleBooksDropdown();
            }}
            className={styles.dropdownToggle}
          >
            Books
            <svg
              className={`${styles.dropdownArrow} ${
                isBooksDropdownOpen ? styles.open : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path d="M7 10L12 15L17 10H7Z" fill="white" />
            </svg>
          </a>
          <ul
            className={`${styles.dropdownMenu} ${
              isBooksDropdownOpen ? styles.show : ""
            }`}
          >
            {books.map((book, index) => (
              <li key={index}>
                <a
                  href={`/books/${book.name
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                >
                  <img src={book.icon} alt="book" />
                  {book.name}
                </a>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <a href="/plans">Plans</a>
        </li>
        <li>
          <a href="/contact">Contact Us</a>
        </li>
      </ul>

      <div
        className={`${styles.mobileMenu} ${
          isMobileMenuOpen ? styles.open : styles.closed
        }`}
      >
        <ul>
          <li className={styles.dropdown}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                toggleCoursesDropdown();
              }}
              className={styles.dropdownToggle}
            >
              Courses
              <svg
                className={`${styles.dropdownArrow} ${
                  isCoursesDropdownOpen ? styles.open : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path d="M7 10L12 15L17 10H7Z" fill="white" />
              </svg>
            </a>
            <ul
              className={`${styles.dropdownMenu} ${
                isCoursesDropdownOpen ? styles.show : ""
              }`}
            >
              {courses.map((course, index) => (
                <li key={index}>
                  <a
                    href={`/courses/${course.name
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                  >
                    <img src={course.icon} alt="course" />
                    {course.name}
                  </a>
                </li>
              ))}
            </ul>
          </li>
          <li className={styles.dropdown}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                toggleBooksDropdown();
              }}
              className={styles.dropdownToggle}
            >
              Books
              <svg
                className={`${styles.dropdownArrow} ${
                  isBooksDropdownOpen ? styles.open : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path d="M7 10L12 15L17 10H7Z" fill="white" />
              </svg>
            </a>
            <ul
              className={`${styles.dropdownMenu} ${
                isBooksDropdownOpen ? styles.show : ""
              }`}
            >
              {books.map((book, index) => (
                <li key={index}>
                  <a
                    href={`/books/${book.name
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                  >
                    <img src={book.icon} alt="book" />
                    {book.name}
                  </a>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <a href="/plans">Plans</a>
          </li>
          <li>
            <a href="/contact">Contact Us</a>
          </li>
        </ul>
      </div>

      <div className={styles.actions}>
        <CtaButton
          link="app.tunisian-top-gs.com"
          text="login"
          isSecondary={true}
          isIcon={false}
        ></CtaButton>
      </div>
    </header>
  );
};

export default Navbar;
