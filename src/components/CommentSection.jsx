import { apiFetch } from "../utils/api.js";

export default function CommentSection({ eventId }) {
  const [comments, setComments] = React.useState([]);
  const [text, setText] = React.useState("");

  const fetchComments = () =>
    apiFetch(`/api/comments/${eventId}`).then(setComments);

  React.useEffect(() => {
    fetchComments();
  }, [eventId]);

  const postComment = async () => {
    if (!text.trim()) return;
    await apiFetch("/api/comments", "POST", { event_id: eventId, text });
    setText("");
    fetchComments();
  };

  const deleteComment = async (id) => {
    await apiFetch(`/api/comments/${id}`, "DELETE");
    fetchComments();
  };

  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold mb-2">Comments</h2>
      <textarea className="border w-full p-2 mb-2" value={text} onChange={e => setText(e.target.value)} />
      <button className="bg-green-600 text-white px-4 py-2 rounded mb-4" onClick={postComment}>Post</button>
      {comments.map(c => (
        <div key={c.id} className="border-b py-2">
          <p>{c.text}</p>
          <button onClick={() => deleteComment(c.id)} className="text-red-500 text-sm">Delete</button>
        </div>
      ))}
    </div>
  );
}
