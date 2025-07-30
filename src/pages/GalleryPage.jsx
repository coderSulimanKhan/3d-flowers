import { useState } from "react";
import Rose from "../components/flowers/Rose";
import Daisy from "../components/flowers/Daisy";
import Crocus from "../components/flowers/Crocus";
import Daffodil from "../components/flowers/Daffodil";
import EnglishHolly from "../components/flowers/EnglishHolly";
import SnowDrop from "../components/flowers/SnowDrop";
import Tulip from "../components/flowers/Tulip";
import { Link, useLocation } from "react-router";
import { BsArrowsFullscreen } from 'react-icons/bs';

const GalleryPage = ({ theme }) => {
  const searchTerm = new URLSearchParams(useLocation().search).get("search") || "";
  console.log(searchTerm);
  const [flowers] = useState([
    {
      name: "Crocus",
      component: <Crocus />,
    },
    {
      name: "Daffodil",
      component: <Daffodil />
    },
    {
      name: "Daisy",
      component: <Daisy />
    },
    {
      name: "English Holly",
      component: <EnglishHolly />
    },
    {
      name: "Rose",
      component: <Rose />
    },
    {
      name: "Snow Drop",
      component: <SnowDrop />
    },
    {
      name: "Tulip",
      component: <Tulip />
    }
  ]);
  const newFlowers = flowers.filter(flower => {
    return flower.name.toLowerCase().includes(searchTerm);
  });
  return (
    <section className={`w-full min-h-[100vh] relative top-[10vh] mb-[10vh] ${theme == "dark" ? "bg-zinc-900" : "bg-zinc-100"}`}>
      <h1 className="text-center text-3xl font-semibold bg-gradient-to-r from-orange-950 via-orange-500 to-orange-100 bg-clip-text text-transparent">Flowers Gallery</h1>
      <div style={{ gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))" }} className="w-full h-full p-5 grid gap-3">
        {
          newFlowers.length < 1 ? (
            flowers.map((flower, index) => (
              <div key={index} className={`relative rounded-xl h-[400px] ${theme == "dark" ? "border border-zinc-100" : "border border-zinc-900"}`}>
                <div className="w-full h-full">{flower.component}</div>
                <h2 className={`absolute top-2 left-2 text-xl px-3 rounded-full shadow-lg ${theme == "dark" ? "bg-orange-950 text-orange-300" : "bg-orange-300 text-orange-950"}`}>{flower.name}</h2>
                <Link to={`/flower?flower=${flower.name.trim().toLowerCase()}`}>
                  <button>
                    <BsArrowsFullscreen className={`absolute right-3 bottom-3 w-5 h-5 z-10 cursor-pointer hover:scale-120 ${theme == "dark" ? "text-zinc-100" : "text-zinc-900"}`} />
                  </button>
                </Link>
              </div>
            ))
          ) : (
            newFlowers.map((flower, index) => (
              <div key={index} className={`relative rounded-xl h-[400px] ${theme == "dark" ? "border border-zinc-100" : "border border-zinc-900"}`}>
                <div className="w-full h-full">{flower.component}</div>
                <h2 className={`absolute top-2 left-2 text-xl px-3 rounded-full shadow-lg ${theme == "dark" ? "bg-orange-950 text-orange-300" : "bg-orange-300 text-orange-950"}`}>{flower.name}</h2>
                <Link to={`/flower?flower=${flower.name.trim().toLowerCase()}`}>
                  <button>
                    <BsArrowsFullscreen className={`absolute right-3 bottom-3 w-5 h-5 z-10 cursor-pointer hover:scale-120 ${theme == "dark" ? "text-zinc-100" : "text-zinc-900"}`} />
                  </button>
                </Link>
              </div>
            ))
          )
        }
      </div>
    </section>
  )
}

export default GalleryPage