import React from "react";
import RecordCard from "./RecordCard";


function Collection({recordsInCollection, setRecordsInCollection}) {

    document.body.style.backgroundImage = "url('https://static.vecteezy.com/system/resources/previews/006/797/720/original/retro-background-groovy-background-free-vector.jpg')"
    document.body.style.backgroundRepeat = "repeat"
    document.body.style.backgroundSize = 'auto'

    
    const handleDeleteFromCollectionClick = (record) => {
        const filterRecordsInCollection = recordsInCollection.filter(recordInCollection => recordInCollection.id !== record.id)
        setRecordsInCollection(filterRecordsInCollection)
    }

    const renderRecordsInCollection = recordsInCollection.map(record =>
        <RecordCard record={record} isInCollection={true} key={record.id} handleDeleteFromCollectionClick={handleDeleteFromCollectionClick}
        />)


    return (  
       <div className="record-collection-container">
               <h1>My Collection</h1>
           <div className="records-in-collection">
               {renderRecordsInCollection}
            </div>
       </div>
       
       
    )
}

export default Collection;