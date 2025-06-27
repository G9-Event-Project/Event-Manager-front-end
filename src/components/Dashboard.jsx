import React from 'react';
import { apiFetch } from "../utils/api.js";

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
      <h1 className="text-2xl font-bold mb-4">Community Events</h1>
      <a href="/event/new" className="text-blue-600 underline mb-4 inline-block">+ Create New Event</a>
      {error && <p className="text-red-500">{error}</p>}
      <ul>
        {events.map(event => (
          <li key={event.id} className="border-b py-2">
            <a className="text-lg text-blue-800 underline" href={`/event/${event.id}`}>
              {event.title}
            </a>
            <p className="text-sm text-gray-600">{event.date} - {event.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
