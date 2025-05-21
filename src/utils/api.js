export async function apiRequest(endpoint, options = {}) {
    const BASE_URL = import.meta.env.VITE_API_URL;
    const res = await fetch(`${BASE_URL}${endpoint}/`, {
        headers: {
            "Content-Type": "application/json",
        },
        ...options,
    });

    if (!res.ok) {
        const error = await res.json().catch(() => ({}));
        throw new Error(error.message || `API error: ${res.status}`);
    }

    return res.json();
}

export async function post(endpoint, data) {
    return apiRequest(endpoint,
        {
            method: "POST",
            body: JSON.stringify(data),
        })
}