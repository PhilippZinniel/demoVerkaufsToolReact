const BASE_URL = import.meta.env.VITE_API_URL;

export async function post(endpoint, data) {
    const res = await fetch(`${BASE_URL}${endpoint}/`, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),

    });

    if (!res.ok) {
        const error = await res.json().catch(() => ({}));
        throw new Error(error.message || `API error: ${res.status}`);
    }

    return res.json();
}

export async function get(endpoint) {
    const response = await fetch(`http://localhost:8000/${endpoint}/`);
    if (!response.ok) throw new Error('Failed to fetch');
    return await response.json();
}