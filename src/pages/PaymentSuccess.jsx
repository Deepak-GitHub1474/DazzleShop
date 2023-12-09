import { AiFillCheckCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

function PaymentSuccess() {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[#00ff] flex justify-center items-center">
      <div className="xs:w-80 w-[99vw] h-[26rem] bg-[#fff] flex flex-col justify-center items-center shadow-[0_0_10px_black] rounded-lg relative">
        <h1 className="bg-green-500 text-center absolute top-0 w-full py-4 text-2xl font-bold rounded-tl-lg rounded-tr-lg">
          Payment successfull
        </h1>

        <div className="flex flex-col items-center justify-center gap-4">
          <h2 className="text-md font-bold">Thank you for choosing DazzleShop</h2>
          <p>Your item will be delivered on time</p>
        </div>

        <AiFillCheckCircle className="text-5xl text-green-500 mt-2" />
        <Link
          to="/"
          className="bg-green-500 hover:bg-green-600 transition-all ease-in-out duration-300 absolute bottom-0 w-full py-2 text-center rounded-br-lg rounded-bl-lg"
        >
          <button className="font-bold">Continue Shopping</button>
        </Link>
      </div>
    </div>
  );
}

export default PaymentSuccess;
