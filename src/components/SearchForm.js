import { useState } from "react";

export default function SearchForm() {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    // const form = event.target;
    // setSearchTerm(form.elements.searchTerm.value);

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    setSearchTerm(data.searchTerm);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="searchTerm">Search term:</label>
        <input name="searchTerm" id="searchTerm" />
        <button>
          <span role="img" aria-label="search icon">
            🔍
          </span>{" "}
          Search
        </button>
      </form>
      <h2>
        {searchTerm
          ? `You searched for "${searchTerm}"`
          : "Please enter a search term"}
      </h2>
    </>
  );
}
