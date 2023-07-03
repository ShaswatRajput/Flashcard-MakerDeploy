import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux/es/exports";
import "../../Card.css";
import { currentCardSetter } from "../../store/action/groupData";

const MyGroupPage = () => {
  const groupData = useSelector((state) => state.groupsReducer.groupData);
  const dispatch = useDispatch();

  return (
    <div className="container-fluid">
      {/* checking if even a single card is present or not */}
      {!groupData.length > 0 ? (
        <div
          className="mx-3 px-3 my-3 row"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="mx-3 px-3 bg-light py-3 shadow-lg" style={{ width: "100%", borderRadius: "1%" }}>
            <div className="mx-3 px-3">
              <h2>You don't have any Flashcards</h2>
            </div>
          </div>
          {console.log(groupData)}
        </div>
      ) : (
        // if cards are present than mapping them to render one by one
        <div className="container-fluid">
          <div
            className="mx-3 px-3 my-3 d-flex justify-content-center"
          >
            <div
              className="mx-3 px-3 bg-light py-3 shadow-lg d-flex flex-wrap justify-content-center"
              style={{ width: "100%", borderRadius: "1%" }}
            >
              {/* mapping cards and rendering one by one */}
              {groupData.map((e, index) => {
                return (
                  <div className="example-2 card" key={index} style={{ width: "300px", margin: "10px" }}>
                    <div className="wrapper">
                      <div className="header">
                        <div className="date">
                          <span className="day">{index + 1}</span>
                        </div>
                      </div>
                      <div className="data">
                        <div className="content">
                          <h1 className="title">
                            {/* ---------card link to travel inside a card ---------------*/}
                            <Link
                              onClick={() =>
                                dispatch(currentCardSetter(index))
                              }
                              to={`/myflash/Flashcard${index}`}
                            >
                              {e.GroupTitle}
                            </Link>
                            {/*----------------- card link to travel inside a card ----------------*/}
                          </h1>
                          <p className="text">{e.GroupDescription}</p>
                          <Link
                            onClick={() =>
                              dispatch(currentCardSetter(index))
                            }
                            to={`/myflash/Flashcard${index}`}
                            className="button"
                          >
                            Enter Flashcard Group
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div
            className="mr-5 pr-5"
            style={{ display: "flex", justifyContent: "center" }}
          >
            {/* Delete button to delete all cards and reload the page with updated components */}
            <button
              type="submit"
              onClick={() => {
                window.location.reload();
                localStorage.clear();
              }}
              className="btn btn-danger mb-3"
            >
              Delete All
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyGroupPage;
