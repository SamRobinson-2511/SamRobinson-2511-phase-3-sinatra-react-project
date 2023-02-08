import React from "react";

function Search({search, setSearch}) {

    return (
        <div className="search-container">
            <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search for a record..."></input>
        </div>
    )
}

export default Search;