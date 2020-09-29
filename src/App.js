import React, { useEffect, useState, useCallback } from "react";
import { useDispatch } from "react-redux";

import { fetchBooks } from "./store/flights/actions";

import RqQuery from "./components/RqQuery/RqQuery";
import OneList from "./components/OneList/OneList";
import SecondList from "./components/SecondList/SecondList";

import "./App.css";

function App() {
  const [toggle, setToggle] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const renderComponent = useCallback(
    (props) => {
      if (toggle) return <OneList {...props} />;
      else return <SecondList {...props} />;
    },
    [toggle]
  );

  return (
    <div className="App">
      <button onClick={() => setToggle(!toggle)}>toggle</button>
      <RqQuery queryType="FETCH_BOOKS" render={renderComponent} />
    </div>
  );
}

export default App;
