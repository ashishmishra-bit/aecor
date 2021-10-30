import Link from "next/link";
import React, { useState, useRef } from "react";
import Image from "next/image";
// import PhoneInput from "react-phone-number-input";
import 'react-phone-number-input/style.css'
// toggle component.
import swal from "sweetalert";
import Phone from "../../assets/Phone";

import { Faq } from "../Faq/Faq";
const signUp = () => {
  // const [value, setValue] = useState()

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
          <img
            src="/img/HeaderImage.png"
            className="object-cover object-right w-full h-auto lg:w-auto lg:h-full "
            alt="laptop.png" 
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
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Open a free
                <br className="hidden md:block" />
                <span className="inline-block text-deep-purple-accent-400">
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
                {/* <input
                  placeholder="Phone Number"
                  required
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  type="number"
                  className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                /> */}
                {/* <PhoneInput className = "focus:border-purple-400 w-full  flex-grow h-12 w-2"
      placeholder="Enter phone number"
      value={value}
      onChange={setValue}/> */}
      <Phone/>
              </div>
              <div className="flex items-center mt-4">
                <button
                  type="button"
                  className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-700 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                  onClick={() => setShowModal(true)}
                >
                  Sign Up
                </button>

                <a
                  href="/"
                  aria-label=""
                  className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                  Back
                </a>
              </div>
              <p className="text-md mt-5">
                Already have an Account ?{" "}
                <a
                  href="/login"
                  className="hover:underline hover:text-purple-700 cursor:pointer"
                >
                  Login
                </a>
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
                  <img src="/img/logo.png" />
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
                  <div class="bg-white h-64 py-3 rounded text-center">
                    <h1 class="text-2xl font-bold">OTP Verification</h1>
                    <div class="flex flex-col mt-4">
                      {" "}
                      <span>Enter the OTP you received at</span>{" "}
                      <span class="font-bold">+91 ******876</span>{" "}
                    </div>
                    <div
                      id="otp"
                      class="flex flex-row justify-center text-center px-2 mt-5"
                    >
                      {" "}
                      <input
                        class="m-2 border h-10 w-10 text-center form-control rounded"
                        type="text"
                        id="first"
                        maxlength="1"
                      />{" "}
                      <input
                        class="m-2 border h-10 w-10 text-center form-control rounded"
                        type="text"
                        id="second"
                        maxlength="1"
                      />{" "}
                      <input
                        class="m-2 border h-10 w-10 text-center form-control rounded"
                        type="text"
                        id="third"
                        maxlength="1"
                      />{" "}
                      <input
                        class="m-2 border h-10 w-10 text-center form-control rounded"
                        type="text"
                        id="fourth"
                        maxlength="1"
                      />{" "}
                      <input
                        class="m-2 border h-10 w-10 text-center form-control rounded"
                        type="text"
                        id="fifth"
                        maxlength="1"
                      />{" "}
                      <input
                        class="m-2 border h-10 w-10 text-center form-control rounded"
                        type="text"
                        id="sixth"
                        maxlength="1"
                      />{" "}
                    </div>
                    <div class="flex justify-center text-center mt-5">
                      {" "}
                      <a class="flex items-center text-blue-700 hover:text-blue-900 cursor-pointer">
                        <span class="font-bold">Resend OTP</span>
                        <i class="bx bx-caret-right ml-1"></i>
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
          <div className="bg-green-300 w-36 h-7 rounded-full mx-auto">
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Disclosure
            </p>
          </div>
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
              <span className="relative text-purple-900">The</span>
            </span>{" "}
            AGREEMENT TO TERMS & CONDITIONS
          </h2>
          <p className="text-base text-gray-500 md:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </p>
        </div>
        <div className="grid max-w-screen-lg gap-8 row-gap-10 mx-auto lg:grid-cols-2">
          <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
            <div className="mr-4">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-10 h-10 text-purple-600"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h6 className="mb-3 text-xl  leading-5 font-extrabold">Stock</h6>
              <p className="mb-3 text-sm text-gray-600">
                A flower in my garden, a mystery in my panties. Heart attack
                never stopped old Big Bear. I didn't even know we were calling
                him Big Bear. We never had the chance to.
              </p>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-purple-700 hover:text-purple-800"
              >
                Learn more
              </a>
            </div>
          </div>
          <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
            <div className="mr-4">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-10 h-10 text-purple-600"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h6 className="mb-3 text-xl font-bold leading-5">Mutual Funds</h6>
              <p className="mb-3 text-sm text-gray-600">
                Rough pomfret lemon shark plownose chimaera southern sandfish
                kokanee northern sea robin Antarctic cod. Yellow-and-black
                triplefin gulper South American Lungfish mahi-mahi,
                butterflyfish glass catfish soapfish ling gray mullet!
              </p>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-purple-700 hover:text-purple-900"
              >
                Learn more
              </a>
            </div>
          </div>
          <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
            <div className="mr-4">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-10 h-10 text-purple-600"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h6 className="mb-3 text-xl font-bold leading-5">
                Currency Booking
              </h6>
              <p className="mb-3 text-sm text-gray-600">
                A slice of heaven. O for awesome, this chocka full cuzzie is as
                rip-off as a cracker. Meanwhile, in behind the bicycle shed,
                Hercules Morse, as big as a horse and Mrs Falani were up to no
                good with a bunch of crook pikelets.
              </p>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-purple-700 hover:text-purple-800"
              >
                Learn more
              </a>
            </div>
          </div>
          <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
            <div className="mr-4">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-10 h-10 text-purple-600"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h6 className="mb-3 text-xl font-bold leading-5">DP Services</h6>
              <p className="mb-3 text-sm text-gray-600">
                Disrupt inspire and think tank, social entrepreneur but
                preliminary thinking think tank compelling. Inspiring, invest
                synergy capacity building, white paper; silo, unprecedented
                challenge B-corp problem-solvers.
              </p>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-purple-700 hover:text-purple-900"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
      <Faq />

      {/* <style jsx>{`
        #modalPopUP{
          // top:-800px;
          animation: drop .5s ease-in-out;
        }
        @keyframes drop{
          0%{opacity:0}
          70%{transform:translateY(700px)}
          100%{transform:translateY(650px);opacity:1;}
        }
      
      `}</style> */}
    </>
  );
};

export default signUp;
