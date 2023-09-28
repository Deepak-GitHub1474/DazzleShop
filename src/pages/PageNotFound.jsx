import { useNavigate } from "react-router-dom";
import pageNotFound from "../assets/Images/pageNotFound.jpg"

function PageNotFound() {
    
    const navigate = useNavigate();
    function goback() {
        navigate(-1)
    };

    return (
        <div className="flex items-center justify-center h-screen w-full bg-[#ffffff]">
            <div>
                <img src={pageNotFound} alt="404-img" />
            </div>
            <div className="absolute bottom-16" onClick={goback}>
                <button className="border bg-[#8bc34a] w-[10rem] px-3 py-3 rounded-md font-bold text-lg text-black cursor-pointer hover:bg-[#388e3c] transition-all ease-in-out duration-300">Go Back</button>
            </div>
        </div>
    )
}

export default PageNotFound;