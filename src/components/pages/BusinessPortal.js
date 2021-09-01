import React, { useState } from "react";

import IngredientsTable from "../pieces/IngredientsTable";
import DrinksTable from "../pieces/DrinksTable";
import Header from "../Header";

export default function BusinessPortal({ user }) {
  const [view, setView] = useState("ingredients");

  return (
    <div className="businessPortal">
      <Header user={user} />
      <div className="bpViewSelect">
        <h1 className="bpWelcome">Welcome, {user.username}</h1>
        <button onClick={() => setView("ingredients")}>
          See Existing Ingredients
        </button>
        <button onClick={() => setView("drinks")}>See Existing Drinks</button>
      </div>
      {view === "ingredients" ? (
        <IngredientsTable user={user} />
      ) : (
        <DrinksTable user={user} />
      )}
    </div>
  );
}
