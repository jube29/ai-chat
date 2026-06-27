import axios from "axios";

/**
 * Shared axios instance for talking to the Express API.
 *
 * - Relative baseURL ("/") -> requests hit :5173 and the Vite proxy forwards
 *   /auth/* to the server, so the browser sees a single origin.
 * - withCredentials sends the HttpOnly session cookie on every request
 *   (axios's equivalent of fetch's credentials: "include").
 * - axios auto-serializes request bodies, parses res.data, and REJECTS on
 *   non-2xx — so callers use try/catch and read err.response.status/.data.
 */
export const api = axios.create({
  baseURL: "/",
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});
