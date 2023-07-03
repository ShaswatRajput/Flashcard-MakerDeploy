import React from "react";
import { Link } from "react-router-dom";

const TabButtons = () => {
  return (
    <div className="mx-5 px-5 container-fluid">
      <div className="relative px-4 mr-3 mx-5 cursor-pointer text-gray-600 pb-3 font-medium">
        <ul className="nav nav-underline">
          <li className="nav-item">
            {/* ---------------- Create tab Button--------------------*/}
            <Link className="nav-link active" aria-current="page" to="/">
              Create Flashcard
            </Link>
          </li>
          {/* ---------------- Flashcards tab Button--------------------*/}
          <li className="nav-item">
            <Link className="nav-link" to="/myflash">
              My Flashcards
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TabButtons;
