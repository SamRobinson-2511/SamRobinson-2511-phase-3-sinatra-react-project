import React from "react";

function RecordCard({record, handleAddToCollectionClick, isInCollection, handleDeleteFromCollectionClick, handleAddReview, handleDeleteCard}) {


    function deleteCard (){
        fetch(`http://localhost:9292/records/${record.id}`, {
        method: "DELETE"
    }
        )

        handleDeleteCard(record.id)
    }
    return (
        <div className={isInCollection ? "collection-card" : "card"}>
            <img id="record-img" src={record.image_url} alt={record.album_name} />
            <div className="details-container">
                <div id="record-label">{record.label}</div>
                <div id="record-release-date"> {record.release_date} </div>
                <div id="record-genre"> {record.genre} </div>
                <div id="cat-num"> {record.cat_nam} </div>
            </div>
            <p id="name-container">{record.album_name}</p>
            { !isInCollection  &&
                ( <button id="add-to-collection-btn" onClick={ () => handleAddToCollectionClick(record) }>Add My Collection</button> )
            }
            { isInCollection && 
                ( <button id="delete-btn" onClick={ () => handleDeleteFromCollectionClick(record) }>Remove From My Collection</button> )
            }
            <button onClick={deleteCard}>delete</button>
            
        </div>
    )
}

export default RecordCard;