const BASE_URL = "https://api.github.com";

const headers = {
  Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`,
};

export const searchUsers = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/users?q=${query}`,
    { headers }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch GitHub users");
  }

  return response.json();
};
