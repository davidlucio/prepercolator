import React, { useState } from "react";

import IngredientsTable from "../pieces/IngredientsTable";
import DrinksTable from "../pieces/DrinksTable";

export default function BusinessPortal({ user }) {
  const [view, setView] = useState("ingredients");

  return (
    <div className="businessPortal">
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
