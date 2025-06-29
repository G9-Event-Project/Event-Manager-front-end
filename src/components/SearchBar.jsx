import React from 'react';
import { apiFetch } from "../utils/api.js";

export default function SearchBar({ onResults }) {
  const [query, setQuery] = React.useState("");

  const handleSearch = async () => {
    try {
      const data = await apiFetch(`/api/events/search?q=${encodeURIComponent(query)}`);
      onResults(data);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="search-bar">
      <input placeholder="Search events" value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
