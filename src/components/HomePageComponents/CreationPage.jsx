import React from "react";
import { FcFullTrash } from "react-icons/fc";
import { FcPicture } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, FieldArray } from "formik";

import { addData } from "../../store/action";
import { string, object, array } from "yup";

const CreatePage = () => {
  //initial values for Formik form
  const initialValues = {
    GroupTitle: "",
    GroupDescription: "",
    Flashcard: [
      {
        FlashcardName: "",
        FlashcardDefinition: "",
      },
    ],
  };

  const dispatch = useDispatch();

  return (
    <div className="sme">
      {/* ----------Formik component for Form Control------------------------ */}
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={object({
          GroupTitle: string()
            .required("This is Required")
            .min(2, "Need Atleast 2 characters")
            .max(30, "character limit exceeded"),
          GroupDescription: string()
            .required("This is Required")
            .min(2, "Need Atleast 2 characters")
            .max(80, "character limit exceeded"),
          Flashcard: array(
            object({
              FlashcardName: string()
                .required("This is Required")
                .min(2, "Need Atleast 2 characters")
                .max(30, "character limit exceeded"),
              FlashcardDefinition: string()
                .required("This is Required")
                .min(2, "Need Atleast 2 characters")
                .max(80, "character limit exceeded"),
            })
          ).min(1, "Need atleast One Flashcard"),
        })}
        onSubmit={(values, { resetForm }) => {
          dispatch(addData(values));
          console.log(values);
          resetForm();
        }}
      >
        {({ errors, resetForm, touched }) => (
          <Form>
            <div className="mx-5 px-5">
              <div className="my-3">
                <div
                  className="bg-light py-3 mx-5 shadow-lg"
                  style={{ width: "150vh", borderRadius: "1%" }}
                >
                  <div className="mb-3 mx-5">
                    <label
                      htmlFor="Group-title"
                      className="form-label"
                      style={{ display: "block" }}
                    >
                      Create Group*
                    </label>
                    {/*----------- Group Title Input Field -------------*/}
                    <Field
                      name="GroupTitle"
                      type="text"
                      className="form-control"
                      style={{ width: "100vh", display: "-webkit-inline-flex" }}
                      id="Group-title"
                      aria-describedby="Help"
                    />
                    {errors.GroupTitle && touched.GroupTitle ? (
                      <p style={{ color: "red" }}> *{errors.GroupTitle}</p>
                    ) : null}
                    <button
                      type="button"
                      className="btn btn-primary mx-2"
                      style={{ backgroundColor: "white", color: "blue" }}
                    >
                      <FcPicture style={{ display: "-webkit-inline-flex" }} />
                      Upload Image
                    </button>
                    <div id="Help" className="form-text">
                      Create a Title For your Flashcard
                    </div>
                  </div>

                  <div className="mb-3 mx-5">
                    <label htmlFor="Group-description" className="form-label">
                      Description
                    </label>
                    {/* ----------Group Description Input Field ---------------*/}
                    <Field
                      name="GroupDescription"
                      as="textarea"
                      style={{ width: "120vh" }}
                      rows="3"
                      className="form-control"
                      id="Group-description"
                    />
                    {errors.GroupDescription && touched.GroupDescription ? (
                      <p style={{ color: "red" }}>
                        {" "}
                        *{errors.GroupDescription}
                      </p>
                    ) : null}
                  </div>
                </div>
              </div>
              {/* Dynamic input field part with Field Array Component provided by Formik */}
              <FieldArray name="Flashcard">
                {(fieldArrayProps) => {
                  const { push, remove, form } = fieldArrayProps;
                  const { values } = form;
                  const { Flashcard } = values;

                  return (
                    <div>
                      {Flashcard.map((Flashcard, index) => (
                        <div className="my-3" key={index}>
                          <div
                            className="bg-light py-3 mx-5 shadow-lg"
                            style={{
                              width: "150vh",
                              borderRadius: "1%",
                              display: "-ms-inline-flexbox",
                            }}
                          >
                            <span className="badge rounded-pill text-bg-danger ml-5">
                              {index + 1}
                            </span>
                            <div className="mb-3 mx-5">
                              <label
                                htmlFor="Enter-term"
                                className="form-label mx-2"
                                style={{
                                  display: "-webkit-inline-flex",
                                  width: "50vh",
                                }}
                              >
                                Enter Term
                                {touched?.Flashcard?.[index]?.FlashcardName &&
                                errors?.Flashcard?.[index]?.FlashcardName ? (
                                  <p
                                    className="px-5"
                                    style={{
                                      color: "red",
                                      display: "-webkit-inline-flex",
                                    }}
                                  >
                                    *{errors.Flashcard[index].FlashcardName}
                                  </p>
                                ) : null}
                              </label>
                              <label
                                htmlFor="Enter-termDes"
                                className="form-label mx-2"
                                style={{
                                  display: "-webkit-inline-flex",
                                  width: "50vh",
                                }}
                              >
                                Enter Definition
                                {touched?.Flashcard?.[index]
                                  ?.FlashcardDefinition &&
                                errors?.Flashcard?.[index]
                                  ?.FlashcardDefinition ? (
                                  <div
                                    style={{ display: "-webkit-inline-flex" }}
                                  >
                                    <p
                                      className="px-5"
                                      style={{
                                        color: "red",
                                        display: "-webkit-inline-flex",
                                      }}
                                    >
                                      *
                                      {
                                        errors.Flashcard[index]
                                          .FlashcardDefinition
                                      }
                                    </p>
                                  </div>
                                ) : null}
                              </label>

                              <Field
                                name={`Flashcard.${index}.FlashcardName`}
                                type="text"
                                className="form-control mx-2"
                                id="Enter-term"
                                aria-describedby="1Help"
                                style={{
                                  display: "-webkit-inline-flex",
                                  width: "50vh",
                                  justifyContent: "space-around",
                                }}
                              />

                              <Field
                                name={`Flashcard.${index}.FlashcardDefinition`}
                                type="text"
                                className="form-control mx-2"
                                id="Enter-termDes"
                                aria-describedby="2Help"
                                style={{
                                  display: "-webkit-inline-flex",
                                  width: "50vh",
                                  justifyContent: "space-around",
                                }}
                              />

                              <button
                                type="button"
                                className="btn btn-primary mx-2"
                                style={{
                                  backgroundColor: "white",
                                  color: "blue",
                                }}
                              >
                                <FcPicture
                                  style={{ display: "-webkit-inline-flex" }}
                                />
                                Upload Image
                              </button>
                              {/*-----------Delete Flashcard button dynamically rendered----------- */}
                              {values.Flashcard.length > 1 && (
                                <button
                                  type="button"
                                  className="btn btn-danger mx-2"
                                  onClick={() => remove(index)}
                                  style={{
                                    backgroundColor: "red",
                                    color: "white",
                                  }}
                                >
                                  <FcFullTrash
                                    style={{ display: "-webkit-inline-flex" }}
                                  />
                                  Delete
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                      {/* -----------------Add more Flashcards Button part -----------------*/}
                      <div className="my-3 mx-5">
                        <button
                          type="button"
                          style={{ color: "blue", fontWeight: "bolder" }}
                          onClick={() =>
                            push({
                              FlashcardName: "",
                              FlashcardDefinition: "",
                            })
                          }
                        >
                          + Add Flashcard
                        </button>
                      </div>
                    </div>
                  );
                }}
                {/*------------------ Bottom Buttons part------------------------ */}
              </FieldArray>
              <div className="my-3 mx-5 d-flex align-items-center justify-content-center">
                {/*----------------------- Create Button-------------------- */}
                <button type="submit" className="btn btn-danger">
                  Create
                </button>
                {/*------------------------ Reset button-------------------- */}
                <button
                  type="button"
                  className="btn btn-secondary mx-3"
                  onClick={() => resetForm()}
                >
                  Reset
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreatePage;
