const BASE_URL = "https://masterfix-backend-pbgj.onrender.com/api";



async function fetchApi(endpoint, options = {}) {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      ...options,
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Nieoczekiwany błąd, skontaktuj się z deweloperem");
    }

    return await response.json();
  } catch (error) {
    console.error(`Offline Server ${endpoint}:`, error);
    throw new Error(error.message);
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
  avatar,
  lat,
  lng,
  phone,
  email
) {
  return await fetchApi("update", {
    body: JSON.stringify({
      name,
      surname,
      city,
      professions: professionArray,
      aboutMe,
      avatar,
      latitude: lat,
      longitude: lng,
      phone,
      email,
    }),
    method: "PATCH",
  });
}

export async function makeUserSpecialist(
  city,
  professions,
  aboutMe,
  latitude,
  longitude,
  phone,
  email
) {
  if (
    !latitude ||
    !longitude ||
    !professions.length ||
    !city ||
    !aboutMe ||
    !phone ||
    !email
  )
    throw new Error("Wypełnij wszystkie pola");
  return await fetchApi("userToSpecialist", {
    body: JSON.stringify({
      city,
      professions,
      aboutMe,
      latitude,
      longitude,
      phone,
      email,
    }),
    method: "PATCH",
  });
}

export async function findSpecialistById(findSpecialistById) {
  return await fetchApi(`findById/${findSpecialistById}`, { method: "GET" });
}

export async function sendReview(specialistId, userId, name, mark, message) {
  return await fetchApi("sendReview", {
    method: "PATCH",
    body: JSON.stringify({ specialistId, userId, name, mark, message }),
  });
}
