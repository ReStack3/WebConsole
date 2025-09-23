// src/api/client.ts
export async function request<T>(url: string, options?: RequestInit): Promise<T> {
  const res = await fetch(url, {
    ...options,
    headers: { 'Content-Type': 'application/json', ...(options?.headers || {}) },
  });
  if (!res.ok) throw new Error(`Request failed with status ${res.status}`);
  return res.json() as Promise<T>;
}
