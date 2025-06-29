import React from 'react';
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
    <div>
      <h2>Comments</h2>
      <textarea value={text} onChange={e => setText(e.target.value)} />
      <button onClick={postComment}>Post</button>
      {comments.map(c => (
        <div key={c.id}>
          <p>{c.text}</p>
          <button onClick={() => deleteComment(c.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
