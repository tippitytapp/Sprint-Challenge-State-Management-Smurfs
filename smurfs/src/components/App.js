import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import AddSmurfForm from "./addSmurf";
import Smurfs from "./Smurfs";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const reducer = useSelector((state) => ({
    ...state,
  }));
  const { data, loading } = reducer.smurfsReducer;

  useEffect(() => {
    dispatch({ type: "FETCHING_DATA" });
    axios
      .get("http://localhost:3333/smurfs")
      .then((res) => {
        dispatch({ type: "NEW_DATA", payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: "ERROR", payload: err });
      });
  }, []);

  useEffect(() => {
    dispatch({ type: "POSTING_DATA" });
  }, []);

  const removeSmurf = (id) => {
    dispatch({ type: "REMOVING" });

    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then((res) => {
        console.log("please work ", res);
        dispatch({ type: "REMOVED_SMURF", payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: "ERROR_REMOVING", payload: err });
      });
  };
  return (
    <div className="App">
      <h1>Welcome to SMURF Village</h1>
      <h4>New SMURF moving in?</h4>
      <AddSmurfForm />
      {!loading ? (
        <Smurfs data={data} removeSmurf={removeSmurf} />
      ) : (
        <h1 className="loading">loading...</h1>
      )}
    </div>
  );
};

export default App;