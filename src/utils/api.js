/**
 * @module api
 * @description Simple wrapper functions for making API requests to the backend.
 */
const BASE_URL = import.meta.env.VITE_API_URL;

/**
 * @description sends a POST request with JSON body to the specified API endpoint.
 *
 * @param {string} endpoint - API endpoint (relative path).
 * @param {Object} data - Payload to send in the request body.
 * @returns {Promise<Object>} Parsed JSON response.
 */
export async function post(endpoint, data) {
    const res = await fetch(`${BASE_URL}/${endpoint}/`, {
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

/**
 * @description sends a GET request to the specified API endpoint.
 *
 * @param {string} endpoint - API endpoint (relative path).
 * @returns {Promise<Object>} Parsed JSON response.
 */
export async function get(endpoint) {
    const response = await fetch(`${BASE_URL}/${endpoint}/`);
    if (!response.ok) throw new Error('Failed to fetch');
    return await response.json();
}