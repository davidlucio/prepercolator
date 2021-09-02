import React, { useState, useEffect } from "react";

import IngredientsTable from "../pieces/IngredientsTable";
import DrinksTable from "../pieces/DrinksTable";
import Header from "../Header";
import Footer from "../Footer";
import { useHistory } from "react-router-dom";

export default function BusinessPortal({ user }) {
  const [view, setView] = useState("ingredients");
  let history = useHistory();

  useEffect(() => {
    if (user.admin === false) {
      history.push("/");
    }
  }, []);

  return (
    <>
      <Header user={user} />
      <main>
        <div className="businessPortal">
          <div className="bpViewSelect">
            <h1 className="bpWelcome">Welcome, {user.username}</h1>
            <button onClick={() => setView("ingredients")}>
              See Existing Ingredients
            </button>
            <button onClick={() => setView("drinks")}>
              See Existing Drinks
            </button>
          </div>
          {view === "ingredients" ? (
            <IngredientsTable user={user} />
          ) : (
            <DrinksTable user={user} />
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
