import { Routes, Route } from "react-router"
import HomePage from "./pages/HomePage"
import GalleryPage from "./pages/GalleryPage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { useEffect, useState } from "react"
import Flower from "./components/Flower"

const App = () => {
  useEffect(() => {
    localStorage.setItem("theme", "dark");
  }, []);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      localStorage.setItem("theme", "light");
    } else {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    }
  }
  return (
    <main className={`relative ${theme == "dark" ? "bg-zinc-900" : "bg-zinc-100"}`}>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<HomePage theme={theme} />} />
        <Route path="/gallery" element={<GalleryPage theme={theme} />} />
        <Route path="/about" element={<AboutPage theme={theme} />} />
        <Route path="/contact" element={<ContactPage theme={theme} />} />
        <Route path="/flower" element={<Flower />} />
      </Routes>
      <Footer />
    </main>
  )
}

export default App;