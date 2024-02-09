// src/api/users.js
export async function fetchUsers() {
    const response = await fetch("/api/v1/admin/users");
    if (!response.ok) throw new Error("Network response was not ok");
    return response.json();
}
