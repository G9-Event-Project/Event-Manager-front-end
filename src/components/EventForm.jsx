import React from 'react';
import { apiFetch } from "../utils/api.js";

export default function EventForm({ isEdit = false, eventId = null }) {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [date, setDate] = React.useState("");

  React.useEffect(() => {
    if (isEdit && eventId) {
      apiFetch(`/api/events/${eventId}`).then(data => {
        setTitle(data.title);
        setDescription(data.description);
        setLocation(data.location);
        setDate(data.date);
      });
    }
  }, [eventId]);

  const handleSubmit = async () => {
    const payload = { title, description, location, date };
    try {
      if (isEdit) {
        await apiFetch(`/api/events/${eventId}`, "PUT", payload);
      } else {
        await apiFetch("/api/events", "POST", payload);
      }
      window.location.href = "/dashboard";
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div>
      <h2>{isEdit ? "Edit Event" : "Create Event"}</h2>
      <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
      <input placeholder="Location" value={location} onChange={e => setLocation(e.target.value)} />
      <input type="date" value={date} onChange={e => setDate(e.target.value)} />
      <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
      <button onClick={handleSubmit} >
        {isEdit ? "Update" : "Create"}
      </button>
    </div>
  );
}
