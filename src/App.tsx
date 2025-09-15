import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";
import Landing from "./pages/landing/landing";
import Contact from "./pages/contact/contact";
import Plans from "./pages/plans/plans";
import Course from "./pages/course/course";
import BookDetails from "./pages/book/BookDetails";
import PlaceOrder from "./pages/book/place order/place_order";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses/:coursename" element={<Course />} />
        <Route path="/books/:booktitle" element={<BookDetails />} />
        <Route path="/books/order" element={<PlaceOrder />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
