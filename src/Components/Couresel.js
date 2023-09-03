import Card from "./card"
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

function Carousel() {

const scrollLeft = () => {
    document.getElementById("content").scrollLeft -= 165;
}
const scrollRight = () => {
    document.getElementById("content").scrollLeft += 165;
}


  return (
    <div className="m-5 md:p-5">
      <div className="py-4 text-xl font-bold font-poppins pl-10">Our Destinations</div>
      <div className="flex justify-around items-center">
        <button onClick={scrollLeft} className="p-2 m-2 basis-1/12 rounded-full bg-white">
          <FiChevronLeft />
        </button>
        
      <div id="content" className="carousel md:p-4 basis-10/12 flex items-center justify-start  scroll-smooth  overflow-hidden">
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
      </div>
      <button onClick={scrollRight} className="p-2 m-2 basis-1/12 rounded-full bg-white">
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
}

export default Carousel;