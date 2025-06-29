export async function apiFetch(endpoint, method = "GET", body = null) {
  const token = localStorage.getItem("token");
  const headers = {
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${token}` })
  };

  const res = await fetch(`http://127.0.0.1:5000${endpoint}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : null
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Something went wrong");
  return data;
}
