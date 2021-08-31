import React from "react";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import UserContext from "./components/context/UserContext";

export default function App() {
  const user = {
    admin: true,
    username: "Testing User",
    email: "test@test.test",
    // Putting in dummy data for testing, maybe good layout for data structure?
    savedDrinks: [
      {
        userDrinkName: "Morning Mocha",
        saveDate: Date.now(),
        ingredients: [
          {
            // Unit determined by type?
            ingredient: "Espresso",
            type: "Espresso",
            units: "shots",
            amount: 2,
          },
          {
            ingredient: "Whole Milk",
            type: "liquid",
            units: "ounces",
            amount: 4,
            steamed: true,
          },
          {
            // So flavor ingredients could either be syrup, powder, etc and could then have units defined by type (pumps for syrup, scoops for powder?)
            ingredient: "Chocolate Syrup",
            type: "flavor-syrup",
            units: "pumps",
            amount: 2,
          },
        ],
      },
    ],
    settings: {
      theme: "light",
    },
  };

  return (
    <UserContext.Provider value={user}>
      <Nav user={user} />
      <Footer />
    </UserContext.Provider>
  );
}
