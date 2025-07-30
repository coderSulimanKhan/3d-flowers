import { useLocation } from "react-router"
import Rose from "../components/flowers/Rose";
import Daisy from "../components/flowers/Daisy";
import Crocus from "../components/flowers/Crocus";
import Daffodil from "../components/flowers/Daffodil";
import EnglishHolly from "../components/flowers/EnglishHolly";
import SnowDrop from "../components/flowers/SnowDrop";
import Tulip from "../components/flowers/Tulip";

const Flower = () => {
  const flower = new URLSearchParams(useLocation().search).get("flower");
  console.log(flower);
  return (
    <div className="h-[652px] flex items-center justify-center">
      {
        flower == "rose" ? <Rose isOrbitControls={true} /> : flower == "daisy" ? <Daisy isOrbitControls={true} /> : flower == "crocus" ? <Crocus isOrbitControls={true} /> : flower == "daffodil" ? <Daffodil isOrbitControls={true} /> : flower == "english holly" ? <EnglishHolly isOrbitControls={true} /> : flower == "snow drop" ? <SnowDrop isOrbitControls={true} /> : flower == "tulip" ? <Tulip isOrbitControls={true} /> : "No Flowers Found."
      }
    </div>
  )
}

export default Flower