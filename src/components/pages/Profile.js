import React from "react";
import SavedDrinks from "../cards/SavedDrinks";
import Settings from "../pages/Settings";

export default function Profile({ user }) {
  return (
    <main>
      <h2>{user.username}'s Profile</h2>
      <SavedDrinks user={user} />
      <Settings user={user} />
    </main>
  );
}
