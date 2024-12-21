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

export async function loginUser(login, password) {
  return await fetchApi("login", {
    method: "POST",
    body: JSON.stringify({ login, password }),
  });
}

export async function registerUser(login, password, name = "", city) {
  return await fetchApi("signUp", {
    body: JSON.stringify({ login, password, name, city }),
    method: "POST",
  });
}

export async function logoutUser() {
  return await fetchApi("logout", { method: "POST" });
}

export async function getUsers() {
  return await fetchApi("users", { method: "GET" });
}

export async function getCurrentUser() {
  return await fetchApi("currentUser", { method: "GET" });
}

export async function editUserInfo(
  name,
  surname,
  city,
  professionArray,
  aboutMe,
  avatar
) {
  return await fetchApi("update", {
    body: JSON.stringify({
      name,
      surname,
      city,
      professions: professionArray,
      aboutMe,
      avatar,
    }),
    method: "PATCH",
  });
}

export async function makeUserSpecialist(city, professions, aboutMe) {
  return await fetchApi("userToSpecialist", {
    body: JSON.stringify({ city, professions, aboutMe }),
    method: "PATCH",
  });
}
