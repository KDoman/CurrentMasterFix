const BASE_URL = "http://localhost:5000/api";

async function fetchApi(endpoint, options = {}) {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      ...options,
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Błąd podczas fetchowania");
    }

    return await response.json();
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
    throw error;
  }
}

// Funkcja do logowania użytkownika
export async function loginUser(login, password) {
  return await fetchApi("login", {
    method: "POST",
    body: JSON.stringify({ login, password }),
  });
}

export async function registerUser(login, password, name = "") {
  return await fetchApi("signUp", {
    body: JSON.stringify({ login, password, name }),
    method: "POST",
  });
}

// Funkcja do wylogowania użytkownika
export async function logoutUser() {
  return await fetchApi("logout", { method: "POST" });
}

// Funkcja do pobierania listy użytkowników
export async function getUsers() {
  return await fetchApi("users", { method: "GET" });
}
