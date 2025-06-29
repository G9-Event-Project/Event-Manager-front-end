import React from 'react';
import { useParams } from 'react-router-dom';
import { apiFetch } from "../utils/api.js";
import CommentSection from "./CommentSection.jsx";

export default function EventDetail() {
  const { id } = useParams();
  const [event, setEvent] = React.useState(null);
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    apiFetch(`/api/events/${id}`)
      .then(setEvent)
      .catch(err => setError(err.message));
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!event) return <p>Loading...</p>;

  return (
    <div>
      <h1>{event.title}</h1>
      <p>{event.date} at {event.location}</p>
      <p>{event.description}</p>
      <CommentSection eventId={id} />
    </div>
  );
}
