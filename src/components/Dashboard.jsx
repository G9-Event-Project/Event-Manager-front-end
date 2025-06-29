import React from 'react';
import { apiFetch } from "../utils/api.js";
import SearchBar from "./SearchBar";

export default function Dashboard() {
  const [events, setEvents] = React.useState([]);
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    apiFetch("/api/events")
      .then(setEvents)
      .catch(err => setError(err.message));
  }, []);

  return (
    <div className="p-6">
      <h1>Community Events</h1>
      <a href="/event/new">+ Create New Event</a>
      {error && <p>{error}</p>}
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <a href={`/event/${event.id}`}>
              {event.title}
            </a>
            <p>{event.date} - {event.location}</p>
          </li>
        ))}
      </ul>
      <SearchBar />
    </div>
  );
}
