import { apiFetch } from "../utils/api.js";
import CommentSection from "./CommentSection.js";

const { useParams } = ReactRouterDOM;

export default function EventDetail() {
  const { id } = useParams();
  const [event, setEvent] = React.useState(null);
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    apiFetch(`/api/events/${id}`)
      .then(setEvent)
      .catch(err => setError(err.message));
  }, [id]);

  if (error) return <p className="text-red-500 p-4">{error}</p>;
  if (!event) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{event.title}</h1>
      <p className="text-gray-600">{event.date} at {event.location}</p>
      <p className="mt-4">{event.description}</p>
      <CommentSection eventId={id} />
    </div>
  );
}
