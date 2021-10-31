/* eslint-disable react-hooks/rules-of-hooks */
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
// import TextField from "@material-ui/core/TextField";
import Image from "next/image";
// import PhoneInput from "react-phone-number-input";
import 'react-phone-number-input/style.css'
// toggle component.
import swal from "sweetalert";
import Phone from "../../assets/Phone";
import lottie from "lottie-web";

import { Faq } from "../Faq/Faq";
const signUp = () => {
  const [phone, setmobile] = useState("");
  const [isError, setIsError] = useState(false);

  const [showModal, setShowModal] = React.useState(false);
  // submitOTP = () => {
  //   alert("You Are Verified 👍");
  // }
  function submitOTP(e) {
    e.preventDefault();
    // alert("You Are Verified 👍");
    swal({
      icon: "success",
      title: "Thanks!",
      text: "Your Response has been submitted",
    });
  }

   // Lottie animation .
   const container = useRef(null);

   useEffect(() => {
     lottie.loadAnimation({
       container: container.current,
       renderer: "svg",
       loop: true,
       autoplay: true,
       animationData: require("../../assets/walking.json"),
     });
   }, []);

  // Backend

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { email: email, name: name, mobile: mobile };

    setIsPending(true);

    fetch("", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then(() => {
      console.log("new data added");
      alert("🎉You have Successfully Subscribed🎉");
      setIsPending(false);
    });
    e.target.reset();
  };

  return (
    <>
      <div className="relative flex flex-col-reverse px-4 py-20 mx-auto lg:block lg:flex-col lg:py-32  md:px-8 sm:max-w-xl md:max-w-full">
        <div className="z-0 flex justify-center h-full -mx-4 overflow-hidden lg:pt-24 lg:pb-16 lg:pr-8 xl:pr-0 lg:w-1/2 lg:absolute lg:justify-end lg:bottom-0 lg:left-0 lg:items-center">
          <Image
            src="/img/HeaderImage.png"
            height={516} width={775}
            className="object-cover object-right w-full h-auto lg:w-auto lg:h-full"
            alt=""      

          />
        </div>
        <div className="relative flex justify-end max-w-xl mx-auto xl:pr-32 lg:max-w-screen-xl">
          <div className="mb-16 lg:pr-5 lg:max-w-lg lg:mb-0">
            <div className="max-w-xl mb-6">
              <div>
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                  Aecor
                </p>
              </div>
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-purple-800 sm:text-4xl sm:leading-none leading-9">
                Open a free
                {/* <br className="hidden md:block leading-10" /> */}
                <br/>
                <span className="inline-block text-purple-800 leading:9 mt-3">
                  Demat Account
                </span>
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                Open a free Demat account online with Aecor and enjoy a
                completely paperless online Demat account opening experience
                with no annual maintenance fees.
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row">
                <input
                  placeholder="Name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 focus:border-purple-400 focus:outline-none focus:shadow-outline"
                />
                <input
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mb-0 focus:border-purple-400 focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="flex flex-col md:flex-row">
                <input
                  placeholder="Phone Number"
                  required
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  type="text"
                  label="Enter Valid Phone Number with country code "
                  pattern="^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$"
                  maxLength="12"
                  className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                />
                
              </div>
              
              <div className="flex items-center mt-4">
                <button
                  type="button"
                  className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-700 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                  onClick={() => setShowModal(true)}
                >
                  Sign Up
                </button>

                <Link
                  href="/"
                  aria-label=""
                  className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                  Back
                </Link>
              </div>
              <p className="text-md mt-5">
                Track Existing Application {" "}
                <Link
                  href="/login"
                  className="hover:underline hover:text-purple-700 cursor:pointer"
                >
                  here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <Image src="/img/logo.png"  height={110} width={500}
                  alt="aecor-logo"/>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>

                <div className="relative p-6 flex-auto">
                  <div className="bg-white h-64 py-3 rounded text-center">
                    <h1 className="text-2xl font-bold">OTP Verification</h1>
                    <div className="flex flex-col mt-4">
                      {" "}
                      <span>Enter the OTP you received at</span>{" "}
                      <span className="font-bold">+91 ******876</span>{" "}
                    </div>
                    <div
                      id="otp"
                      className="flex flex-row justify-center text-center px-2 mt-5"
                    >
                      {" "}
                      <input
                        className="m-2 border h-10 w-10 text-center form-control rounded"
                        type="text"
                        id="first"
                        maxLength="1"
                      />{" "}
                      <input
                        className="m-2 border h-10 w-10 text-center form-control rounded"
                        type="text"
                        id="second"
                        maxLength="1"
                      />{" "}
                      <input
                        className="m-2 border h-10 w-10 text-center form-control rounded"
                        type="text"
                        id="third"
                        maxLength="1"
                      />{" "}
                      <input
                        className="m-2 border h-10 w-10 text-center form-control rounded"
                        type="text"
                        id="fourth"
                        maxLength="1"
                      />{" "}
                      <input
                        className="m-2 border h-10 w-10 text-center form-control rounded"
                        type="text"
                        id="fifth"
                        maxLength="1"
                      />{" "}
                      <input
                        className="m-2 border h-10 w-10 text-center form-control rounded"
                        type="text"
                        id="sixth"
                        maxLength="1"
                      />{" "}
                    </div>
                    <div className="flex justify-center text-center mt-5">
                      {" "}
                      <a className="flex items-center text-blue-700 hover:text-blue-900 cursor-pointer">
                        <span className="font-bold">Resend OTP</span>
                        <i className="bx bx-caret-right ml-1"></i>
                      </a>{" "}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-green-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={submitOTP}
                  >
                    Verify OTP
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      {/* Terms & Condition section */}

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">

          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-purple-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block text-gray-200">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="27df4f81-c854-45de-942a-fe90f7a300f9"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#27df4f81-c854-45de-942a-fe90f7a300f9)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative text-purple-900">Why</span>
            </span>{" "}
            Open a Account With Aecor?
          </h2>
          <p className="text-base text-gray-500 md:text-lg">
Aecor offers a hassle-free experience. There are no complicated steps. Buy/Sell Stocks with a Single Click It does not make a difference if you are interested in value investing or day trading. Debt funds or equity funds Aecor  has your back.
          </p>
        </div>
       
      </div>
      <Faq />

      <div className="flex flex-col md:flex-row px-6 md:px-52 mx-auto">
        <div className="w-full md:w-3/5">
          <div className="flex flex-col items-center md:pt-6">
            <div className="text-3xl md:text-4xl font-semibold mt-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, voluptate.</div>
            <div className="text-lg mt-4 font-normal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, voluptate. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, facere.</div>
          </div>
        </div>
        <div className="w-full md:w-2/5">
          <div className="container" ref={container}></div>
        </div>
      </div>
    </>
  );
};

export default signUp;
