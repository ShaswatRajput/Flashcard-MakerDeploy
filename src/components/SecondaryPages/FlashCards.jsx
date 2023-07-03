import React, { useState } from "react";
import { useSelector } from "react-redux/es/exports";
import { BiCopy } from "react-icons/bi";
import { Link } from "react-router-dom";
import { BsDownload, BsArrowLeft, BsPrinter } from "react-icons/bs";

const FlashCards = () => {
  const state = useSelector((state) => state.groupsReducer.groupData);
  const currentCard = useSelector((state) => state.groupsReducer.currentCard);

  const [cardHandler, setCardHandler] = useState(0);

  // Left arrow handler
  const minusHandler = (num, array) => {
    if (cardHandler <= 0) {
      setCardHandler(array.length - 1);
    } else if (cardHandler > 0) {
      setCardHandler(cardHandler + num);
    }
  };

  // Right arrow handler
  const plusHandler = (num, array) => {
    if (array.length - 1 > cardHandler) {
      setCardHandler(cardHandler + num);
    } else {
      setCardHandler(0);
    }
  };

  // Url Fetcher
  const [copyAlertColor, setCopyAlertColor] = useState("red");
  const urlCopyHandler = () => {
    navigator.clipboard.writeText(document.location.href);
    setCopyAlertColor("green");
    alert("URL copied to Clipboard");
  };

  return (
    <div className="mb-12 grid md:grid-cols-3 gap-2 justify-center">
      <div>
        <div className="mx-4 px-5 my-2">
          <div
            className="mx-5 px-4 bg-light py-4 shadow-lg"
            style={{
              width: "150vh",
              borderRadius: "5%",
            }}
          >
            {/* ---------------------- Flashcard mainBox--------------------------------- */}
            {state.map((elem, index) => {
              return index === currentCard ? (
                <div key={index}>
                  <div>
                    <Link
                      to="/myflash"
                      className="flex items-center font-bold text-black"
                    >
                      <BsArrowLeft className="text-lg mr-3" />
                      <span>{elem.GroupTitle}</span>
                    </Link>
                    <p className="text-sm text-gray-600 pl-8 pt-3 text-justify">
                      {elem.GroupDescription}
                    </p>
                  </div>
                  {/* ---------- Carousel Box------------------------ */}
                  <div className="flex flex-col items-center justify-center lg:items-start my-9 lg:flex-row lg:justify-between sm:items-center sm:justify-center sm:flex-col mb-12">
                    {/* ------------Cards List------------- */}
                    <div className="w-full bg-white rounded-md px-2 shadow-lg lg:w-1/5 sm:w-full ">
                      <p className="text-sm px-5 py-2 text-gray-300">
                        Flashcards
                      </p>
                      <hr className="bg-gray-300" style={{ height: "1px" }} />
                      <h3 className="font-extrabold px-5 py-2 text-red-500">
                        Cards list
                      </h3>
                      <ul>
                        {elem.Flashcard.map((firstChild, FirstChildIndex) => {
                          return (
                            <li
                              key={FirstChildIndex}
                              style={
                                cardHandler === FirstChildIndex
                                  ? { color: "red" }
                                  : { color: "initial" }
                              }
                              onClick={() => setCardHandler(FirstChildIndex)}
                              className={`px-5 py-2 cursor-pointer ${
                                cardHandler === FirstChildIndex
                                  ? "text-red-500 font-bold"
                                  : ""
                              }`}
                            >
                              {FirstChildIndex + 1}. {firstChild.FlashcardName}
                            </li>
                          );
                        })}
                      </ul>
                    </div>

                    <div className="w-full lg:w-2/4 sm:w-full">
                      {elem.Flashcard.map((firstChild, FirstChildIndex) => {
                        return cardHandler === FirstChildIndex ? (
                          <div
                            key={FirstChildIndex}
                            className="w-full flex flex-col justify-between px-5 py-9 sm:flex-col lg:flex-row bg-white rounded-md shadow-lg"
                          >
                            <div style={{ width: "70%", height: "80%" }}>
                              <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a2b99b78814263.5caf8da69d88a.png" alt="cardImage"/>
                            </div>
                            <div className="w-2/4 max-h-96 lg:w-2/4 lg:max-h-96  sm:w-full sm:max-w-lg"></div>

                            <div className="w-full text-justify sm:mt-6 lg:mt-0 sm:w-full lg:w-2/5">
                              <p>{firstChild.FlashcardDefinition}</p>
                            </div>
                          </div>
                        ) : null;
                      })}

                      <div
                        style={{ userSelect: "none" }}
                        className="px-8 py-6 mt-6 text-center"
                      >
                        <span
                          className="text-3xl mr-10 cursor-pointer"
                          onClick={() => minusHandler(-1, elem.Flashcard)}
                        >
                          &lt;
                        </span>
                        <span className="text-2xl ">
                          {cardHandler + 1}/{elem.Flashcard.length}
                        </span>
                        <span
                          className="text-3xl ml-10 cursor-pointer"
                          onClick={() => plusHandler(1, elem.Flashcard)}
                        >
                          &#62;
                        </span>
                      </div>
                    </div>

                    {/* --------Icon Box ----------------- */}
                    <div className="w-full lg:w-1/5 sm:w-full">
                      <div className="mb-2 shadow-lg">
                        <button
                          onClick={urlCopyHandler}
                          className="bg-white w-full rounded-md px-4 py-4 font-bold flex items-center text-gray-700"
                        >
                          <BiCopy
                            className="mr-5"
                            style={{
                              color: copyAlertColor,
                              height: "30px",
                              width: "30px",
                            }}
                          />
                          <span>Copy URL</span>
                        </button>
                      </div>
                      <div className="mb-2 shadow-lg">
                        <button className="bg-white w-full rounded-md px-4 py-4 font-bold flex items-center text-gray-700">
                          <BsDownload className="mr-5" />
                          <span>Download</span>
                        </button>
                      </div>
                      <div className="mb-2 shadow-lg">
                        <button className="bg-white w-full rounded-md px-4 py-4 font-bold flex items-center text-gray-700">
                          <BsPrinter className="mr-5" />
                          <span>Print</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashCards;
