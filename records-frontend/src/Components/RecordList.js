import React, { useState } from "react";
import Search from './Search';
import RecordCard from './RecordCard';

function RecordList({records, handleAddToCollectionClick,}) {
    
    document.body.style.backgroundImage = "url('https://img.freepik.com/free-vector/groovy-psychedelic-colorful-background_23-2149074828.jpg?w=2000')";
    // file://wsl%24/Ubuntu/home/julianne/Development/code/phase-3/project-records/That%20color%20brown%20is%20coming%20down.jpg
    document.body.style.backgroundRepeat = "repeat"
    document.body.style.backgroundSize = 'auto'

    const [searchQuery, setSearchQuery] = useState("")

    const filterRecords = records.filter(record => record.name.toLowerCase().includes(searchQuery.toLowerCase()))

    const renderCards = filterRecords.map(record =>
        <RecordCard
            record={record}
            key={record.id}
            handleAddToCollectionClick={handleAddToCollectionClick}
            isInCollection={false}
        />
    )
    
    return (
        <div className="search-and-cards">
            <Search
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}    
            />
            <div className="cards-container">
                {renderCards}
            </div>
        </div>
    )
}

export default RecordList;