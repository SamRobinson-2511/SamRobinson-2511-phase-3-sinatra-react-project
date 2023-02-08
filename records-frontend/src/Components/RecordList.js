import React, { useState } from "react";
import Search from './Search';
import RecordCard from './RecordCard';

function RecordList({records, handleAddToCollectionClick,handleAddReview, handleDeleteCard}) {
    
    document.body.style.backgroundImage = "url('https://t4.ftcdn.net/jpg/04/26/45/69/360_F_426456902_fAwmov2ZEmUjR9SPrSCPzemYrfS1mc7H.jpg')";
    // file://wsl%24/Ubuntu/home/julianne/Development/code/phase-3/project-records/That%20color%20brown%20is%20coming%20down.jpg
    document.body.style.backgroundRepeat = "no-repeat"
    document.body.style.backgroundSize = 'cover'

    const [search, setSearch] = useState("")

    // const filterRecords = records.filter(record => record.name?.toLowerCase().includes(searchQuery.toLowerCase()))

    const searchRecords = records.filter((album_name)=> { 
    return album_name.record?.toLowerCase().includes(search.toLowerCase())
      })

    const renderCards = records.map((record) =>{
    return   ( <RecordCard
            record={record}
            key={record.id}
            handleAddToCollectionClick={handleAddToCollectionClick}
            handleAddReview ={handleAddReview}
            handleDeleteCard = {handleDeleteCard}
            isInCollection={false}
        />)}
    )
    
    
    return (
        <div className="search-and-cards">
            <Search
                search={search}
                setSearch={setSearch}    
            />
            <div className="cards-container">
                {renderCards}
                {searchRecords}
            </div>
        </div>
    )
}

export default RecordList;