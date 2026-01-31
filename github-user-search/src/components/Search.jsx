import { searchUsers } from "../services/githubService";

// Exported function for external use
export const fetchUserData = async ({ query, location, minRepos, page = 1 }) => {
  const data = await searchUsers({ query, location, minRepos, page });
  return data.items;
};

import { useState } from "react";

function Search() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [hasMore, setHasMore] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUsers([]);
    setPage(1);

    try {
      const items = await fetchUserData({ query, location, minRepos, page: 1 });
      setUsers(items);
      setHasMore(items.length > 0);
    } catch (err) {
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    const nextPage = page + 1;
    setLoading(true);

    try {
      const items = await fetchUserData({ query, location, minRepos, page: nextPage });
      setUsers((prev) => [...prev, ...items]);
      setPage(nextPage);
      setHasMore(items.length > 0);
    } catch {
      setError("Unable to load more users");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* your JSX for the form, user cards, and Load more button */}
    </div>
  );
}

export default Search;
