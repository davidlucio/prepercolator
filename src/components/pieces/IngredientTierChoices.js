import React from "react";
import IngredientChoice from "./IngredientChoice";

export default function IngredientTier({ tier }) {
  return (
    <>
      <label>
        {tier}
        <IngredientChoice tier={tier} />
      </label>
      <label>
        {tier + " Amount"}
        <IngredientAmount tier={tier} />
      </label>
    </>
  );
}
