import { useState } from "react";
import { FaMoon, FaSearch, FaSun } from "react-icons/fa"
import { Link, NavLink, useNavigate } from "react-router";
import { AiOutlineClose } from 'react-icons/ai';
import { FiMenu } from 'react-icons/fi';

const Header = ({ theme, toggleTheme }) => {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const toggleSearchBar = () => {
    setIsSearchBarOpen(p => !p);
    navigate(`/gallery`);
  }
  const handleSearch = (e) => {
    setSearchText(e.target.value);
    navigate(`/gallery?search=${searchText}`);
  }
  const toggleSideBar = () => {
    setIsSideBarOpen(p => !p);
  }
  return (
    <div className={`fixed w-full flex justify-around items-center shadow-lg z-20 ${theme === "dark" ? "bg-zinc-900 shadow-zinc-700" : "bg-zinc-100 shadow-zinc-400"}`}>
      <Link to={"/"}>
        <div className="flex items-center justify-center">
          <img className="w-15" src="/3d-flowers/logo.svg" alt="Flower's Logo" />
          <div className={`${theme === "dark" ? "text-zinc-100" : "text-zinc-900"}`}>
            <span className="text-3xl relative right-3 font-bold">Phool</span>
            <span className="relative right-3 text-green-600">Wala</span>
          </div>
        </div>
      </Link>
      <div>
        <ul className={`hidden md:flex gap-5 text-xl ${theme === "dark" ? "text-zinc-100" : "text-zinc-900"}`}>
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "text-yellow-600" : "transition duration-300 hover:text-yellow-600"}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/gallery" className={({ isActive }) => isActive ? "text-yellow-600" : "transition duration-300 hover:text-yellow-600"}>Gallery</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? "text-yellow-600" : "transition duration-300 hover:text-yellow-600"}>About</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "text-yellow-600" : "transition duration-300 hover:text-yellow-600"}>Contact</NavLink>
          </li>
        </ul>
      </div>
      <div className="flex gap-3 items-center justify-center">
        <button onClick={toggleSearchBar} className={`hidden md:block text-xl transition duration-300 cursor-pointer hover:text-yellow-600 ${theme === "dark" ? "text-zinc-100" : "text-zinc-900"}`}><FaSearch /></button>
        <button onClick={toggleTheme} className={`hidden md:block text-xl transition duration-300 cursor-pointer hover:text-yellow-600 ${theme === "dark" ? "text-zinc-100" : "text-zinc-900"}`}>{theme === "dark" ? <FaMoon /> : <FaSun />}</button>
        <button onClick={toggleSideBar} className={`md:hidden text-2xl transition duration-300 cursor-pointer hover:text-yellow-600 ${theme === "dark" ? "text-zinc-100" : "text-zinc-900"}`}>{!isSideBarOpen ? <FiMenu /> : <AiOutlineClose />}</button>
      </div>
      {
        isSearchBarOpen && (
          <div className={`absolute inset-0 flex items-center justify-center ${theme === "dark" ? "bg-zinc-900" : "bg-zinc-100 "}`}>
            <input autoFocus type="text" onInput={(e) => handleSearch(e)} placeholder="Search..." className={`p-2 w-[50%] rounded-md outline-none border-2 focus:border-yellow-600 ${theme === "dark" ? "bg-zinc-900 shadow-sm shadow-zinc-100 text-zinc-100 border-2 border-zinc-100" : "bg-zinc-100 shadow-sm shadow-zinc-900 text-zinc-900 border-2 border-zinc-900"}`} />
            <button onClick={toggleSearchBar}><AiOutlineClose className={`text-3xl cursor-pointer transition duration-300 hover:text-yellow-600 ${theme === "dark" ? "text-zinc-100" : "text-zinc-900"}`} /></button>
          </div>
        )
      }
      {
        isSideBarOpen && (
          <ul className={`fixed top-12 right-4 p-3 border border-orange-400 rounded flex flex-col gap-5 text-xl ${theme === "dark" ? "text-zinc-100 bg-zinc-900" : "text-zinc-900 bg-zinc-100"}`}>
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? "text-yellow-600" : "transition duration-300 hover:text-yellow-600"}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/gallery" className={({ isActive }) => isActive ? "text-yellow-600" : "transition duration-300 hover:text-yellow-600"}>Gallery</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => isActive ? "text-yellow-600" : "transition duration-300 hover:text-yellow-600"}>About</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => isActive ? "text-yellow-600" : "transition duration-300 hover:text-yellow-600"}>Contact</NavLink>
            </li>
          </ul>
        )
      }
    </div>
  )
}

export default Header