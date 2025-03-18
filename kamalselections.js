import { useEffect, useState } from "react";
import { CustomCard, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Elegant Red Gown",
    price: "₹8,999",
    image: "girls-kids-wear.jpg",
  },
  {
    id: 2,
    name: "Floral Summer Dress",
    price: "₹6,499",
    image: "dress2.jpg",
  },

  {
    id: 1,
    name: "Elegant Silk Saree",
    price: 4999,
    colors: ["Red", "Blue", "Green"],
    image: "images/silk-saree.jpg"
  },
  {
    id: 2,
    name: "Designer Lehenga",
    price: 10999,
    colors: ["Pink", "Gold", "Maroon"],
    image: "images/designer-lehenga.jpg"
  },
  {
    id: 3,
    name: "Cotton Kurti",
    price: 1299,
    colors: ["Yellow", "White", "Black"],
    image: "images/cotton-kurti.jpg"
  }
];



export default function KamalSelections() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="text-center font-poppins bg-gray-100 min-h-screen">
      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={`fixed top-0 left-0 w-full bg-gradient-to-r from-red-700 to-blue-700 text-white p-4 transition-all duration-300 z-50 ${scrolled ? "shadow-lg backdrop-blur-md" : ""}`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Kamal Selections</h1>
          <ul className="flex gap-6">
            <li><a href="#products" className="hover:text-yellow-300 transition">Products</a></li>
            <li><a href="#about" className="hover:text-yellow-300 transition">About Us</a></li>
            <li><a href="#contact" className="hover:text-yellow-300 transition">Contact</a></li>
          </ul>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center bg-cover bg-center text-black p-10 relative" style={{ backgroundImage: "url('logo.png')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="relative z-10 text-white">
          <h2 className="text-4xl font-semibold mb-2">Discover the Finest Textiles & Fashion</h2>
          <p className="text-lg mb-4">Exclusive Collection of Dresses & Fabrics</p>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-6 py-2 rounded-full transition-transform transform" onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}>Shop Now</motion.button>
        </motion.div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 px-6">
        <h2 className="text-3xl font-semibold mb-6">Our Collection</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {products.map((product, index) => (
            <motion.div key={product.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.05 }} transition={{ delay: index * 0.2 }}>
              <CustomCard className="max-w-sm p-4 bg-white shadow-2xl rounded-2xl transform transition">
                <motion.img src={product.image} alt={product.name} className="rounded-lg mb-3 w-full" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} />
                <CardContent>
                  <h3 className="text-xl font-bold">{product.name}</h3>
                  <p className="text-gray-700 text-lg">{product.price}</p>
                </CardContent>
              </CustomCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <motion.section id="about" className="py-16 bg-gray-200 text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}>
        <h2 className="text-3xl font-semibold mb-4">About Us</h2>
        <p className="max-w-3xl mx-auto text-lg">Kamal Selections is dedicated to offering premium textiles and designer outfits that blend tradition with modern elegance.</p>
      </motion.section>

      {/* Contact Section */}
      <motion.section id="contact" className="py-16 bg-gray-300 text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}>
        <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
        <p className="text-lg">Email: contact@kamalselections.com</p>
        <p className="text-lg">Phone: +91 98765 43210</p>
      </motion.section>

      {/* Footer */}
      <motion.footer className="bg-gray-900 text-white p-4 mt-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <p>&copy; 2025 Kamal Selections - All Rights Reserved</p>
      </motion.footer>
    </div>
  );
}
