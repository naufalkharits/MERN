import React from "react";

const Search = () => {
    return (
        <input
            className="rounded-full border-0 bg-neutral-100 py-2 px-4 focus:border focus:border-neutral-200 focus:ring-0 dark:bg-neutral-800 dark:text-neutral-300 dark:focus:border-neutral-700"
            type="text"
            placeholder="Search here"
        />
    );
};

export default Search;
