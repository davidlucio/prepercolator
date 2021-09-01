import React, { useContext, useEffect } from "react";
import SavedDrinks from "../cards/SavedDrinks";
import Settings from "../cards/Settings";
import Header from "../Header";

import { useHistory } from "react-router-dom";

export default function Profile({ user }) {
  let history = useHistory();

  useEffect(() => {
    if (!user.username) {
      history.push("/login");
    }
  }, []);
  return (
    <main>
      <Header user={user} />
      <h2>{user.username}'s Profile</h2>
      <SavedDrinks user={user} />
      <Settings user={user} />
    </main>
  );
}
