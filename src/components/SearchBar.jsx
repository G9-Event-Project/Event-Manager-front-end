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
    <div className="mb-4">
      <input className="border px-4 py-2" placeholder="Search events" value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={handleSearch} className="bg-blue-700 text-white px-4 py-2 ml-2 rounded">Search</button>
    </div>
  );
}
