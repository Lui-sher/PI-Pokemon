import React, { useState } from "react";

export default function SearchBar({onSearch}) {
  
    const [namePokemon, setNamePokemon] = useState("");
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(namePokemon);
    }}>
      <input
        type="text"
        placeholder="Pokemon Name..."
        value={namePokemon}
        onChange={e => setNamePokemon(e.target.value)}
      />
      <input type="submit" value="Search" />
    </form>
  );
}