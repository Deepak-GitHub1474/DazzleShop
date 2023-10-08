import carouselImg1 from "../assets/Images/carouselImg1.webp";
import carouselImg2 from "../assets/Images/carouselImg2.jpg";
import carouselImg3 from "../assets/Images/carouselImg3.png";
import carouselImg4 from "../assets/Images/carouselImg4.jpg";

function Carousel() {

  return (
        <div className="flex flex-col w-full bg-[#ffffff] mt-6">
            <div className="carousel w-full lg:w-1/2 mx-auto">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="flex flex-col items-center justify-center gap-4 px-4 lg:px-[15%]">
                        <img src={carouselImg1} className="w-full lg:w-[600px] h-[300px]" alt="Slide 1" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-3 right-3 mx-auto top-1/2">

                            <a href="#slide4" className="btn btn-circle bg-[#8bc34a] shadow-lg shadow-gray-600/50">❮</a>
                            <a href="#slide2" className="btn btn-circle bg-[#8bc34a] shadow-lg shadow-gray-600/50">❯</a> 
                        </div>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="flex flex-col items-center justify-center gap-4 px-4 lg:px-[15%]">
                        <img src={carouselImg2} className="w-full lg:w-[600px] h-[300px]" alt="Slide 2" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-3 right-3 mx-auto top-1/2">
                            <a href="#slide1" className="btn btn-circle bg-[#8bc34a] shadow-lg shadow-gray-600/50">❮</a>
                            <a href="#slide3" className="btn btn-circle bg-[#8bc34a] shadow-lg shadow-gray-600/50">❯</a>
                        </div>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className="flex flex-col items-center justify-center gap-4 px-4 lg:px-[15%]">
                        <img src={carouselImg3} className="w-full lg:w-[600px] h-[300px]" alt="Slide 3" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-3 right-3 mx-auto top-1/2">
                            <a href="#slide2" className="btn btn-circle bg-[#8bc34a] shadow-lg shadow-gray-600/50">❮</a>
                            <a href="#slide4" className="btn btn-circle bg-[#8bc34a] shadow-lg shadow-gray-600/50">❯</a>
                        </div>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <div className="flex flex-col items-center justify-center gap-4 px-4 lg:px-[15%]">
                        <img src={carouselImg4} className="w-full lg:w-[600px] h-[300px]" alt="Slide 4" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-3 right-3 mx-auto top-1/2">
                            <a href="#slide3" className="btn btn-circle bg-[#8bc34a] shadow-lg shadow-gray-600/50">❮</a>
                            <a href="#slide1" className="btn btn-circle bg-[#8bc34a] shadow-lg shadow-gray-600/50">❯</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default Carousel;
