import axios from "axios";

const BASE_URL = "https://api.github.com/search/users";

export const searchUsers = async ({
  query,
  location,
  minRepos,
  page = 1,
}) => {
  let q = query || "";

  if (location) {
    q += ` location:${location}`;
  }

  if (minRepos) {
    q += ` repos:>=${minRepos}`;
  }

  const response = await axios.get(BASE_URL, {
    params: {
      q,
      page,
      per_page: 10,
    },
    headers: {
      Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`,
    },
  });

  return response.data;
};
