import { PiVanDuotone } from 'react-icons/pi';
import { BsShieldCheck } from 'react-icons/bs';
import { FaClockRotateLeft } from 'react-icons/fa6';
import { FaAward } from 'react-icons/fa';
const AboutPage = ({ theme }) => {
  return (
    <div className={`min-h-[652px] flex flex-col gap-7 items-center justify-center ${theme == "dark" ? "bg-zinc-900 text-zinc-100" : "bg-zinc-100 text-zinc-900"}`}>
      <h1 className="text-orange-400 text-2xl mt-5 md:mt-0 md:text-3xl">Crafting Beauty with Nature's Finest</h1>
      <p className="w-2/3 text-center text-lg md:text-md">For over 24 years, we bring the beauty of nature directly to your doorstep. Every bouquet tells a story, every arrangement carries emotion, and every delivery brings joy. Enjoy the highest quality and freshness of you flowers.</p>
      <div className={`flex gap-4`}>
        <div className={`flex flex-col items-center justify-center rounded p-2 font-bold ${theme == "dark" ? "bg-orange-50 text-zinc-900" : "bg-orange-300 text-zinc-900"}`}>
          <p>24+</p>
          <p>Years of Excelence</p>
        </div>
        <div className={`flex flex-col items-center justify-center rounded p-2 font-bold ${theme == "dark" ? "bg-orange-50 text-zinc-900" : "bg-orange-300 text-zinc-900"}`}>
          <p>500k+</p>
          <p>Happy Customers</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
        <div className="flex flex-col items-center justify-center gap-3">
          <PiVanDuotone className="text-6xl text-orange-300" />
          <p>Free Delivery</p>
          <p>Free Delivery for your 1st Order</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-3">
          <BsShieldCheck className="text-6xl text-orange-300" />
          <p>Fresh Guarantee</p>
          <p>100% guaranteed fresh flowers</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-3">
          <FaClockRotateLeft className="text-6xl text-orange-300" />
          <p>24/7 Support</p>
          <p>Any time service available</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-3">
          <FaAward className="text-6xl text-orange-300" />
          <p>Expert Florists</p>
          <p>Arranged by certified professional florists</p>
        </div>
      </div>
    </div>
  )
}

export default AboutPage