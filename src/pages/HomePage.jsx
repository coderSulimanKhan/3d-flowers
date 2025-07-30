import { FaArrowRight } from 'react-icons/fa';
import { Link } from "react-router";
import Rose from "../components/flowers/Rose";
import Daisy from '../components/flowers/Daisy';
import { useState } from 'react';
import Crocus from "../components/flowers/Crocus";
import Daffodil from '../components/flowers/Daffodil';
import EnglishHolly from '../components/flowers/EnglishHolly';
import SnowDrop from '../components/flowers/SnowDrop';
import Tulip from '../components/flowers/Tulip';

const HomePage = ({ theme }) => {
  const [count, setCount] = useState(0);
  const handleNext3dFlowerModel = () => {
    if (count < 6) {
      setCount(p => p + 1);
    } else {
      setCount(0);
    }
    switch (count) {
      case 0:
        return 0;
      case 1:
        return 1;
      case 2:
        return 2;
      case 3:
        return 3;
      case 4:
        return 4;
      case 5:
        return 5;
      case 6:
        return 6;
      default:
        return 0;
    }
  }
  return (
    <section className={`min-h-[639px] flex flex-col lg:flex-row items-center justify-evenly ${theme === "dark" ? "bg-zinc-900" : "bg-zinc-100"}`}>
      <div className="flex flex-col gap-3">
        <h1 className={`text-4xl bg-gradient-to-r from-green-400 via-orange-400 to-orange-900 bg-clip-text text-transparent`}>Where petals bloom, <br />beauty whispers</h1>
        <p className={`text-sm ${theme === "dark" ? "text-zinc-100" : "text-zinc-900"}`}>Explore our 3D garden and let your senses blossom.</p>
        <Link to={"/gallery"}>
          <button className={`cursor-pointer rounded shadow-md shadow-amber-400 transition-colors duration-300 flex items-center justify-center gap-3 text-xl py-2 px-4 ${theme === "dark" ? "bg-zinc-100 text-zinc-900 hover:bg-zinc-900 hover:text-zinc-100" : "bg-zinc-900 text-zinc-100 hover:bg-zinc-100 hover:text-zinc-900"}`}>
            <span>Explore Collection</span>
            <span><FaArrowRight /></span>
          </button>
        </Link>
      </div>
      <div className={`hidden lg:flex relative lg:w-[60%] h-[652px] items-center justify-center gap-10 text-red-700`}>
        {
          count == 0 ? <Rose /> : count == 1 ? <Daisy /> : count == 2 ? <Crocus /> : count == 3 ? <Daffodil /> : count == 4 ? <EnglishHolly /> : count == 5 ? <SnowDrop /> : count == 6 ? <Tulip /> : "No Flowers Found."
        }
        <div>
          <button onClick={handleNext3dFlowerModel} className={`text-2xl cursor-pointer shadow-md shadow-amber-400 rounded-full p-4 ${theme === "dark" ? "text-zinc-100 hover:bg-zinc-100 hover:text-zinc-900" : "text-zinc-900 hover:text-zinc-100 hover:bg-zinc-900"}`}>
            <FaArrowRight />
          </button>
        </div>
      </div>

    </section>
  )
}

export default HomePage