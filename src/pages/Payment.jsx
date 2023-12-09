import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/ProductContext";
import { FaWindowClose } from "react-icons/fa";

function Payment() {
  const [formData, setFormData] = useState({
    userData: {},
    username: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    cardHolderName: "",
    cardNumber: "",
    expMonth: "",
    expYear: "",
    cvv: "",
  });

  const [item, setItem] = useState({
    totalItems: 0,
    itemsPrice: 0,
    deliveryCharges: 10,
    itemsTotalCost: 0,
  });

  const [validationMsg, setValidationMsg] = useState("");
  const [style, setStyle] = useState(null);
  const [isFormValidated, setIsFormValidated] = useState(false);
  const { cart, productsCost, totalCost } = useCart();
  const navigate = useNavigate();

  // Handle user input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFromData) => ({
      ...prevFromData,
      [name]: value,
    }));
  };

  // Calculate Cost
  function calculateCost() {
    const purchaseSource = localStorage.getItem("purchaseSource");

    if (purchaseSource === "cart") {
      setItem((prevItem) => ({
        ...prevItem,
        totalItems: cart.length,
        itemsPrice: productsCost,
        itemsTotalCost: totalCost,
      }));
    } else if (purchaseSource === "currentItem") {
      const currentItem = JSON.parse(localStorage.getItem("currentItem")) || {};
      setItem((prevItem) => ({
        ...prevItem,
        totalItems: 1,
        itemsPrice: Math.round(currentItem.price),
        itemsTotalCost:
          Math.round(currentItem.price) + prevItem.deliveryCharges,
      }));
    }
  }

  // Clear local storage on sucessfull order place
  function clearLocalStorage() {
    const purchaseSource = localStorage.getItem("purchaseSource");
    if (purchaseSource === "cart") {
      localStorage.clear();
      window.location.href = "/payment/success";
    } else if (purchaseSource === "currentItem") {
      window.location.href = "/payment/success";
    }
  }

  // Checkout
  const handleCheckout = (e) => {
    e.preventDefault();

    calculateCost();

    setStyle("bg-[#ff0000] text-white w-full px-4 py-3 mb-6");

    // Name Input Field Validation
    const usernameRegex = /^[a-zA-Z ]{3,20}$/;
    if (usernameRegex.test(formData.username)) {
      formData.userData.username = formData.username;
      setIsFormValidated((prevFormValidated) => !prevFormValidated);
    } else {
      setIsFormValidated(false);
      setValidationMsg("Username should be between 3 and 20 characters");
      return;
    }

    // // Email Input Field Validation
    const emailRegex = /^[a-zA-Z0-9]+[a-zA-Z0-9._]*@[a-zA-Z0-9]+\.(com|in)$/i;
    if (emailRegex.test(formData.email)) {
      formData.userData.email = formData.email.toLowerCase();
      setIsFormValidated(true);
    } else {
      setIsFormValidated(false);
      setValidationMsg("Invalid email format");
      return;
    }

    // Address Input Field Validation
    const addressRegex = /^[0-9a-zA-Z\s/,-]{6,60}$/;
    if (addressRegex.test(formData.address)) {
      formData.userData.address = formData.address;
      setIsFormValidated(true);
    } else {
      setIsFormValidated(false);
      setValidationMsg("Address should be between 6 and 60 characters");
      return;
    }

    // City Input Field Validation
    const cityRegex = /^.{3,20}$/;
    if (cityRegex.test(formData.city)) {
      formData.userData.city = formData.city;
      setIsFormValidated(true);
    } else {
      setIsFormValidated(false);
      setValidationMsg("City should be between 3 and 20 characters");
      return;
    }

    // State Input Field Validation
    const stateRegex = /^.{3,19}$/;
    if (stateRegex.test(formData.state)) {
      formData.userData.state = formData.state;
      setIsFormValidated(true);
    } else {
      setIsFormValidated(false);
      setValidationMsg("State should be between 3 and 19 characters");
      return;
    }

    // Pincode Input Field Validation
    const pincodeRegex = /^\d{6}$/;
    if (pincodeRegex.test(formData.pincode)) {
      formData.userData.pincode = formData.pincode;
      setIsFormValidated(true);
    } else {
      setIsFormValidated(false);
      setValidationMsg("Pincode should be 6 digits");
      return;
    }

    // Card Holder Name Input Field Validation
    const cardHolderNameRegex = /^.{3,30}$/;
    if (cardHolderNameRegex.test(formData.cardHolderName)) {
      formData.userData.cardHolderName = formData.cardHolderName;
      setIsFormValidated(true);
    } else {
      setIsFormValidated(false);
      setValidationMsg("Cardholder name should be between 3 and 30 characters");
      return;
    }

    // Card Number Input Field Validation
    const cardNumberRegex = /^\d{16}$/;
    if (cardNumberRegex.test(formData.cardNumber)) {
      formData.userData.cardNumber = formData.cardNumber;
      setIsFormValidated(true);
    } else {
      setIsFormValidated(false);
      setValidationMsg("Card number should be 16 digits");
      return;
    }

    // Card Exp Month Input Field Validation
    const expMonthRegex = /^(0?[1-9]|1[0-2])$/;
    if (expMonthRegex.test(formData.expMonth)) {
      formData.userData.expMonth = formData.expMonth;
      setIsFormValidated(true);
    } else {
      setIsFormValidated(false);
      setValidationMsg("Invalid expiration month");
      return;
    }

    // Card Exp Year Input Field Validation
    const expYearRegex = /^(202[4-9]|20[3-9]\d|[3-9]\d{3})$/;
    if (expYearRegex.test(formData.expYear)) {
      formData.userData.expYear = formData.expYear;
      setIsFormValidated(true);
    } else {
      setIsFormValidated(false);
      setValidationMsg("Invalid expiration year");
      return;
    }

    // CVV Number Input Field Validation
    const cvvRegex = /^\d{4}$/;
    if (cvvRegex.test(formData.cvv)) {
      formData.userData.cvv = formData.cvv;
      setIsFormValidated(true);
    } else {
      setIsFormValidated(false);
      setValidationMsg("CVV should be 4 digits");
      return;
    }

    // console.log("Form data:", formData.userData);
    return formData.userData;
  };

  return (
    <div className=" flex justify-center items-center p-5 min-h-screen bg-gray-100">
      <form
        className="w-full max-w-lg bg-white shadow-md p-8"
        onSubmit={handleCheckout}
      >
        {!isFormValidated && <div className={style}>{validationMsg}</div>}
        <div>
          <section className="flex flex-col gap-1">
            <h3 className="text-center capitalize text-xl font-bold mb-2">
              address
            </h3>
            <div className="flex flex-col gap-1">
              <label className="font-semibold">full name :</label>
              <input
                type="text"
                placeholder="deepak chaudhary"
                name="username"
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-black"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-semibold">email :</label>
              <input
                type="email"
                placeholder="developerstring@youtube.com"
                name="email"
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-black"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-semibold">address :</label>
              <input
                type="text"
                placeholder="room no/building name - street"
                name="address"
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-black"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-semibold">city :</label>
              <input
                type="text"
                placeholder="mumbai"
                name="city"
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-black"
              />
            </div>
            <div className="state-pincode-container flex gap-4">
              <div className="flex flex-col gap-1">
                <label className="font-semibold">state :</label>
                <input
                  type="text"
                  placeholder="maharashtra"
                  name="state"
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-black"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-semibold">pin code :</label>
                <input
                  type="number"
                  placeholder="123456"
                  name="pincode"
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-black"
                />
              </div>
            </div>
          </section>
          <hr className="bg-[#ececea] w-full mt-5" />
          <section className="flex flex-col gap-1 my-2">
            <div className="flex flex-col gap-4 items-center">
              <h3 className="text-center capitalize text-xl font-bold">
                payment
              </h3>
              <img
                src="https://res.cloudinary.com/dlt4ash36/image/upload/v1701489359/card_img_ejp2hu.png"
                alt=""
                className="mb-2"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-semibold">name on card :</label>
              <input
                type="text"
                placeholder="deepak chaudhary"
                name="cardHolderName"
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-black"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-semibold">credit card number :</label>
              <input
                type="number"
                placeholder="1111-2222-3333-4444"
                name="cardNumber"
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-black"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-semibold">exp month :</label>
              <input
                type="number"
                placeholder="1"
                name="expMonth"
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-black"
              />
            </div>
            <div className="card-year-cvv flex gap-4">
              <div className="flex flex-col gap-1">
                <label className="font-semibold">exp year :</label>
                <input
                  type="number"
                  placeholder="2026"
                  name="expYear"
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-black"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-semibold">CVV :</label>
                <input
                  type="number"
                  placeholder="1234"
                  name="cvv"
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-black"
                />
              </div>
            </div>
          </section>
        </div>
        <input
          type="submit"
          value="proceed to checkout"
          id="checkout-btn"
          className="w-full bg-[#388e3c] text-white hover:bg-[#fb641b] font-semibold py-3 px-4 mt-6 cursor-pointer"
        />
      </form>

      {isFormValidated && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center"
        >
          <div className="xs:w-[450px] w-[95vw] h-[300px] bg-white rounded-md p-5 fixed overflow-hidden">
            <div className="flex items-center justify-between">
              <h3 className="text-[#5e5e5e] text-md font-bold mb-4">
                PRICE DETAILS
              </h3>
              <FaWindowClose
                size="24"
                className="mb-4 cursor-pointer text-[#ff0000] hover:opacity-80"
                onClick={() => navigate("/")}
              />
            </div>
            <hr className=" mb-4" />
            <div className="flex flex-col justify-between gap-5 text-[#212121]">
              <div className="flex items-center justify-between">
                <h4>
                  Price (
                  <span id="cart-count-placeholder">{item.totalItems}</span>)
                  item
                </h4>
                <h4>${item.itemsPrice}</h4>
              </div>
              <div className="flex items-center justify-between">
                <h4>Discount</h4>
                <h4 id="total-discount" className="text-green-500">
                  -
                </h4>
              </div>
              <div className="flex items-center justify-between">
                <h4 className="text-base ">Delivery Charges</h4>
                <h4>${item.deliveryCharges}</h4>
              </div>
            </div>
            <hr className=" mt-4" />
            <div className="flex items-center justify-between mt-2 text-[#000]">
              <h2 className="text-lg font-bold">Total Amount</h2>
              <h2 className="text-lg font-bold">${item.itemsTotalCost}</h2>
            </div>
            <button
              onClick={clearLocalStorage}
              className="bg-[#388e3c] text-white hover:bg-[#fb641b] p-1 font-semibold cursor-pointer absolute bottom-0 left-0 right-0"
            >
              Proceed to pay
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Payment;
