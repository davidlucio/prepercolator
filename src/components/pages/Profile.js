import React, { useContext } from "react";
import SavedDrinks from "../cards/SavedDrinks";
import Settings from "../cards/Settings";
import Header from "../Header";

import UserContext from "../context/UserContext";

export default function Profile() {
  const user = useContext(UserContext);
  return (
    <main>
      <Header user={user} />
      <h2>{user.username}'s Profile</h2>
      <SavedDrinks user={user} />
      <Settings user={user} />
    </main>
  );
}
