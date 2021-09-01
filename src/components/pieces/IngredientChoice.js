import React, { useState } from "react";
import API from "../utils/API";

export default function IngredientChoice({ tier }) {
  const [choices, setChoices] = useState([]);

  useEffect(() => {
    API.getIngredientsByTier(tier).then((res) => {
      setChoices(res.data);
    });
  });
  return choices.map((choice) => {
    return (
      <option key={choice.id} value={choice.id}>
        {choice.ingredient_name}
      </option>
    );
  });
}
