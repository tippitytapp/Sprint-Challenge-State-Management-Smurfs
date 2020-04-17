import React from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import axios from "axios";

const AddSmurfForm = () => {
  const dispatch = useDispatch();
  return (
    <div className="form">
      <Formik
        initialValues={{ name: "", age: "", height: "" }}
        onSubmit={(values, { resetForm }) => {
          const { name, age, height } = values;
          const obj = {
            name,
            age,
            height,
            id: new Date().toLocaleTimeString(),
          };
          dispatch({ type: "FETCHING_NEW_DATA" });
          axios.post("http://localhost:3333/smurfs", obj).then((res) => {
            dispatch({ type: "ADDED_DATA", payload: res.data });
          });
          resetForm();
        }}
      >
        {() => (
          <Form>
            <label htmlFor="name">
              <Field type="text" name="name" id="name" placeholder="name" />
            </label>
            <label htmlFor="age">
              <Field type="text" name="age" id="age" placeholder="age" />
            </label>
            <label htmlFor="height">
              <Field
                type="text"
                name="height"
                id="height"
                placeholder="height"
              />
            </label>
            <button type="submit">Add To Village</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddSmurfForm